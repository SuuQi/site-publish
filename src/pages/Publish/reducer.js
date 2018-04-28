
import { createReducer, fetchHandle } from 'Utils';
import { GET_LIST } from './actionTypes';

export default createReducer({
    isFetching: false,
    list: []
}, {
    [GET_LIST]: fetchHandle((state, action) => {
        return { ...state, ...action.payload, isFetching: false };
    })
});
