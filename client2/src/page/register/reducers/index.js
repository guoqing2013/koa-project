import { combineReducers } from 'redux';
import { INPUT_CHANGE, SUBMIT_REGISTER, SUBMIT_REGISTER_SUCCESS } from '../constants/index';


const register = (state = {
    mobile: '18020285885',
    password: '123',
    isFetching: false
}, action) => {
    switch (action.type) {
        case INPUT_CHANGE: 
            return { ...state, [action.key]: action.value };
        case SUBMIT_REGISTER: 
            return {...state, isFetching: true}
        case SUBMIT_REGISTER_SUCCESS: 
            return {
                ...state,
                isFetching: false,
                response: action.response,
            }
        default: 
            return state;
    }
}


const rootReducer = combineReducers({
    register
});

export default rootReducer;

