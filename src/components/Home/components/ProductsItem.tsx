import { ICartProduct } from 'models/ICartProduct';
import { IProduct } from 'models/IProduct';
import React, { FC, useState } from 'react';
import { cartSlice } from 'store/reducers/CartSlice';
import { useAppDispatch } from 'utils/reduxUtils';
import CardCounter from './CardCounter';

interface ProductItemProps {
    product: IProduct;
}

const ProductItem: FC<ProductItemProps> = ({ product}) => {

    const [count, setCount] = useState<number>(1);
    const [selectedCard, setSelectedCard] = useState<number | null>(null);
    const {addProductCart} = cartSlice.actions;
    const dispatch = useAppDispatch();

    const active = selectedCard === product.id;

    const stocksList = () => {
        return product.stocks.map((stock, index) =>
            <li key={index}
                className={'stocks__item stocks__item--' + stock}
            ></li>
        );
    }

    const clickHandler = (event: React.MouseEvent): void => {
        event.preventDefault();
        const newProd: ICartProduct = {...product, amount: count};
        dispatch(addProductCart(newProd));
        setCount(1);
    }

    const overHandler = (event: React.MouseEvent): void => {
        event.preventDefault();
        if (!active) {
            setSelectedCard(product.id);
        }
    }

    return (
        <li className={'card__item'}>
            <div
                className={"card__inner " + (active ? '--active' : '')}
                onMouseOver={overHandler}
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
                        <button
                            onClick={clickHandler}
                            className='card__btn-cart btn'>В корзину</button>
                        <button className='card__btn-about btn'>Подробнее</button>
                    </div>
                )}
            </div>
        </li>
    );
};

export default ProductItem;