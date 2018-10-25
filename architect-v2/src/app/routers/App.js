import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import Header from './header';
import Footer from './footer';

class Routers extends PureComponent {
    render() {
        const { children } = this.props;

        return (
            <Fragment>
                <Helmet titleTemplate="%s - React.js Boilerplate" defaultTitle="Default React.js Boilerplate">
                    <meta name="description" content="A React.js Boilerplate application" />
                </Helmet>
                <Header router={children.props} />

                <section id="main-content">{children ? children : null}</section>

                <Footer />
            </Fragment>
        );
    }
}

Routers.propTypes = {
    children: PropTypes.object,
};

export default Routers;
