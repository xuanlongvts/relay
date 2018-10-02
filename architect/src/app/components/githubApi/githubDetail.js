import React, { PureComponent } from 'react';
import GetRepo from './graph/query';

class Github extends PureComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        GetRepo();
    }

    render() {
        return <div className="githubs">githubs</div>;
    }
}

export default Github;
