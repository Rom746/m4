import React, { FC } from 'react';
import logo from 'assets/header-logo.png'
import { NavLink } from 'react-router-dom';

const Logo: FC = () => {
    return (
        <NavLink className="search-menu__logo" to={'/hotels-m4/'}>
            <img src={logo} alt="logo" />
            <h4 className="search-menu__title">Производитель металлических изделий №1</h4>
        </NavLink>
    );
};

export default Logo;