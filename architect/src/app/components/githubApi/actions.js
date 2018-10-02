import * as listTypes from './consts';

export const getRepositories = () => {
    return {
        type: listTypes.GET_REPO,
    };
};

export const getIssuse = () => {
    return {
        type: listTypes.GET_ISSUSE,
    };
};
