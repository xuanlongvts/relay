import React from 'react';

import asyncComponent from '../components/_asynComponent';
import * as RouterAll from './consts';

import App from './App';

import Login from '../components/_unAuthen/login';
import ResetPass from '../components/_unAuthen/resetPass';
import SignUp from '../components/_unAuthen/signUp';

import AsyncHome from '../components/Home';

import AsyncAbout from '../components/About';
import AsyncCatagories from '../components/Categories';
import AsyncProducts from '../components/Products';
// import AsyncMyComApi from '../components/myComApi';

import NotFound from '../components/NotFound';

const AsyncMyComApi = asyncComponent(() => import('../components/myComApi'));

const routeConfig = [
    {
        path: '/',
        Component: App,
        children: [
            {
                path: RouterAll.home,
                Component: () => <AsyncHome />,
            },
            {
                path: RouterAll.about,
                Component: () => <AsyncAbout />,
            },
            {
                path: RouterAll.categories,
                children: [
                    {
                        Component: () => <AsyncCatagories />,
                    },
                    {
                        path: RouterAll.categories_shoes,
                        Component: () => <div>Shoes</div>,
                    },
                    {
                        title: 'Boots',
                        path: RouterAll.categories_boots,
                        Component: () => <div>Boots</div>,
                    },
                    {
                        title: 'Footwear',
                        path: RouterAll.categories_footwear,
                        Component: () => <div>Footwear</div>,
                    },
                ],
            },
            {
                path: RouterAll.products,

                children: [
                    { Component: () => <AsyncProducts /> },
                    {
                        path: '/:productId',
                        Component: props => {
                            console.log('props: ', props);
                            return <div>111</div>;
                        },
                    },
                ],
            },
            {
                path: RouterAll.apireddit,
                Component: () => <AsyncMyComApi />,
            },
            {
                path: RouterAll.login,
                Component: () => <Login />,
            },
            {
                path: RouterAll.signup,
                Component: () => <SignUp />,
            },
            {
                path: RouterAll.resetpass,
                Component: () => <ResetPass />,
            },
            {
                path: '*',
                Component: () => <NotFound />,
            },
        ],
    },
];

// const routeConfig = makeRouteConfig(
//     <Route path="/" Component={App}>
//         <Route Component={AsyncHome} />

//         <Route path="/login" Component={Login} />
//         <Route path="/resetpass" Component={ResetPass} />
//         <Route path="/signup" Component={SignUp} />

//         <Route path="/about">
//             <Route Component={AsyncAbout} />
//             <Route path="/sub" Component={() => <div>Sub about</div>} />
//         </Route>
//         <Route path="/categories" Component={AsyncCatagories} />
//         <Route path="/products" Component={AsyncProducts} />
//         <Route path="/mycomapi" Component={AsyncMyComApi} />

//         <Route path="*" Component={NotFound} />
//     </Route>,
// );

export default routeConfig;
