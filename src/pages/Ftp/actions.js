
import { fetchAjax } from 'Utils';

import { GET_LIST, ADD_FTP, TEST_FTP } from './actionTypes';

import { message } from 'antd';

export function getList () {
    return fetchAjax({
        url: '/api/ftp/',
        type: GET_LIST
    });
}

export function addFtp (data) {
    return fetchAjax({
        url: '/api/ftp/',
        method: 'post',
        type: ADD_FTP,
        data,
        callback: res => {
            if (res) {
                message.success('添加成功');
            }
        }
    });
}

export function testFtp (data) {
    return fetchAjax({
        url: '/api/ftp/test',
        method: 'post',
        type: TEST_FTP,
        data,
        callback: res => {
            if (res) {
                message.success('ftp连接配置正确！')
            }
        }
    });
}
