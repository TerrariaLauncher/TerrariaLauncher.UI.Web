const dotenv = require('dotenv');
const convict = require('convict');
const webpack = require('webpack');

dotenv.config();
const configs = convict({
    env: {
        default: 'development',
        env: 'NODE_ENV'
    },
    useHttps: {
        default: false
    },
    apiHost: {
        default: 'localhost'
    },
    apiPort: {
        default: 3000
    }
});

const env = configs.get('env');
configs.loadFile(`./configs.${env}.json`);
configs.validate({ allowed: 'strict' });

const plugin = new webpack.DefinePlugin({
    'NODE_ENV': JSON.stringify(configs.get('env')),
    'USE_HTTPS': JSON.stringify(configs.get('useHttps')),
    'API_HOST': JSON.stringify(configs.get('apiHost')),
    'API_PORT': JSON.stringify(configs.get('apiPort'))
});

module.exports = plugin;
