import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'antd';

import * as actions from '../actions';

import PublishTable from './PublishTable';
import PublishCreateForm from './PublishCreateForm';

class Publish extends React.Component {
    state = {
        createModalVisible: fase
    }

    componentDidMount () {
        this.props.getList();
    }
    
    showCreateModal = () => {
        this.setState({
            createModalVisible: true
        });
    }

    hideCreateModal = () => {
        this.setState({
            createModalVisible: false
        });
    }

    render () {
        return (
            <div className="publish">
                <Button type="primary" size="large" onClick={this.showCreateModal} >新增</Button>
                <PublishTable list={this.props.list} />
                <PublishCreateForm
                    addProject={this.props.addProject}
                    visible={this.state.createModalVisible}
                    showModal={this.showCreateModal}
                    hideModal={this.hideCreateModal}
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
        getList: () => dispatch(actions.getList()),
        addProject: data => dispatch(actions.addProject(data))
    })
)(Publish);
