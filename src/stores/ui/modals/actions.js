export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

export const ModalTypes = Object.freeze({
    CHARACTER_REGISTRATION: 'CHARACTER_REGISTRATION',
    CHARACTER_DEREGISTRATION: 'CHARACTER_DEREGISTRATION',
    CHARACTER_PASSWORD_RESET: 'CHARACTER_PASSWORD_RESET'
});

/**
 * 
 * @param {object} payload
 * @param {string} payload.modalType
 * @param {object} payload.modalProps
 */
export function openModal(payload) {
    return {
        type: OPEN_MODAL,
        payload
    };
}

/**
 * 
 * @param {object} payload
 * @param {string} payload.modalType
 */
export function closeModal(payload) {
    return {
        type: CLOSE_MODAL,
        payload
    };
}
