import { actionCreator } from '../../../commons/utils/index.js';
export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const loginRequest = actionCreator(LOGIN_REQUEST);
export const loginSuccess = actionCreator(LOGIN_SUCCESS);
export const loginFailure = actionCreator(LOGIN_FAILURE);
