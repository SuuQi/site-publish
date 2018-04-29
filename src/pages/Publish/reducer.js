
import { createReducer, fetchHandle } from 'Utils';
import { GET_LIST, ADD_PROJECT } from './actionTypes';

export default createReducer({
    isFetching: false,
    list: []
}, {
    [GET_LIST]: fetchHandle((state, action) => {
        return { ...state, list: action.data, isFetching: false };
    }),

    [ADD_PROJECT]: fetchHandle((state, action) => {
        return { ...state, list: [...state.list, action.data], isFetching: false };
    })
});
