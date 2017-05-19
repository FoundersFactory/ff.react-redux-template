import { render } from "react-dom"
import React from 'react';
import { applyRouterMiddleware, browserHistory, Router, Route, IndexRoute } from 'react-router';
import { Provider } from 'react-redux';
import configureStore from './store';
import { useScroll } from 'react-router-scroll';

import App from './global/App';
import NotFound from './global/NotFound';

import Home from './features/home/Home';

const store = configureStore();
const containerEl = document.getElementById("main");

const scroll = useScroll((prevRouterProps, { location }) => {
    if (location.action === 'POP' || location.action === 'REPLACE') {
        return false;
    }
    return [0, 0];
});

render((
    <Provider store={store}>
      <Router history={browserHistory} render={applyRouterMiddleware(scroll)}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path='*' component={NotFound} />
        </Route>
      </Router>
    </Provider>
), containerEl);
