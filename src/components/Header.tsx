import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

const Header: FC = () => {
    return (
        <header className='header'>
            <div className='container'>
                <div className="header__top">
                    <nav className="header-top__menu menu">
                        <ul className="menu-list">
                            <li><NavLink className="menu-link" to={'type'}>Типы продуктов</NavLink></li>
                            <li><NavLink className="menu-link" to={'product'}>Продукты</NavLink></li>
                            <li><NavLink className="menu-link" to={'/'}>Выгоды для вас</NavLink></li>
                            <li><NavLink className="menu-link" to={'/'}>Гарантии</NavLink></li>
                            <li><NavLink className="menu-link" to={'/'}>Контакты</NavLink></li>
                        </ul>
                        <ul className="menu-list">
                            <li><a className='menu__info-link link-info__tel' href="tel:+74993807890">+7 (499) 380-78-90</a></li>
                            <li><a className='menu__info-link link-info__city' href="/">Москва</a></li>
                            <li><a href="mailto:info@bastion.pro">info@bastion.pro</a></li>
                        </ul>
                    </nav>
                </div>
                <div className="header__search">

                </div>
                <div className="header__botttom">

                </div>
            </div>
        </header>
    );
};

export default Header;