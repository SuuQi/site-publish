import './css/index.less';

import React from 'react';
import { render } from 'react-dom';
import { HashRouter as Router, Route } from 'react-router-dom';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import thunkMiddleware from 'redux-thunk';

import Header from './pages/Header';
import Home from './pages/home/home';
import { views as Publish, reducer as pubish } from './pages/Publish';

const store = createStore(
    combineReducers({
        pubish
    }),
    {},
    applyMiddleware(thunkMiddleware)
);

render(
    <Provider store={store}>
        <Router>
            <div className="app">
                <Header />
                <Route exact path="/" component={Home} />
                <Route path="/publish" component={Publish} />
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);
