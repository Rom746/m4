import { FC } from 'react';
import { NavLink } from 'react-router-dom';

const NavbarTop: FC = () => {
    return (
        <nav className="header-top__menu menu">
            <ul className="menu__list">
                <li><NavLink className="menu__link" to={'/hotels-m4/type'}>Типы продуктов</NavLink></li>
                <li><NavLink className="menu__link" to={'/hotels-m4/product'}>Продукты</NavLink></li>
                <li><NavLink className="menu__link" to={'/hotels-m4/'}>Выгоды для вас</NavLink></li>
                <li><NavLink className="menu__link" to={'/hotels-m4/'}>Гарантии</NavLink></li>
                <li><NavLink className="menu__link" to={'/hotels-m4/'}>Контакты</NavLink></li>
            </ul>
            <ul className="menu__list">
                <li><a className='menu__info-link link-info__tel' href="tel:+74993807890">+7 (499) 380-78-90</a></li>
                <li><a className='menu__info-link link-info__city' href="/hotels-m4/">Москва</a></li>
                <li><a className='menu__info-link link-info__mail' href="mailto:info@bastion.pro">info@bastion.pro</a></li>
            </ul>
        </nav>
    );
};

export default NavbarTop;