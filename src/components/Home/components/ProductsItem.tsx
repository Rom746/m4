import { IProduct } from 'models/IProduct';
import React, { FC, useState } from 'react';
import CardCounter from './CardCounter';

interface ProductItemProps {
    product: IProduct;
    selectedCard: number | null;
    setSelectedCard: (value: number | null) => void;
}

const ProductItem: FC<ProductItemProps> = ({ product, selectedCard, setSelectedCard }) => {

    const [count, setCount] = useState<number>(0);
    const active = selectedCard === product.id;
    const stocksList = () => {
        return product.stocks.map((stock, index) =>
            <li key={index} 
            className={'stocks__item stocks__item--' + stock}
            ></li>
        );
    }

    return (
        <li className={'card__item'}>
            <div
                className={"card__inner " + (active ? '--active' : '')}
                onMouseOver={() => setSelectedCard(product.id)}
                onMouseLeave={() => setSelectedCard(null)}
            >
                <ul className={"card__stocks stocks" + (active ? ' --active' : '')}>{stocksList()}</ul>
                <div className="card__image">
                    <img src={product.image} alt={product.title} />
                </div>
                <p className="card__gost">{product.gost.title}</p>
                <h2 className="card__title">{product.title}</h2>
                <div className="card__cart">
                    <p className="card__price">{product.price}р</p>
                    {active && (<CardCounter count={count} setCount={setCount} />)}
                </div>
                {active && (<button className={"card__wishlist"}>В избранное</button>)}
                {active && (
                    <div className={'card__btns'}>
                        <button className='card__btn-cart btn'>В корзину</button>
                        <button className='card__btn-about btn'>Подробнее</button>
                    </div>
                )}


            </div>
        </li>
    );
};

export default ProductItem;