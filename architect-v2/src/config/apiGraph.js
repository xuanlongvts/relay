import env from './index';

const listConfigs = {
    dev: {
        API_SERVER: 'https://api.github.com/',
        SOCKET: {
            secure: true,
            hostname: 'https://api.github.com/',
            port: 443,
            namespace: 'dev',
        },
    },
    uat: {
        API_SERVER: 'https://api.github.com/',
        SOCKET: {
            secure: true,
            hostname: 'https://api.github.com/',
            port: 443,
            namespace: 'uat',
        },
    },
    production: {
        API_SERVER: 'https://api.github.com/',
        SOCKET: {
            secure: true,
            hostname: 'https://api.github.com/',
            port: 443,
            namespace: 'production',
        },
    },
};

const Config = listConfigs[env];

export default Config;
