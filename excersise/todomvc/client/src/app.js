import React from 'react';
import ReactDOM from 'react-dom';
import {QueryRenderer, graphql} from 'react-relay';
import {Environment, Network, RecordSource, Store} from 'relay-runtime';
import 'todomvc-common';
import TodoApp from './components/TodoApp';

const fetchQuery = (operation, variables) => {
    return fetch('/graphql', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: operation.text,
            variables,
        }),
    }).then(response => {
        return response.json();
    });
};

const modernEnv = new Environment({
    network: Network.create(fetchQuery),
    store: new Store(new RecordSource()),
});

ReactDOM.render(
    <QueryRenderer
        environment={modernEnv}
        query={graphql`
            query appQuery {
                viewer {
                    ...TodoApp_viewer
                }
            }
        `}
        variables={{}}
        render={({error, props}) => {
            if (props) {
                return <TodoApp viewer={props.viewer} />;
            } else {
                return <div>Loading</div>;
            }
        }}
    />,
    document.getElementById('root'),
);
