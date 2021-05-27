import { actionCreator } from '../../commons/utils/index.js';

export const RESTORE_AUTHENTICATION_REQUEST = 'RESTORE_AUTHENTICATION_REQUEST';
export const RESTORE_AUTHENTICATION_SUCCESS = 'RESTORE_AUTHENTICATION_SUCCESS';
export const RESTORE_AUTHENTICATION_FAILURE = 'RESTORE_AUTHENTICATION_FAILURE';

export const restoreAuthenticationRequest = actionCreator(RESTORE_AUTHENTICATION_REQUEST);
export const restoreAuthenticationSuccess = actionCreator(RESTORE_AUTHENTICATION_SUCCESS);
export const restoreAuthenticationFailure = actionCreator(RESTORE_AUTHENTICATION_FAILURE);
