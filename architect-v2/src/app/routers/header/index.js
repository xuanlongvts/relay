import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import logo from '../../../images/logo.svg';

import NavMain from './nav';

class Header extends PureComponent {
    render() {
        const { router } = this.props;

        return (
            <header id="header">
                <div className="headerTop">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React, Relay, GraphQL</h1>
                </div>

                <NavMain router={router} />
            </header>
        );
    }
}

Header.propTypes = {
    router: PropTypes.object.isRequired,
};

export default Header;
