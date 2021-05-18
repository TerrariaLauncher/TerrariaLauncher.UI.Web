import * as authentication from './authentication.js';
import * as instances from './instances/instances.js';

export default {
    authentication: authentication,
    instances: {
        ...instances
    }
};
