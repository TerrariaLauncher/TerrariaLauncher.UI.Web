import createEventSource from '../commons/create-event-source.js';

/**
 * 
 * @param {object} payload
 * @param {number} payload.instanceId
 */
export async function createTrackPlayerSessionEventSource(payload) {
    const { instanceId } = payload;
    return await createEventSource({
        resource: `/api/instances/${instanceId}/players`,
        params: {
            level: 'real-time'
        }
    });
};

/**
 * 
 * @param {object} payload
 * @param {number} payload.instanceId
 * @param {string} payload.playerName
 */
export async function createTrackPlayerDataEventSource(payload) {
    const { instanceId, playerName } = payload;
    return await createEventSource({
        resource: `/api/instances/${instanceId}/players/${playerName}`,
        params: {
            level: 'real-time'
        }
    });
}
