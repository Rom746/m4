import { FC } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { titleRoutes } from 'utils/titleRoutes';

const Head: FC = () => {

    const { pathname } = useLocation();
    const navigate = useNavigate();

    return (
        <section className='home__head head'>
            <div className="head__inner">
                <button
                    className='head__return-btn'
                    onClick={() => navigate(-1)}
                ></button>
                <h1>{titleRoutes[pathname]}</h1>
            </div>
            <div className="head__inner">
                <div className="head__popular popular">
                    <label className='popular__label'>
                        <span>Сначала популярные</span>
                        <input className='popular__input' type="checkbox" name="scales" />
                    </label>
                </div>
                <div>
                    <div className='head__view-mode view-mode'>
                        <input type="radio" name="inpProduct" id='inpBlock'
                            className='view-mode__input view-mode__input--block'
                        />
                        <input type="radio" name="inpProduct"
                            className='view-mode__input view-mode__input--line'
                        />
                        <span className='view-mode__current'></span>
                    </div>
                </div>
            </div>


        </section>
    );
};

export default Head;