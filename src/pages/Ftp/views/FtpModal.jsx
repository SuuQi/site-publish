import React from 'react';

import { Modal, Form, Input } from 'antd';
import FtpSubForm from './FtpSubForm';

const FormItem = Form.Item;

import { FORM_CONFIG } from '../config';

class FtpModal extends React.Component {

    handleSubmit = () => {
        let formData = {};
        let formComplete = true;
        FORM_CONFIG.map(({ key }) => {
            this.refs[key].validateFieldsAndScroll((err, values) => {
                if (err) {
                    formComplete = false;
                    return;
                }
                formData = Object.assign({}, formData, values);
                console.log(formData);
            })
        })
        if (formComplete) {
            this.props.addFtp(formData);
            this.props.hideModal();
        }
    }

    render () {
        const { visible, hideModal } = this.props;

        return (
            <Modal
                title="新增Ftp配置"
                visible={visible}
                onCancel={hideModal}
                onOk={this.handleSubmit}
                width={600}
            >
                {
                    FORM_CONFIG.map(({ key, info }) => {
                        return (
                            <FtpSubForm
                                ref={key}
                                key={key}
                                formKey={key}
                                testFtp={this.props.testFtp}
                                info={info}
                            />
                        );
                    })
                }
            </Modal>
        );
    }
}

export default FtpModal;
