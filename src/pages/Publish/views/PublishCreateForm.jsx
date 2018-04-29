import React from 'react';
import { Modal, Form, Input } from 'antd';

const FormItem = Form.Item;

class PublishCreateForm extends React.Component {

    handleSubmit (e) {
        this.props.form.validateFields(async (err, values) => {
            if (err) return;
            this.props.addProject(values);
            this.props.hideModal();
        });
    }

    render () {
        const { visible, hideModal } = this.props;

        const { getFieldDecorator } = this.props.form;
        
        return (
            <Modal
                title="新建项目"
                visible={visible}
                onCancel={hideModal}
                onOk={this.handleSubmit.bind(this)}
            >
                <Form layout="horizontal" >
                    <FormItem label="名称" >
                        {getFieldDecorator('name', {
                            rules: [{ required: true, message: '请输入项目名称' }],
                        })(
                            <Input placeholder="请输入项目名称" />
                        )}
                    </FormItem>
                    <FormItem label="描述" >
                        {getFieldDecorator('desc', {
                            rules: [{ required: true, message: '请输入项目描述' }],
                        })(
                            <Input placeholder="请输入项目描述" />
                        )}
                    </FormItem>
                    <FormItem label="git" >
                        {getFieldDecorator('git', {
                            rules: [{ required: true, message: '请输入git地址' }],
                        })(
                            <Input placeholder="请输入git地址" />
                        )}
                    </FormItem>
                </Form>
            </Modal>
        )
    }
}

const WrappedPublishCreateForm = Form.create()(PublishCreateForm);

export default WrappedPublishCreateForm;
