import React, { FC } from 'react';

const Product: FC = () => {


    const gosts = [
        'ГОСТ 14911-82', 'ОСТ 36-146-88', 'НТС 65-06', 'ОСТ 36-146-88', 'НТС 65-06'
    ];

    const gostList = () => {
        return gosts.map((value, index) => (
            <div key={Math.random()}>
                <label htmlFor={'gost' + index}>{value}</label>
                <input type="radio" name={'gost' + index} value='gost' key={Math.random()}/>
            </div>
        ))
    }

    return (
        <section className='home__products products'>
            <div className="products__inner">
                <div className="products__gosts gosts-filter">
                    <ul className="gosts-filter__list">
                        {gostList()}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Product;