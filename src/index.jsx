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
import { views as Ftp, reducer as ftp } from './pages/Ftp';

const store = createStore(
    combineReducers({
        pubish,
        ftp
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
                <Route path="/ftp" component={Ftp} />
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);
