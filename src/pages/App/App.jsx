
import React from 'react';

export default class App extends React.Component {
    constructor () {
        super(...arguments);
    }

    render () {
        return (
            <div className="app">
                { this.props.children }
            </div>
        );
    }
}
