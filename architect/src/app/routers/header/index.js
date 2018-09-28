import React, { PureComponent } from 'react';
import logo from '../../../images/logo.svg';

import NavMain from './nav';

class Header extends PureComponent {
    render() {
        return (
            <header id="header">
                <div className="headerTop">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React, Relay, GraphQL</h1>
                </div>

                <NavMain />
            </header>
        );
    }
}

export default Header;
