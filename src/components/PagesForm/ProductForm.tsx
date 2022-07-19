import { IGost } from 'models/IGost';
import React, { FC, useRef, useState } from 'react';
import { gostStlice } from 'store/reducers/GostSlice';
import { productSlice } from 'store/reducers/ProductSlice';
import { useAppDispatch, useAppSelector } from 'utils/reduxUtils';
import { validTest } from 'utils/validate';
import FormItemInput from './FormItemInput';
import FormItemSelect from './FormItemSelect';
import image from "assets/product/empty.png";
import { IProduct } from 'models/IProduct';
import FormItemImage from './FormItemImage';

interface IErrors {
    id: string | boolean;
    title: string | boolean;
    price: string | boolean;
    gost: string | boolean;
}

const ProductForm: FC = () => {
    const { types } = useAppSelector(state => state.typeReducer);
    const id = useRef<any>();
    const title = useRef<any>();
    const type = useRef<any>();
    const price = useRef<any>();
    const gost = useRef<any>();
    const img = useRef<any>(image);
    const success = useRef<any>();
    const dispatch = useAppDispatch();
    const { addGost } = gostStlice.actions;
    const { addProduct } = productSlice.actions;
    const { gosts } = useAppSelector(state => state.gostReducer);
    const [errors, setErrors] = useState<IErrors>({ id: false, title: false, gost: false, price: false });

    const clickHandler = (event: React.MouseEvent): void => {
        event.preventDefault();

        const errId = validTest(id.current as HTMLInputElement, 'number');
        const errTitle = validTest(title.current as HTMLInputElement, 'strnum');
        const errGost = validTest(gost.current as HTMLInputElement, 'strnumsp');
        const errPrice = validTest(price.current as HTMLInputElement, 'number');

        if (errTitle || errId || errGost || errPrice) {
            setErrors({
                id: errId,
                title: errTitle,
                gost: errGost,
                price: errPrice
            });
            return;
        } else {

            const product: IProduct = {
                id: Number(id.current.value),
                title: title.current.value,
                type: JSON.parse(type.current.value),
                price: Number(price.current.value),
                image: img.current || image,
                stocks: getStocks(title.current.value),
                gost: getGost()
            }

            dispatch(addProduct(product));

            [id, title, gost, price].map(v => v.current.value = '');
            success.current.textContent = 'Продукт добавлен';
        }
    }

    function getGost(): IGost {
        let g = gosts.filter(v => v.title === gost.current.value)[0]
        if (!g) {
            g = { id: gosts.length, title: gost.current.value }
            dispatch(addGost(g));
        }
        return g;
    }

    function getStocks(title: string): string[] {
        const stocks: string[] = [];

        [['a', 'а'], ['o', 'о'], ['d', 'д']].map(val => {
            if (title.indexOf(val[1]) !== -1) { stocks.push(val[0]) }
        })

        return stocks;
    }

    const inputHandler = (ind: string) => {
        setErrors({ ...errors, [ind]: false });
        success.current.textContent = '';
    }

    return (
        <section className='page'>
            <div className="container page__wrapper">
                <form className='form'>
                    <h5 className="form__title">Добавить продукт</h5>

                    <FormItemInput error={errors.id} inputHandler={inputHandler}
                        reference={id} tag={'id'}
                    />
                    <FormItemInput error={errors.title} inputHandler={inputHandler}
                        reference={title} tag={'title'} placeholder='Название'
                    />
                    <FormItemInput error={errors.gost} inputHandler={inputHandler}
                        reference={gost} tag={'gost'} placeholder='Гост'
                    />
                    <FormItemInput error={errors.price} inputHandler={inputHandler}
                        reference={price} tag={'price'} placeholder='Цена'
                    />
                    <FormItemSelect reference={type} list={types}
                        tag={'type'} placeholder='Тип'
                    />

                    <FormItemImage reference={img} tag={'img'} placeholder='Изображение'/>

                    <div className="form__error">
                        {Object.values(errors).map(v =>
                            <p key={Math.random()}>{v}</p>
                        )}
                    </div>

                    <p className="form__success" ref={success}></p>
                    <button className='form__btn btn' onClick={clickHandler}>Добавить</button>
                </form>
            </div>
        </section>
    );
};

export default ProductForm;