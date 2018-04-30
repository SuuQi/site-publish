import React from 'react';
import { Form, Input, Button } from 'antd';

const FormItem = Form.Item;

class FtpSubForm extends React.Component {

    handleTest = (e) => {
        this.props.form.validateFields((err, values) => {
            console.log(values[this.props.formKey]);
            if (err) return;
            this.props.testFtp(values[this.props.formKey]);
        });
    }

    render () {
        const { formKey, info } = this.props;
        const { getFieldDecorator } = this.props.form;

        return (
            <Form layout="inline" className="ftp-form">
                <h3 className="ftp-form__title f-cb">
                    { info }的ftp配置：
                    <FormItem className="f-fr">
                        <Button onClick={this.handleTest}>检查配置</Button>
                    </FormItem>
                </h3>
                <FormItem label="帐号" >
                    {getFieldDecorator(`${formKey}.username`, {
                        rules: [{ required: true, message: '请输入ftp帐号' }],
                    })(
                        <Input placeholder="请输入ftp帐号" />
                    )}
                </FormItem>
                <FormItem label="密码" >
                    {getFieldDecorator(`${formKey}.password`, {
                        rules: [{ required: true, message: '请输入请输入' }]
                    })(
                        <Input type="password" placeholder="请输入请输入" />
                    )}
                </FormItem>
                <FormItem label="服务器" >
                    {getFieldDecorator(`${formKey}.domain`, {
                        rules: [{ required: true, message: '请输入ftp服务器地址' }],
                        initialValue: 'suqin.xyz'
                    })(
                        <Input placeholder="请输入ftp服务器地址" />
                    )}
                </FormItem>
                <FormItem label="端口" >
                    {getFieldDecorator(`${formKey}.port`, {
                        rules: [{ required: true, message: '请输入ftp服务器端口号' }],
                        initialValue: '21'
                    })(
                        <Input placeholder="请输入ftp服务器端口号" />
                    )}
                </FormItem>
                <FormItem label="路径前缀" >
                    {getFieldDecorator(`${formKey}.ftpPathPrefix`, {
                        rules: [{ required: true, message: '请输入ftp路径前缀' }]
                    })(
                        <Input placeholder="请输入ftp路径前缀" />
                    )}
                </FormItem>
                <FormItem label="地址前缀" >
                    {getFieldDecorator(`${formKey}.path`, {
                        rules: [{ required: true, message: '请输入线上地址前缀' }]
                    })(
                        <Input placeholder="请输入线上地址前缀" />
                    )}
                </FormItem>
            </Form>
        );
    }
}

export default Form.create()(FtpSubForm);
