import React, { PureComponent } from 'react';
import { QueryRenderer } from 'react-relay';

import Env from '../../../relay/env';
import getRepo from './graph/getRepo';

class Github extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <QueryRenderer
                environment={Env}
                query={getRepo}
                render={({ error, props }) => {
                    if (error) {
                        return <div className="boxErr">Error!</div>;
                    }
                    if (!props) {
                        return (
                            <div className="boxLoading">
                                <p className="loading" />
                            </div>
                        );
                    }
                    const listRepos = props.viewer.repositories.edges;
                    return (
                        <div className="listRepos">
                            {listRepos.map((item, key) => {
                                return (
                                    <div className="each-row" key={key}>
                                        <span>Name: </span>
                                        {item.repository.name}
                                    </div>
                                );
                            })}
                        </div>
                    );
                }}
            />
        );
    }
}

export default Github;
