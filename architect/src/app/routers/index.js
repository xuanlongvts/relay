import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

// import axios from 'axios';

import Header from './header';
import Footer from './footer';

// import NotFound from '../components/NotFound';

class Routers extends PureComponent {
    constructor(props) {
        super(props);
    }

    // componentDidMount() {
    //     axios({
    //         url: 'https://api.github.com/graphql',
    //         method: 'post',
    //         headers: {
    //             Authorization: `bearer ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`,
    //         },
    //         data: {
    //             query: `
    //                 query {
    //                     viewer {
    //                         repositories(first: 50) {
    //                             edges {
    //                                 repository:node {
    //                                     name

    //                                     issues(first: 10) {
    //                                         totalCount
    //                                         edges {
    //                                             node {
    //                                                 title
    //                                                 bodyHTML
    //                                             }
    //                                         }
    //                                     }
    //                                 }
    //                             }
    //                         }
    //                     }
    //                 }
    //             `,
    //         },
    //     }).then(result => {
    //         console.log('data: ', result.data.data);
    //     });
    // }

    render() {
        const { children } = this.props;
        console.log('children: ', children);
        return (
            <Fragment>
                <Helmet titleTemplate="%s - React.js Boilerplate" defaultTitle="Default React.js Boilerplate">
                    <meta name="description" content="A React.js Boilerplate application" />
                </Helmet>
                <Header />

                {children}

                <Footer />
            </Fragment>
        );
    }
}

Routers.propTypes = {
    children: PropTypes.object.isRequired,
};

export default Routers;
