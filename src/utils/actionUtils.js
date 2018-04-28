import axios from 'axios';
import { FETCH_FIRE, FETCH_SUCCESS, FETCH_FAILURE, PARAMS_TYPE } from 'Config';

export function fetchAjax ({ url, type = 'get', title, data = {} }) {
    return function (dispatch) {
        dispatch({ title, status: FETCH_FIRE });
        return axios[type](url, PARAMS_TYPE.includes(type) ? { params: data } : data)
            .then(payload => {
                dispatch({ title, status: FETCH_SUCCESS, payload });
            })
            .catch(e => {
                dispatch({ title, status: FETCH_FAILURE });
            });
    }
}

