import * as loginActions from './login/actions.js';

const defaultState = {
    userId: -1,
    userName: '',
    userGroup: '',
};

export default function (state = defaultState, action) {
    switch (action.type) {
        case loginActions.LOGIN_RESTORE_REQUEST:
        case loginActions.LOGIN_RESTORE_SUCCESS:
        case loginActions.LOGIN_RESTORE_FAILURE:
        default:
            return state;
    }
};
