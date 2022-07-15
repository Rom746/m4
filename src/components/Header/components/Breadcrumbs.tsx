import React, { FC } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Breadcrumbs: FC = () => {
    const { pathname } = useLocation();
    const crumbs = pathname.split("/").filter((el) => el);

    interface routesProps {
        [index: string]: string;
    }

    const routes: routesProps = {
        '/': 'Главная',
        'product': 'Продукты',
        'type': 'Типы продуктов',
        'cart': 'Корзина'
    }

    const crumbItem = (url: string, title: string) => {
        return (
            <li className='breadcrumbs__item'>
                <NavLink to={url} key={url} className='breadcrumbs__link'> 
                    {routes[title]}
                </NavLink>
            </li>
        )
    }

    const crumbsList = () => {
        return crumbs.map((crumb, index) => {
            const routeTo = `/${crumbs.slice(0, index + 1).join("/")}`;
            const isLast = index === crumbs.length - 1;
            return isLast ? (
                <span key={routeTo}>{routes[crumb]}</span>
            ) : crumbItem(routeTo, crumb);
        })
    }
    return (
        <nav className='breadcrumbs'>
            <ul className="breadcrumbs__list">
                {crumbItem('/', '/')}
                {crumbsList()}
            </ul>

        </nav>
    );
};

export default Breadcrumbs;