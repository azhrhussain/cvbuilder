import React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import store from 'redux/store';
import { ROOT } from 'configs/routeNames';
import Dashboard from 'components/dashboard/Dashboard';
import 'styles/App.css';

const history = createHistory();

const App = () => (
  <Provider store={store} history={history}>
    <Router>
      <Switch>
        <Route
          path={ROOT}
          component={Dashboard}
        />
      </Switch>
    </Router>
  </Provider>
);
export default App;
