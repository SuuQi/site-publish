
import { FETCH_FIRE, FETCH_SUCCESS, FETCH_FAILURE } from 'Config';

export function createReducer (initState, handlers) {
    return function (state = initState, action) {
        if (handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action);
        }
        return state;
    }
}

export function fetchHandle (handleSuccess) {
    return function (state, action) {
        switch (action.status) {
        case FETCH_FIRE:
            return { ...state, isFetching: true };
            break;
        case FETCH_SUCCESS:
            return handleSuccess(state, action);
            break;
        case FETCH_FAILURE:
            return { ...state, isFetching: false };
            break;
        default:
            return { ...state };
            break;
        }
    }
}
