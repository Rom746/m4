import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import Form from './Form';
import Logo from './Logo';


const NavbarBottom: FC = () => {
    return (
        <nav className="header__search-menu search-menu">
            <Logo />
            <button className="search-menu__catalog-btn btn">Каталог</button>
            <Form />
            <div className="search-menu__links">
                <NavLink className="search-menu__link link-search" to={'/'}>
                    <div className="link-search__inner link-search__inner--wishlist">
                        <span className='link-search__amount'></span>
                    </div>
                    <span className='link-search__title'>Избранное</span>
                </NavLink>
                <NavLink className="search-menu__link link-search" to={'/cart'}>
                    <div className="link-search__inner link-search__inner--cart">
                        <span className='link-search__amount'>4</span>
                    </div>
                    <span className='link-search__title'>Корзина</span>
                    <div className="link-search__block"></div>
                </NavLink>
            </div>
        </nav>
    );
};

export default NavbarBottom;