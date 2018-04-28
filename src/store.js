
import { createStore } from 'redux';

let todoReducer = (state, action) => {

    // return Object.assign({}, state, { isA: true });
    return { action, ...state  };
    // return state;
};

export default createStore(todoReducer);
