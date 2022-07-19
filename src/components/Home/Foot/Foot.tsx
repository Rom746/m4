import { FC } from 'react';

const Foot: FC = () => {

    const productFiltered = new Array(22).fill(1);
    const amount = productFiltered.length;
    const currentAmountProduct = 9;

    const pagination = Array.from(Array(Math.floor(amount / currentAmountProduct)).keys());

    const change = () => { }

    return amount > 9 ? (
        <section className='home__foot foot'>
            <div className="foot__amount">
                <p className="foot__text">Выводить по</p>
                <div className='foot__input-wrapper'>
                    <input type="radio" name="m" className='foot__input' checked={true} onChange={change} />
                    <label className='foot__label'>9</label>
                </div>
                {amount > 15 &&
                    <div className='foot__input-wrapper'>
                        <input type="radio" name="m" className='foot__input' checked={false} onChange={change} />
                        <label className='foot__label'>15</label>
                    </div>
                }
                {amount > 21 &&
                    <div className='foot__input-wrapper'>
                        <input type="radio" name="m" className='foot__input' checked={false} onChange={change} />
                        <label className='foot__label'>21</label>
                    </div>
                }
            </div>
            <div className="foot__inner">
                <div className="foot__pagination pagination">
                    <ul className="pagination__list">
                        <button className="pagination__item"></button>
                        {pagination.map(v => 
                            <button className="pagination__item" key={v}>{v+1}</button>
                            ) }
                        <button className="pagination__item"></button>
                    </ul>
                </div>
                <button className="foot__button">Показать все товары</button>
            </div>
        </section>
    ) : <></>;
};

export default Foot;