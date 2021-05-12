import createEventSource from '../commons/create-event-source.js';

/**
 * 
 * @param {object} payload
 * @param {number} payload.serverId
 */
export async function createTrackPlayerSessionEventSource(payload) {
    const { serverId } = payload;
    return await createEventSource({
        resource: `/api/servers/${serverId}/players`,
        params: {
            level: 'real-time'
        }
    });
};

/**
 * 
 * @param {object} payload
 * @param {number} payload.serverId
 * @param {string} payload.playerName
 */
export async function createTrackPlayerDataEventSource(payload) {
    const {serverId, playerName} = payload;
    return await createEventSource({
        resource: `/api/servers/${serverId}/players/${playerName}`,
        params: {
            level: 'real-time'
        }
    });
}
