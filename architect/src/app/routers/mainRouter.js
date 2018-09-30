import React from 'react';

import asyncComponent from '../components/_asynComponent';
import RouterAll from './consts';

import App from './App';

import Login from '../components/_unAuthen/login';
import ResetPass from '../components/_unAuthen/resetPass';
import SignUp from '../components/_unAuthen/signUp';

import AsyncHome from '../components/Home';

import AsyncAbout from '../components/About';

import AsyncCatagories from '../components/categories/Categories';
import Boots from '../components/categories/boots';
import Shoes from '../components/categories/shoes';
import Footwear from '../components/categories/footwear';

import AsyncProducts from '../components/products';
import AsyncProductsDetail from '../components/products/Product';

import NotFound from '../components/NotFound';

const AsyncMyComApi = asyncComponent(() => import('../components/myComApi'));

const routeConfig = [
    {
        path: RouterAll.home,
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
                        Component: () => <Shoes />,
                    },
                    {
                        path: RouterAll.categories_boots,
                        Component: () => <Boots />,
                    },
                    {
                        path: RouterAll.categories_footwear,
                        Component: () => <Footwear />,
                    },
                ],
            },
            {
                path: RouterAll.products,
                Component: AsyncProducts,
                children: [
                    {
                        Component: () => <div>Please choose Product</div>,
                    },
                    {
                        path: RouterAll.productsDetail,
                        Component: props => <AsyncProductsDetail {...props} />,
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
