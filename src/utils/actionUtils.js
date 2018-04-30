import axios from 'axios';
import { FETCH_FIRE, FETCH_SUCCESS, FETCH_FAILURE, PARAMS_METHOD } from 'Config';
import { notification } from 'antd';

export function fetchAjax ({ url, method = 'get', type, data = {}, callback }) {
    return function (dispatch) {
        dispatch({ type, status: FETCH_FIRE });
        return axios[method](url, PARAMS_METHOD.includes(method) ? { params: data } : data)
            .then(({ data }) => {
                dispatch({ type, status: FETCH_SUCCESS, data });
                return true;
            })
            .catch(e => {
                dispatch({ type, status: FETCH_FAILURE });
                console.log(e);
                notification.error({
                    message: `${e.response.statusText}：${e.response.status}`,
                    description: JSON.stringify(e).slice(0, 100)
                });
                return false;
            })
            .then(callback);
    }
}
