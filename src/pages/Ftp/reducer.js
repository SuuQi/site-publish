
import { createReducer, fetchHandle } from 'Utils';
import { GET_LIST, ADD_FTP, TEST_FTP } from './actionTypes';

export default createReducer({
    isFetching: false,
    list: []
}, {
    [GET_LIST]: fetchHandle((state, action) => {
        return { ...state, list: action.data, isFetching: false };
    }),

    [ADD_FTP]: fetchHandle((state, action) => {
        return { ...state, list: [...state.list, action.data], isFetching: false };
    }),

    [TEST_FTP]: fetchHandle((state, action) => {
        console.log(action);
        return { ...state, isFetching: false };
    }),
});
