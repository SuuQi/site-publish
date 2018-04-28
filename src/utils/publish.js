
import axios from 'axios';

export function save (data = {}) {
    return axios.post('/utils/publish/', data);
}

export function list (data = {}) {
    return axios.get('/utils/publish/', {params: data});
}
