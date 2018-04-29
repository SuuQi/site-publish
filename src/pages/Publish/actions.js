
import { fetchAjax } from 'Utils';

import { GET_LIST, ADD_PROJECT } from './actionTypes';

export function getList () {
    return fetchAjax({
        url: '/api/publish/',
        type: GET_LIST
    });
}

export function addProject (data) {
    return fetchAjax({
        url: '/api/publish/',
        method: 'post',
        type: ADD_PROJECT,
        data
    });
}
