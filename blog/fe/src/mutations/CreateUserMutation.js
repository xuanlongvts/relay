import { commitMutation, graphql } from 'react-relay';
import environment from '../Enviroment';

const mutation = graphql`
    mutation CreateUserMutation($createUserInput: CreateUserInput!, $loginUserInput: LoginUserInput!) {
        createUser(input: $createUserInput) {
            message
        }
        loginUser(input: $loginUserInput) {
            user {
                id
                username
                password
                fullname
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
        },
        loginUserInput: {
            username,
            password,
            clientMutationId: ''
        }
    };

    commitMutation(environment, {
        mutation,
        variables,
        onCompleted: res => {
            callback(res.loginUser.user);
        },
        onError: err => console.log('err: ', err)
    });
};
