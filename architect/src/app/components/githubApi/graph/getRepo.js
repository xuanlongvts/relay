import { graphql } from 'react-relay';

export default graphql`
    query getRepoQuery {
        viewer {
            repositories(first: 50) {
                edges {
                    repository: node {
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
`;
