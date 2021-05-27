import { combineReducers } from 'redux';
import { RESET_INSTANCE_USER_PASSWORD_FAILURE, RESET_INSTANCE_USER_PASSWORD_REQUEST, RESET_INSTANCE_USER_PASSWORD_SUCCESS } from '../../instance-users/actions.js';
import {
    DEREGISTER_INSTANCE_USER_SUCCESS,
    REGISTER_INSTANCE_USER_FAILURE,
    REGISTER_INSTANCE_USER_REQUEST,
    REGISTER_INSTANCE_USER_SUCCESS
} from '../../registered-instance-users/actions.js';
import { ModalTypes, CLOSE_MODAL, OPEN_MODAL } from '../modals/actions.js';

const defaultState = {
    registrationModal: {
        open: false,
        nameInputErrorCode: null,
        passwordInputErrorCode: null
    },
    deregistrationModal: {
        open: false
    },
    passwordResetModal: {
        open: false,
        passwordResetErrorCode: null
    }
};

const HTTPStatus = Object.freeze({
    BAD_REQUEST: 400,
    CONFLICT: 409
});

const registrationModalReducer = combineReducers({
    open: function (state = defaultState.registrationModal.open, action) {
        switch (action.type) {
            case OPEN_MODAL:
                if (action.payload.modalType === ModalTypes.CHARACTER_REGISTRATION) {
                    return true;
                }
                return state;
            case REGISTER_INSTANCE_USER_SUCCESS:
                return false;
            case CLOSE_MODAL:
                if (action.payload.modalType === ModalTypes.CHARACTER_REGISTRATION) {
                    return false;
                }
                return state;
            default:
                return state;
        }
    },
    nameInputErrorCode: function (state = defaultState.registrationModal.nameInputErrorCode, action) {
        switch (action.type) {
            case CLOSE_MODAL:
                if (action.payload.modalType === ModalTypes.CHARACTER_REGISTRATION) {
                    return defaultState.registrationModal.nameInputErrorCode;
                }
                return state;
            case REGISTER_INSTANCE_USER_REQUEST:
                return defaultState.registrationModal.nameInputErrorCode;
            case REGISTER_INSTANCE_USER_FAILURE:
                if (action.payload.status === HTTPStatus.CONFLICT) {
                    var code = action.payload?.body?.error?.details?.find(item => item.name.toLowerCase() === 'name')?.code;
                    if (code) return code;
                }
                return state;
            default:
                return state;
        }
    },
    passwordInputErrorCode: function (state = defaultState.registrationModal.passwordInputErrorCode, action) {
        switch (action.type) {
            case CLOSE_MODAL:
                if (action.payload.modalType === ModalTypes.CHARACTER_REGISTRATION) {
                    return defaultState.registrationModal.nameInputErrorCode;
                }
                return state;
            case REGISTER_INSTANCE_USER_REQUEST:
                return defaultState.registrationModal.passwordInputErrorCode;
            case REGISTER_INSTANCE_USER_FAILURE:
                if (action.payload.status === HTTPStatus.BAD_REQUEST) {
                    var code = action.payload?.body?.error?.details?.find(item => item.name.toLowerCase() === 'password')?.code;
                    if (code) return code;
                }
                return state;
            default:
                return state;
        }
    }
});

const deregistrationModalReducer = combineReducers({
    open: function (state = defaultState.deregistrationModal.open, action) {
        switch (action.type) {
            case OPEN_MODAL:
                if (action.payload.modalType === ModalTypes.CHARACTER_DEREGISTRATION) {
                    return true;
                }
                return state;
            case CLOSE_MODAL:
                if (action.payload.modalType === ModalTypes.CHARACTER_DEREGISTRATION) {
                    return false;
                }
                return state;
            case DEREGISTER_INSTANCE_USER_SUCCESS:
                return false;
            default:
                return state;
        }
    }
});

const passwordResetModalReducer = combineReducers({
    open: function (state = defaultState.passwordResetModal.open, action) {
        switch (action.type) {
            case OPEN_MODAL:
                if (action.payload.modalType === ModalTypes.CHARACTER_PASSWORD_RESET) {
                    return true;
                }
                return state;
            case CLOSE_MODAL:
                if (action.payload.modalType === ModalTypes.CHARACTER_PASSWORD_RESET) {
                    return false;
                }
                return state;
            case RESET_INSTANCE_USER_PASSWORD_SUCCESS:
                return false;
            default:
                return state;
        }
    },
    passwordResetErrorCode: function (state = defaultState.passwordResetModal.passwordResetErrorCode, action) {
        switch (action.type) {
            case CLOSE_MODAL:
                if (action.payload.modalType === ModalTypes.CHARACTER_PASSWORD_RESET) {
                    return defaultState.passwordResetModal.passwordResetErrorCode;
                }
                return state;
            case RESET_INSTANCE_USER_PASSWORD_REQUEST:
                return defaultState.registrationModal.passwordInputErrorCode;
            case RESET_INSTANCE_USER_PASSWORD_FAILURE:
                if (action.payload.status === HTTPStatus.BAD_REQUEST) {
                    var code = action.payload?.body?.error?.details?.find(item => item.name.toLowerCase() === 'password')?.code;
                    if (code) return code;
                }
                return state;
            default:
                return state;
        }
    }
})

export default combineReducers({
    registrationModal: registrationModalReducer,
    deregistrationModal: deregistrationModalReducer,
    passwordResetModal: passwordResetModalReducer
});
