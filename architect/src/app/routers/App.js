import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import Header from './header';
import Footer from './footer';

class Routers extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        const { children } = this.props;

        return (
            <Fragment>
                <Helmet titleTemplate="%s - React.js Boilerplate" defaultTitle="Default React.js Boilerplate">
                    <meta name="description" content="A React.js Boilerplate application" />
                </Helmet>
                <Header />

                {children ? children : null}

                <Footer />
            </Fragment>
        );
    }
}

Routers.propTypes = {
    children: PropTypes.object.isRequired,
};

export default Routers;
