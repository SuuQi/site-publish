import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';

import Header from './pages/Header';
import Home from './pages/home/home';
import Publish from './pages/Publish';

const routes = (
    <Router>
        <div className="app">
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/publish" component={Publish} />
        </div>
    </Router>
)

export default routes;
