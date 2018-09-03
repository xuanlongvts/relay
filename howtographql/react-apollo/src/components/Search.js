import React, { Component } from 'react';
import { withApollo } from 'react-apollo';
import gql from 'graphql-tag';

import Link from './Link';

const FEED_SEARCH_QUERY = gql`
    query FeedSearchQuery($filter: String!) {
        feed(filter: $filter) {
            links {
                id
                url
                description
                createdAt
                postedBy {
                    id
                    name
                }
                votes {
                    id
                    user {
                        id
                    }
                }
            }
        }
    }
`;

class Search extends Component {
    constructor(props) {
        super(props);

        this.state = {
            links: [],
            filter: ''
        };
    }

    _executeSearch = async () => {
        const { client } = this.props;

        const { filter } = this.state;
        const result = await client.query({
            query: FEED_SEARCH_QUERY,
            variables: { filter }
        });
        const links = result.data.feed.links;

        this.setState({
            links
        });
    };

    render() {
        const { links } = this.state;

        return (
            <div>
                <div>
                    Search
                    <input className="searchInput" type="text" onChange={e => this.setState({ filter: e.target.value })} />
                    <button onClick={() => this._executeSearch()}>OK</button>
                </div>
                {links.map((link, index) => (
                    <Link key={link.id} link={link} index={index} />
                ))}
            </div>
        );
    }
}

export default withApollo(Search);
