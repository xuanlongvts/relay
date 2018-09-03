import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Mutation } from 'react-apollo';
import gql from 'graphql-tag';

import { AUTH_TOKEN } from '../constants';

const SIGNUP_MUTATION = gql`
    mutation SignupMutation($email: String!, $password: String!, $name: String!) {
        signup(email: $email, password: $password, name: $name) {
            token
        }
    }
`;

const LOGIN_MUTATION = gql`
    mutation LoginMutation($email: String!, $password: String!) {
        login(email: $email, password: $password) {
            token
        }
    }
`;

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            login: true,
            email: '',
            password: '',
            name: ''
        };
    }

    handleConfirm = async data => {
        const { login } = this.state;
        const { history } = this.props;

        const { token } = login ? data.login : data.signup;
        this.hanldeSaveUserData(token);
        history.push('/');
    };

    hanldeSaveUserData = token => {
        localStorage.setItem(AUTH_TOKEN, token);
    };

    render() {
        const { login, email, password, name } = this.state;

        return (
            <div>
                <h4 className="mv3">{login ? 'Login' : 'Sign Up'}</h4>
                <div className="flex flex-column">
                    {!login && (
                        <input value={name} onChange={e => this.setState({ name: e.target.value })} type="text" placeholder="Your name" />
                    )}
                    <input
                        value={email}
                        onChange={e => this.setState({ email: e.target.value })}
                        type="text"
                        placeholder="Your email address"
                    />
                    <input
                        value={password}
                        onChange={e => this.setState({ password: e.target.value })}
                        type="password"
                        placeholder="Choose a safe password"
                    />
                </div>
                <div className="flex mt3">
                    <Mutation
                        mutation={login ? LOGIN_MUTATION : SIGNUP_MUTATION}
                        variables={{ email, password, name }}
                        onCompleted={data => this.handleConfirm(data)}
                    >
                        {mutation => (
                            <button className="pointer mr2 button" onClick={mutation}>
                                {login ? 'login' : 'create account'}
                            </button>
                        )}
                    </Mutation>
                    <button className="pointer button" onClick={() => this.setState({ login: !login })}>
                        {login ? 'need to create an account?' : 'already have an account?'}
                    </button>
                </div>
            </div>
        );
    }
}

Login.propTypes = {
    history: PropTypes.object.isRequired
};

export default Login;
