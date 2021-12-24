import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserHistory } from 'history';
import React, { Suspense } from 'react';
import axios from 'axios'
import {
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { Route, Router, Switch } from 'react-router-dom';
import { Layout } from './components';
import { IRouteConfig, shareRoutes } from './config/routes';
import { API_URLS } from "./config/constants";
const history = createBrowserHistory()

const Loader = () => <div>'Loading...'</div>

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false
    },
  },
})
function App() {
  React.useEffect(() => {
    axios.interceptors.request.use(function (config) {
      var URL = `${API_URLS.baseURL}${config.url}`
      if(config.url?.includes('http')) {
        URL = config.url
      }
      return {
        ...config,
        url: URL
      }
    }, function (error) {
      return Promise.reject(error);
    })
  }, [])
  return (
    <div className="App">
      <ChakraProvider>
        <QueryClientProvider client={queryClient}>
          <Suspense fallback={<Loader />}>
            <Router history={history}>
              <Switch>
                {shareRoutes.map((route: IRouteConfig, i: number) => (
                  <Route
                    key={`${route.path}-${i}`}
                    render={(props: any) => (
                      <Layout
                        {...props}
                        {...route}
                        route={route}
                      />
                    )}
                    path={route.path}
                    exact={route.exact}
                  />
                ))}
              </Switch>
            </Router>
          </Suspense>
        </QueryClientProvider>
      </ChakraProvider>
    </div>
  );
}

export default App;
