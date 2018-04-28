
import React from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';


import App from './pages/App';
import Home from './pages/home/home';
import Publish from './pages/Publish';

const routes = (
    <Router>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/home" component={Home} />
            <Route path="/publish" component={Publish} />
        </Switch>
    </Router>
)

export default routes;
