import React from 'react';
import { Link } from 'react-router-dom';
import { createFragmentContainer, graphql } from 'react-relay';

import Post from './Post';

class ListPage extends React.Component {
    render() {
        const { allPosts } = this.props.viewer;

        return (
            <div style={styles.listPageWrapper}>
                <Link style={styles.postButtonWrapper} to="/create-post">
                    + New Post
                </Link>
                <div style={{ marginTop: 20 }}>
                    {allPosts.edges.map(({ node }) => {
                        return <Post key={node.__id} post={node} />;
                    })}
                </div>
            </div>
        );
    }
}

const styles = {
    listPageWrapper: { marginTop: 20, textAlign: 'center' },
    postButtonWrapper: {
        padding: 10,
        background: 'white',
        border: '2px solid indianred',
        color: 'indianred',
        borderRadius: 6,
        marginTop: 10,
        marginBottom: 10
    }
};

export default createFragmentContainer(
    ListPage,
    graphql`
        fragment ListPage_viewer on Viewer {
            allPosts(last: 100) @connection(key: "ListPage_allPosts", filters: []) {
                edges {
                    node {
                        ...Post_post
                    }
                }
            }
        }
    `
);
