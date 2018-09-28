import React, { PureComponent } from 'react';
import { Link } from 'found';

import { products } from '../routers/consts';
// import Product from './Product';

class Products extends PureComponent {
    render() {
        const productsData = [
            {
                id: 1,
                name: 'NIKE Liteforce Blue Sneakers',
                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.',
                status: 'Available',
            },
            {
                id: 2,
                name: 'U.S. POLO ASSN. Slippers',
                description: 'Mauris finibus, massa eu tempor volutpat, magna dolor euismod dolor.',
                status: 'Available',
            },
            {
                id: 3,
                name: 'ADIDAS Adispree Running Shoes',
                description: 'Maecenas condimentum porttitor auctor. Maecenas viverra fringilla felis, eu pretium.',
                status: 'Available',
            },
            {
                id: 4,
                name: 'Lee Cooper Mid Sneakers',
                description: 'Ut hendrerit venenatis lacus, vel lacinia ipsum fermentum vel. Cras.',
                status: 'Out of Stock',
            },
        ];

        console.log('children: ', this.props);

        return (
            <div className="productsWrap">
                <div className="siderbar">
                    <h3>Categories products</h3>
                    <ul className="list-products">
                        {productsData.map((route, key) => {
                            return (
                                <li key={key}>
                                    <Link to={`${products}/${route.id}`}>{route.name}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Products;
