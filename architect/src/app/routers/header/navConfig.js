import RouterAll from '../consts';

const routerCategories = RouterAll.categories;

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
                path: `${routerCategories}${RouterAll.categories_shoes}`,
            },
            boots: {
                name: 'Boots',
                path: `${routerCategories}${RouterAll.categories_boots}`,
            },
            footwear: {
                name: 'Footwear',
                path: `${routerCategories}${RouterAll.categories_footwear}`,
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
