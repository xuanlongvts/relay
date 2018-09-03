import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import { AUTH_TOKEN } from '../constants';
import timeDifferenceForDate from '../utils';

const VOTE_MUTATION = gql`
    mutation VoteMutation($linkId: ID!) {
        vote(linkId: $linkId) {
            id
            link {
                votes {
                    id
                    user {
                        id
                    }
                }
            }
            user {
                id
            }
        }
    }
`;

class Link extends Component {
    render() {
        const authToken = localStorage.getItem(AUTH_TOKEN);

        const {
            updateStoreAfterVote,
            index,
            link,
            link: { description, url }
        } = this.props;

        return (
            <div className="flex mt2 items-start">
                <div className="flex items-center">
                    <span className="gray">{index + 1}.</span>
                    {authToken && (
                        <Mutation
                            mutation={VOTE_MUTATION}
                            variables={{ linkId: link.id }}
                            update={(store, { data: { vote } }) => {
                                updateStoreAfterVote(store, vote, link.id);
                            }}
                        >
                            {voteMutation => (
                                <div className="ml1 gray f11 votes-act" onClick={voteMutation}>
                                    ▲
                                </div>
                            )}
                        </Mutation>
                    )}
                </div>
                <div className="ml1">
                    <div>
                        {description} ({url})
                    </div>
                    <div className="f6 lh-copy gray">
                        {link.votes && link.votes.length} votes | by {link.postedBy ? link.postedBy.name : 'Unknown'}{' '}
                        {timeDifferenceForDate(link.createdAt)}
                    </div>
                </div>
            </div>
        );
    }
}

Link.propTypes = {
    updateStoreAfterVote: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    link: PropTypes.object.isRequired
};

export default Link;
