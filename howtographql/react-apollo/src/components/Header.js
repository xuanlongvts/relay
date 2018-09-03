import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router';
import { AUTH_TOKEN } from '../constants';

class Header extends Component {
    render() {
        const { history } = this.props;

        const authToken = localStorage.getItem(AUTH_TOKEN);

        return (
            <div className="flex pa1 justify-between nowrap orange font30">
                <div className="flex flex-fixed black">
                    <Link to="/" className="ml1 no-underline black">
                        news
                    </Link>
                    <div className="ml1">|</div>
                    <Link to="/search" className="ml1 no-underline black">
                        search
                    </Link>
                    {authToken && (
                        <div className="flex">
                            <div className="ml1">|</div>
                            <Link to="/create" className="ml1 no-underline black">
                                submit
                            </Link>
                        </div>
                    )}
                </div>
                <div className="flex flex-fixed">
                    {authToken ? (
                        <div
                            className="ml1 pointer black"
                            onClick={() => {
                                localStorage.removeItem(AUTH_TOKEN);
                                history.push('/');
                            }}
                        >
                            logout
                        </div>
                    ) : (
                        <Link to="/login" className="ml1 no-underline black">
                            login
                        </Link>
                    )}
                </div>
            </div>
        );
    }
}

Header.propTypes = {
    history: PropTypes.object.isRequired
};

export default withRouter(Header);
