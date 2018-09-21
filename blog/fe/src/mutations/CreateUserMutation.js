import { commitMutation, graphql } from 'react-relay';
import environment from '../Enviroment';

const mutation = graphql`
    mutation CreateUserMutation($createUserInput: CreateUserInput!) {
        createUser(input: $createUserInput) {
            user {
                id
            }
        }
    }
`;

export default (username, password, fullname, callback) => {
    var variables = {
        createUserInput: {
            username,
            password,
            fullname,
            clientMutationId: ''
        }
    };

    commitMutation(environment, {
        mutation,
        variables,
        onCompleted: res => {
            callback(res.createUser.user);
        },
        onError: err => console.log('err: ', err)
    });
};
