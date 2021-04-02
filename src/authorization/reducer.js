import {
    LOGIN_SUCCESS
} from '../authentication/login/actions.js';

const defaultState = {
    permissions: {}
}

export default function (state = defaultState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS: {
            const permissions = {};
            for (const permission of action.payload.permissions) {
                permissions[permission] = true;
            }

            return {
                ...state,
                permissions: permissions
            };
        }
        default:
            return state;
    }
};
