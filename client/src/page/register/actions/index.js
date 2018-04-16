import * as types from '../constants/index';

export const inputChange = (key, value) => (
    {
        type: types.INPUT_CHANGE,
        key, 
        value
    }
)

export const submitRegister = (payload) => (
    {
        type: types.SUBMIT_REGISTER,
        payload
    }
)

export const submitRegisterSuccess = (response) => (
    {
        type: types.SUBMIT_REGISTER_SUCCESS,
        response
    }
)