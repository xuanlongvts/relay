import React, { PureComponent, Fragment } from 'react';
import { Helmet } from 'react-helmet';
import axios from 'axios';

import Header from './header';
import Footer from './footer';

// import NotFound from '../components/NotFound';
// import RoutersUnAuthen from './RoutersUnAuthen';
// import RoutersAuthen from './RoutersAuthen';

class Routers extends PureComponent {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        axios({
            url: 'https://api.github.com/graphql',
            method: 'post',
            headers: { Authorization: 'Bearer 80f632b81b88f769fa15da42284cb719ab6f4eff' },
            data: {
                query: `
                    query { 
                        viewer {
                            repositories(first: 50) {
                              edges {
                                repository:node {
                                  name
                        
                                  issues(first: 10) {
                                    totalCount
                                    edges {
                                      node {
                                        title
                                        bodyHTML
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                    }
                `,
            },
        }).then(result => {
            console.log(result.data);
        });
    }

    render() {
        return (
            <Fragment>
                <Helmet titleTemplate="%s - React.js Boilerplate" defaultTitle="Default React.js Boilerplate">
                    <meta name="description" content="A React.js Boilerplate application" />
                </Helmet>
                <Header />
                content
                <Footer />
            </Fragment>
        );
    }
}

export default Routers;
