import React from 'react';

import AsyncHome from '../components/Home';
import AsyncAbout from '../components/About';
import AsyncCatagories from '../components/Categories';
import AsyncProducts from '../components/Products';
import AsyncMyComApi from '../components/myComApi';

const routersAuthen = [
    {
        title: 'Home',
        path: '/',
        Component: () => <AsyncHome />,
    },
    {
        title: 'About',
        path: '/about',
        Component: () => <AsyncAbout />,
    },
    {
        title: 'Categories',
        path: '/categories',
        Component: () => <AsyncCatagories />,
    },
    {
        title: 'Products',
        path: '/products',
        Component: () => <AsyncProducts />,
    },
    {
        title: 'Reddit api',
        path: '/mycomapi',
        Component: () => <AsyncMyComApi />,
    },
];

export default routersAuthen;
