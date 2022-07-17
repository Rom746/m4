import { FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { titleRoutes } from 'utils/titleRoutes';

const Breadcrumbs: FC = () => {
    const { pathname } = useLocation();
    const crumbs = pathname.split("/").filter((el) => el);

    const crumbItem = (url: string) => {
        return (
            <li className='breadcrumbs__item'>
                <NavLink to={url} key={url} className='breadcrumbs__link'>
                    {titleRoutes[url]}
                </NavLink>
            </li>
        );
    }

    const crumbsList = () => {
        return crumbs.map((crumb, index) => {
            const routeTo = `/${crumbs.slice(0, index + 1).join("/")}`;
            const isLast = index === crumbs.length - 1;
            return isLast ?
                <span key={routeTo}>{titleRoutes[routeTo]}</span>
                : crumbItem(routeTo);
        });
    }
    return (
        <nav className='breadcrumbs'>
            <ul className="breadcrumbs__list">
                {crumbItem('/')}
                {crumbsList()}
            </ul>
        </nav>
    );
};

export default Breadcrumbs;