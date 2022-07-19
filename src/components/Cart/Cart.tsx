import React, { FC, useReducer, useState } from 'react';
import CartForm from './components/CartForm';
import CartList from './components/CartList';

const Cart: FC = () => {

    return (
        <main className='page'>
            <div className="page__wrapper">
            <div className="cart ">
                <div className="container ">
                    <h1>Корзина</h1>
                    <section className='cart__content'>
                        <div className="cart__catalog ">
                            <CartList />
                        </div>
                        <div className="cart__aside aside-cart">
                            <h3 className="aside-cart__title">Заказ</h3>
                            <CartForm />
                        </div>
                    </section>
                </div>

            </div>
            </div>
            
        </main>
    );
};

export default Cart;