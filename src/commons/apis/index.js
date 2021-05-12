import * as authentication from './authentication.js';
import * as servers from './servers/servers.js';

export default {
    authentication: authentication,
    terrariaServers: {
        ...servers
    }
};
