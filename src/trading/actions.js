import { actionCreator } from '../commons/utils/index.js';

export const SELECT_INSTANCE = 'SELECT_INSTANCE';
export const SELECT_REGISTERED_INSTANCE_USER = 'SELECT_REGISTERED_INSTANCE_USER';

/**
 * @param {object} payload
 * @param {number} payload.instanceId
 */
export const selectInstance = actionCreator(SELECT_INSTANCE);

/**
 * @param {object} payload
 * @param {number} payload.instanceUserId
 */
export const selectInstanceUser = actionCreator(SELECT_REGISTERED_INSTANCE_USER);

export const GET_REGISTERED_INSTANCE_USERS_REQUEST = 'GET_REGISTERED_INSTANCE_USERS_REQUEST';
export const GET_REGISTERED_INSTANCE_USERS_FAILURE = 'GET_REGISTERED_INSTANCE_USERS_FAILURE';
export const GET_REGISTERED_INSTANCE_USERS_SUCCESS = 'GET_REGISTERED_INSTANCE_USERS_SUCCESS';

export const getRegisteredInstanceUsersRequest = actionCreator(GET_REGISTERED_INSTANCE_USERS_REQUEST);
export const getRegisteredInstanceUsersFailure = actionCreator(GET_REGISTERED_INSTANCE_USERS_FAILURE);
export const getRegisteredInstanceUsersSuccess = actionCreator(GET_REGISTERED_INSTANCE_USERS_SUCCESS);
