import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';

import * as actions from '../actions';

import PublishTable from './PublishTable';
import PublishCreateForm from './PublishCreateForm';

class Publish extends React.Component {
    state = {
        createModalVisible: false
    }
    
    showCreateModal () {
        this.setState({
            createModalVisible: true
        });
    }

    hideCreateModal (e) {
        console.log(e);
        this.setState({
            createModalVisible: false
        });
    }

    render () {
        console.log(this.props);
        return (
            <div className="publish">
                <Button type="primary" size="large" onClick={() => this.setState({ createModalVisible: true })} >新增</Button>
                <PublishTable />
                <PublishCreateForm
                    visible={this.state.createModalVisible}
                    showModal={this.hideCreateModal.bind(this)}
                    hideModal={this.hideCreateModal.bind(this)}
                />
            </div>
        )
    }
}

export default connect(
    state => ({
        ...state.pubish
    }),
    dispatch => ({
        ...actions
    })
)(Publish);
