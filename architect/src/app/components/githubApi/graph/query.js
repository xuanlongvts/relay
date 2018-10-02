import axios from 'axios';

const getRepo = () => {
    return axios({
        url: 'https://api.github.com/graphql',
        method: 'post',
        headers: {
            Authorization: `bearer ${process.env.REACT_APP_GITHUB_PERSONAL_ACCESS_TOKEN}`,
        },
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
        console.log('data: ', result.data.data);
    });
};

export default getRepo;
