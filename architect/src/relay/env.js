import { Environment, Network, RecordSource, Store } from 'relay-runtime';

import API from './api';

// function fetchQuery(operation, variables) {
//     return fetch('/graphql', {
//         method: 'POST',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//             query: operation.text,
//             variables,
//         }),
//     }).then(response => {
//         return response.json();
//     });
// }

const fetchQuery = () => {
    const graphApi = new API();
    const path = '/graphql';

    graphApi.setToken(process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN);

    return graphApi
        .fetch(path)
        .then(res => {
            return res.data.data.children.map(item => {
                return item.data;
            });
        })
        .catch(err => {
            put({
                type: 'ERROR',
                err,
            });
            // console.log('err: ', err)
        });
};

const environment = new Environment({
    network: Network.create(fetchQuery),
    store: new Store(new RecordSource()),
});

export default environment;
