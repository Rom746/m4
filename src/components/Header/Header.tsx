import React, { FC } from 'react';
import Breadcrumbs from './components/Breadcrumbs';
import NavbarBottom from './components/NavbarBottom';
import NavbarTop from './components/NavbarTop';


const Header: FC = () => {
    return (
        <header className='header'>
            <div className="header__top">
                <div className='container'>
                    <NavbarTop />
                </div>
            </div>
            <div className="header__search">
                <div className='container'>
                    <NavbarBottom />
                </div>
            </div>
            <div className="header__botttom">
                <div className="container">
                    <Breadcrumbs />
                </div>
            </div>
        </header>
    );
};

export default Header;