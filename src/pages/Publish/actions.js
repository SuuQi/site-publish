
import { fetchAjax } from 'Utils';

import { GET_LIST } from './actionTypes';

export function getList () {
    return fetchAjax({
        url: '/api/publish/',
        type: GET_LIST
    });
}
