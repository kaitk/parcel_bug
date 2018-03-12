import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Router } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import { compose } from 'ramda';

import RootReducer from './reducers/RootReducer';
import App from './app/App';

const history = createHistory();
const middleware = routerMiddleware(history);
const composedStore = compose(composeWithDevTools(applyMiddleware(thunk, middleware)))(createStore);
const store = composedStore(RootReducer);

ReactDOM.render(
  <Provider store={store}>
    <div>
      <Router history={history}>
        <App />
      </Router>
    </div>
  </Provider>,
  document.getElementById('content')
);
