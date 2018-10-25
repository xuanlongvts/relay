import { graphql } from 'react-relay';

export default graphql`
    query getRepoQuery {
        viewer {
            repositories(first: 5) {
                edges {
                    cursor
                    repository: node {
                        name
                        issues(first: 5) {
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
                pageInfo {
                    startCursor
                    endCursor
                    hasPreviousPage
                    hasNextPage
                }
            }
        }
    }
`;
