import React from 'react';

import Login from '../components/_unAuthen/login';
import ResetPass from '../components/_unAuthen/resetPass';
import SignUp from '../components/_unAuthen/signUp';

const routersUnAuthen = [
    {
        title: 'Login',
        path: '/login',
        Component: () => <Login />,
    },
    {
        title: 'Sign up',
        path: '/signup',
        Component: () => <SignUp />,
    },
    {
        title: 'Reset pass',
        path: '/resetpass',
        Component: () => <ResetPass />,
    },
];

export default routersUnAuthen;
