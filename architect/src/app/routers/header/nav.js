import React, { PureComponent } from 'react';
import { Link } from 'found';
import NavRouter from './navConfig';

class Nav extends PureComponent {
    constructor(props) {
        super(props);
    }

    // componentDidMount() {
    //     const { router } = this.props;
    //     console.log('router: ', router);
    // }

    menuDyn(data) {
        const { router } = this.props;
        console.log('router: ', router);

        let menuNew = [];
        for (let key in data) {
            const { name, sub, path } = data[key];
            const classActive = router.location.pathname === path ? 'curr' : null;

            if (data[key].hasOwnProperty('sub')) {
                menuNew.push(this.renderItem(key, name, path, classActive, sub));
                this.menuDyn(data[key].sub);
            } else {
                menuNew.push(this.renderItem(key, name, path, classActive, false));
            }
        }
        return menuNew;
    }

    renderItem(key, name, path, classActive, isSub) {
        let link;
        let sub = [];

        link = (
            <li key={key} className={isSub ? 'hasSub' : null}>
                <Link to={path} className={classActive}>
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
                <ul className="nav">{this.menuDyn(NavRouter)}</ul>
            </nav>
        );
    }
}

export default Nav;
