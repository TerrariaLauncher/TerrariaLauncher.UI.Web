import * as loginActions from './login/actions.js';

const defaultState = {
    id: -1,
    name: '',
    group: '',
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
