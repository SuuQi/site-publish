
import React from 'react';
import { DatePicker, Button } from 'antd';

class Home extends React.Component {
    constructor () {
        super(...arguments);
    }

    render () {
        const { match, location, history } = this.props;
        console.log(match, location, history);
        return (
            <DatePicker />
        );
    }
}

export default Home;