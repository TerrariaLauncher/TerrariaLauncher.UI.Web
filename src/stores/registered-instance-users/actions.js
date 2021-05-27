import { actionCreator } from '../../commons/utils/index.js';

export const GET_REGISTERED_INSTANCE_USERS_REQUEST = 'GET_REGISTERED_INSTANCE_USERS_REQUEST';
export const GET_REGISTERED_INSTANCE_USERS_FAILURE = 'GET_REGISTERED_INSTANCE_USERS_FAILURE';
export const GET_REGISTERED_INSTANCE_USERS_SUCCESS = 'GET_REGISTERED_INSTANCE_USERS_SUCCESS';

export const getRegisteredInstanceUsersRequest = actionCreator(GET_REGISTERED_INSTANCE_USERS_REQUEST);
export const getRegisteredInstanceUsersFailure = actionCreator(GET_REGISTERED_INSTANCE_USERS_FAILURE);
export const getRegisteredInstanceUsersSuccess = actionCreator(GET_REGISTERED_INSTANCE_USERS_SUCCESS);

export const REGISTER_INSTANCE_USER_REQUEST = 'REGISTER_INSTANCE_USER_REQUEST';
export const REGISTER_INSTANCE_USER_FAILURE = 'REGISTER_INSTANCE_USER_FAILURE';
export const REGISTER_INSTANCE_USER_SUCCESS = 'REGISTER_INSTANCE_USER_SUCCESS';

export const registerInstanceUserRequest = actionCreator(REGISTER_INSTANCE_USER_REQUEST);
export const registerInstanceUserFailure = actionCreator(REGISTER_INSTANCE_USER_FAILURE);
export const registerInstanceUserSuccess = actionCreator(REGISTER_INSTANCE_USER_SUCCESS);

export const DEREGISTER_INSTANCE_USER_REQUEST = 'DEREGISTER_INSTANCE_USER_REQUEST';
export const DEREGISTER_INSTANCE_USER_FAILURE = 'DEREGISTER_INSTANCE_USER_FAILURE';
export const DEREGISTER_INSTANCE_USER_SUCCESS = 'DEREGISTER_INSTANCE_USER_SUCCESS';

export const deregisterInstanceUserRequest = actionCreator(DEREGISTER_INSTANCE_USER_REQUEST);
export const deregisterInstanceUserFailure = actionCreator(DEREGISTER_INSTANCE_USER_FAILURE);
export const deregisterInstanceUserSuccess = actionCreator(DEREGISTER_INSTANCE_USER_SUCCESS);
