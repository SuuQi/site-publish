
import fetchAjax from 'Utils';

import { GET_LIST } from './actionTypes';

export function getList () {
    return fetchAjax({
        url: '/publish',
        title: GET_LIST
    });
}
