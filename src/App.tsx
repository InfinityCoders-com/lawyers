import React from 'react';
import { Route, Router, Switch } from 'react-router-dom'
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { createBrowserHistory } from 'history'
import RouteLayout from './components/RouteLayout';

const history = createBrowserHistory()

const RoutesPath = {
  LOGIN: '/login',
  LOGOUT: '/logout'
}

function App() {
  console.log(extendTheme)
  return (
    <div className="App">
      <ChakraProvider>
        <Router history={history}>
          <Route exact path={RoutesPath.LOGIN} component={RouteLayout} />
          <Route exact path={RoutesPath.LOGOUT} component={RouteLayout} />
          <Route exact path={'/'} component={RouteLayout} />
        </Router>
      </ChakraProvider>
    </div>
  );
}

export default App;
