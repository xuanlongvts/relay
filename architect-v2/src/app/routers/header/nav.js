import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'reactstrap';

import { Link } from 'found';

import RouterAll from '../consts';
import NavRouter from './navConfig';

class Nav extends PureComponent {
    menuDyn(data) {
        const { router } = this.props;
        const getRoutes = router.routes.length && router.routes.filter(item => item.path).map(item => item.path);

        let isHome = false;
        if (getRoutes.length === 1 && getRoutes[0] === RouterAll.home) {
            isHome = true;
        } else {
            isHome = false;
        }

        let menuNew = [];
        for (let key in data) {
            const { name, sub, path } = data[key];

            if (data[key].hasOwnProperty('sub')) {
                menuNew.push(this.renderItem(key, name, path, isHome, sub));
                this.menuDyn(data[key].sub);
            } else {
                menuNew.push(this.renderItem(key, name, path, isHome, false));
            }
        }
        return menuNew;
    }

    renderItem(key, name, path, isHome, isSub) {
        let link;
        let sub = [];

        let activeClassName = 'curr';
        !isHome && path === RouterAll.home && (activeClassName = '');

        link = (
            <li key={key} className={isSub ? 'hasSub' : null}>
                <Link to={path} activeClassName={activeClassName}>
                    {name}
                </Link>
                {isSub && <ul className="sub">{this.menuDyn(isSub)}</ul>}
            </li>
        );

        sub.push(link);
        return sub;
    }

    render() {
        return (
            <nav id="navigaMain">
                <Container>
                    <ul className="nav">{this.menuDyn(NavRouter)}</ul>
                </Container>
            </nav>
        );
    }
}

Nav.propTypes = {
    router: PropTypes.object.isRequired,
};

export default Nav;
