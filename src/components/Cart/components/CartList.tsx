import React, { FC } from 'react';
import { cartSlice } from 'store/reducers/CartSlice';
import { useAppDispatch, useAppSelector } from 'utils/reduxUtils';
import CartItem from './CartItem';



const CartList: FC = () => {

    const { products } = useAppSelector(state => state.cartReducer);
    const { deleteCart } = cartSlice.actions;
    const dispatch = useAppDispatch();

    const warn = `Извините, но указанное  ранее количество товара 
        недоступно.Установлено ближайшее доступное значение.
    `;

    if (products.length === 0) {
        return <p className='cart__warn'>Ваша корзина пуста</p>
    }

    return (
        <div className='cart__inner'>
            {warn && <p className='cart__warn'>{warn}</p>}
            <ul className="cart__list">{
                products.map(product => <CartItem product={product} key={product.id}/>)
            }
            </ul>
            <div className="cart__clear ">
                <button
                    className='cart__clear-btn'
                    onClick={() => dispatch(deleteCart())}
                >Очистить корзину</button>
            </div>
        </div>
    )
};

export default CartList;