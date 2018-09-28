import React, { PureComponent } from 'react';
import { Link } from 'found';
import NavRouter from './navConfig';

class Nav extends PureComponent {
    menuDyn(data) {
        let menuNew = [];
        for (let key in data) {
            const { name, sub, path } = data[key];

            if (data[key].hasOwnProperty('sub')) {
                menuNew.push(this.renderItem(key, name, path, sub));
                this.menuDyn(data[key].sub);
            } else {
                menuNew.push(this.renderItem(key, name, path, false));
            }
        }
        return menuNew;
    }

    renderItem(key, name, path, isSub) {
        let link;
        let sub = [];
        link = (
            <li key={key} className={isSub ? 'hasSub' : null}>
                <Link to={path}>{name}</Link>
                {isSub && <ul className="sub">{this.menuDyn(isSub)}</ul>}
            </li>
        );

        sub.push(link);
        return sub;
    }

    render() {
        return (
            <nav id="navigaMain">
                <ul className="nav">{this.menuDyn(NavRouter)}</ul>
            </nav>
        );
    }
}

export default Nav;
