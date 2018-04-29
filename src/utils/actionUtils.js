import axios from 'axios';
import { FETCH_FIRE, FETCH_SUCCESS, FETCH_FAILURE, PARAMS_METHOD } from 'Config';

export function fetchAjax ({ url, method = 'get', type, data = {} }) {
    return function (dispatch) {
        dispatch({ type, status: FETCH_FIRE });
        return axios[method](url, PARAMS_METHOD.includes(method) ? { params: data } : data)
            .then(({ data }) => {
                dispatch({ type, status: FETCH_SUCCESS, data });
            })
            .catch(e => {
                dispatch({ type, status: FETCH_FAILURE });
            });
    }
}
