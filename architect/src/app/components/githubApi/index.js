import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'found';

import RouterAll from '../../routers/consts';

import listMenu from './listMenu';

const GithubNav = ({ children }) => {
    return (
        <section id="product-page" className="productsWrap">
            <div className="siderbar">
                <h3>Github menu</h3>
                <ul className="list-products">
                    {listMenu.map((route, key) => {
                        return (
                            <li key={key}>
                                <Link to={`${RouterAll.apigithub}/${route.id}`} activeClassName="active">
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

GithubNav.propTypes = {
    children: PropTypes.object.isRequired,
};

export default GithubNav;
