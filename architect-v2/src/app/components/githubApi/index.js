import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'found';
import { Container, Row, Col } from 'reactstrap';

import RouterAll from '../../routers/consts';

import listMenu from './listMenu';

const GithubNav = ({ children }) => {
    return (
        <section id="product-page" className="productsWrap">
            <Container>
                <Row>
                    <Col xs="12" lg="5">
                        <div className="siderbar">
                            <h3>Github menu</h3>
                            <ul className="list-products">
                                {listMenu.map((route, key) => {
                                    return (
                                        <li key={key}>
                                            <Link to={`${RouterAll.apigithub}/${route.filter}`} activeClassName="active">
                                                {route.name}
                                            </Link>
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                    </Col>

                    <Col xs="12" lg="7">
                        {children}
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

GithubNav.propTypes = {
    children: PropTypes.object,
};

export default GithubNav;
