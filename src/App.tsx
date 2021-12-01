import { ChakraProvider } from "@chakra-ui/react";
import { createBrowserHistory } from 'history';
import React, { Suspense } from 'react';
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from 'react-query'
import { Route, Router, Switch } from 'react-router-dom';
import { Layout } from './components';
import { IRouteConfig, shareRoutes } from './config/routes';
const history = createBrowserHistory()

const Loader = () => <div>'Loading...'</div>

const queryClient = new QueryClient()

function App() {
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
