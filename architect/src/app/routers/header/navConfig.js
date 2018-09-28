import * as RouterAll from '../consts';

const nav = {
    home: {
        name: 'Home',
        path: RouterAll.home,
    },
    about: {
        name: 'About',
        path: RouterAll.about,
    },
    categories: {
        name: 'Categories',
        path: RouterAll.categories,

        sub: {
            shoes: {
                name: 'Shoes',
                path: `${RouterAll.categories}${RouterAll.categories_shoes}`,
            },
            boots: {
                name: 'Boots',
                path: `${RouterAll.categories}${RouterAll.categories_boots}`,
            },
            footwear: {
                name: 'Footwear',
                path: `${RouterAll.categories}${RouterAll.categories_footwear}`,
            },
        },
    },
    products: {
        name: 'Products',
        path: RouterAll.products,
    },
    apireddit: {
        name: 'Reddit api',
        path: RouterAll.apireddit,
    },
};

export default nav;
