import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Sample from './sample';
import './index.css';
import { Provider } from 'react-redux'
import { Router, Route, browserHistory } from 'react-router'
import configureStore from './ConfigureStore';
export const store = configureStore();


let route = (
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/" component={App}>
            </Route>
            <Route path="/sample/*" component={Sample}/>
        </Router>
    </Provider>
);

ReactDOM.render(
  route,
  document.getElementById('root')
);
