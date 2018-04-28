
import axios from 'axios';

export function save (data = {}) {
    return axios.post('/api/publish/', data);
}

export function list (data = {}) {
    return axios.get('/api/publish/', {params: data});
}
