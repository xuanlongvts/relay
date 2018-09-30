import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'found';

import RouterAll from '../../routers/consts';

import productsData from './dataListProducts';

const ProductsNav = ({ children }) => {
    return (
        <section id="product-page" className="productsWrap">
            <div className="siderbar">
                <h3>Categories products</h3>
                <ul className="list-products">
                    {productsData.map((route, key) => {
                        return (
                            <li key={key}>
                                <Link to={`${RouterAll.products}/${route.id}`} activeClassName="active">
                                    {route.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>

            {children}
        </section>
    );
};

ProductsNav.propTypes = {
    children: PropTypes.object.isRequired,
};

export default ProductsNav;
