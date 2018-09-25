import React, { PureComponent } from 'react';
import logo from '../../../images/logo.svg';

class Header extends PureComponent {
    render() {
        return (
            <header id="header">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className="App-title">Welcome to React, Relay, GraphQL</h1>
            </header>
        );
    }
}

export default Header;
