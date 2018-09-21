import React, { Component } from 'react';
import { QueryRenderer, graphql } from 'react-relay';

import enviroment from './Enviroment';

import ListPage from './components/ListPage';

const AppAllPostQuery = graphql`
    query AppAllPostQuery {
        viewer {
            ...ListPage_viewer
        }
    }
`;

// const AppAllPostQuery = graphql`
//     query AppAllPostQuery($count: Int!, $after: String) {
//         viewer {
//             ...ListPage_viewer
//         }
//     }
// `;

class App extends Component {
    render() {
        return (
            <QueryRenderer
                environment={enviroment}
                query={AppAllPostQuery}
                render={({ error, props }) => {
                    if (error) {
                        return <div className="err">{error.message}</div>;
                    } else if (props) {
                        return <ListPage viewer={props.viewer} />;
                    }

                    return <div className="loading">Loading</div>;
                }}
            />
        );
    }
}

export default App;
