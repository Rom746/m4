import React, { FC } from 'react';

const Footer: FC = () => {
    return (
        <footer className='footer'>
            <div className="container">
                <div className="footer__top">
                    <div className="footer__form"></div>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="container">
                    <div className="footer__bottom-inner">
                    <div className="footer__social">
                        <a href="/" className="footer__link link--w"></a>
                        <a href="/" className="footer__link link--t"></a>
                        <a href="/" className="footer__link link--v"></a>
                    </div>
                    </div>
                    
                </div>
            </div>
        </footer>
    );
};

export default Footer;