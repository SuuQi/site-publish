import React from 'react';
import { connect } from 'react-redux';
import { Button, Card } from 'antd';

import * as actions from '../actions';

import FtpList from './FtpList';
import FtpModal from './FtpModal';

class Ftp extends React.Component {
    state = {
        modalVisible: false
    }

    componentDidMount () {
        this.props.getList();
    }

    showModal = () => {
        this.setState({
            modalVisible: true
        });
    }

    hideModal = () => {
        this.setState({
            modalVisible: false
        });
    }

    render () {
        return (
            <div className="ftp">
                <Button icon="file-add" onClick={this.showModal}>新增ftp配置</Button>
                <FtpList list={this.props.list} />
                <FtpModal
                    addFtp={this.props.addFtp}
                    visible={this.state.modalVisible}
                    showModal={this.showModal}
                    hideModal={this.hideModal}
                    testFtp={this.props.testFtp}
                />
            </div>
        )
    }
}

export default connect(
    state => ({
        ...state.ftp
    }),
    dispatch => ({
        getList: () => dispatch(actions.getList()),
        addFtp: data => dispatch(actions.addFtp(data)),
        testFtp: data => dispatch(actions.testFtp(data)),
    })
)(Ftp);
