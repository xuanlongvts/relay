import React, { PureComponent } from 'react';

import GetRepo from './getRepo';

class Github extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return <GetRepo />;
    }
}

export default Github;
