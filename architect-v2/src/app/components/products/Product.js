import React from 'react';
import PropTypes from 'prop-types';

import productsData from './dataListProducts';

const Product = props => {
    const { params } = props;
    const getId = params.productId;

    const product = productsData.find(p => p.id === Number(getId));

    let productData;
    if (product)
        productData = (
            <div className="productDetail">
                <h1> {product.name} </h1>
                <p>{product.description}</p>
                <hr />
                <h4>{product.status}</h4>
            </div>
        );
    else productData = <h2> Sorry. Product does not exist </h2>;

    return <div className="products">{productData}</div>;
};

Product.propTypes = {
    params: PropTypes.object.isRequired,
};

export default Product;
