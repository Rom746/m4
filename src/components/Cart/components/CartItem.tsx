import CardCounter from 'components/Home/Product/CardCounter';
import { ICartProduct } from 'models/ICartProduct';
import React, { FC, useState } from 'react';
import { cartSlice } from 'store/reducers/CartSlice';
import { useAppDispatch } from 'utils/reduxUtils';

interface CartItemProps {
    product: ICartProduct;
}

const CartItem: FC<CartItemProps> = ({ product }) => {

    const [count, setCount] = useState<number>(product.amount);
    const { deleteProductCart, updateAmountProductCart } = cartSlice.actions;
    const dispatch = useAppDispatch();

    const setCountItem = (value: number): void => {

        if (value === 0) { return }

        const action = {
            id: product.id,
            amount: value - count
        }

        dispatch(updateAmountProductCart(action));
        setCount(value);
    }


    const clickHandler = (event: React.MouseEvent): void => {
        event.preventDefault();
        dispatch(deleteProductCart(product))
    }

    return (
        <li className={'cart__item item-cart'}>
            <div className="item-cart__left">
                <div className="item-cart__image">
                    <img src={product.image} alt={product.title} />
                </div>
                <div className="item-cart__inner">
                    <p className="item-cart__gost">{product.gost.title}</p>
                    <h2 className="item-cart__title">{product.title}</h2>
                    <p className="item-cart__price">{product.price} руб.</p>
                </div>
            </div>
            <div className="item-cart__right">
                <CardCounter count={count} setCount={setCountItem} />
                <p className="item-cart__sum-price">{product.price * product.amount} руб.</p>
                <button className="item-cart__delete" onClick={clickHandler}></button>
            </div>
        </li>
    );
};

export default CartItem;