import env from './index';

const listConfigs = {
    dev: {
        API_SERVER: 'http://www.reddit.com',
        SOCKET: {
            secure: true,
            hostname: 'http://www.reddit.com',
            port: 443,
            namespace: 'dev',
        },
    },
    uat: {
        API_SERVER: 'https://uat-abc.com',
        SOCKET: {
            secure: true,
            hostname: 'https://uat-abc',
            port: 443,
            namespace: 'uat',
        },
    },
    production: {
        API_SERVER: 'http://www.reddit.com',
        SOCKET: {
            secure: true,
            hostname: 'http://www.reddit.com',
            port: 443,
            namespace: 'production',
        },
    },
};

const Config = listConfigs[env];

export default Config;
