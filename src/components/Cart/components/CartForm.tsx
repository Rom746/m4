import FormItemInput from 'components/PagesForm/FormItemInput';
import { FC, useRef, useState } from 'react';
import { cartSlice } from 'store/reducers/CartSlice';
import { useAppDispatch, useAppSelector } from 'utils/reduxUtils';
import { validTest } from 'utils/validate';

interface IErrors {
    fio: string | boolean;
    tel: string | boolean;
    mail: string | boolean;
    inn: string | boolean;
}

const CartForm: FC = () => {
    const fio = useRef<any>();
    const tel = useRef<any>();
    const mail = useRef<any>();
    const inn = useRef<any>();

    const { amount, sum, products } = useAppSelector(state => state.cartReducer);
    const { deleteCart } = cartSlice.actions;
    const dispatch = useAppDispatch();

    const [errors, setErrors] = useState<IErrors>(
        {
            fio: false, tel: false,
            mail: false, inn: false
        }
    );

    const clickHandler = (event: React.MouseEvent): void => {
        event.preventDefault();

        if (products.length === 0) {return}

        const errFio = validTest(fio.current as HTMLInputElement, 'string');
        const errTel = validTest(tel.current as HTMLInputElement, 'tel');
        const errMail = validTest(mail.current as HTMLInputElement, 'mail');
        const errInn = validTest(inn.current as HTMLInputElement, 'strnum');

        if (errFio || errTel || errMail || errInn) {
            setErrors({
                fio: errFio,
                tel: errTel,
                mail: errMail,
                inn: errInn
            });
            return;
        } else {
            print();
            [fio, tel, mail, inn].map(v => v.current.value = '');
            dispatch(deleteCart());
        }
    }

    function print() {
        console.group('Заказ');
                console.group('Общее');
                    console.log('Cумма: ' + sum);
                    console.log('Количество товаров: ' + amount);
                console.groupEnd();
                console.group('Информация о покупателе');
                    console.log('Фио: ' + fio.current.value);
                    console.log('Телефон: ' + tel.current.value);
                    console.log('Email: ' + mail.current.value);
                    console.log('Организация / ИНН: ' + inn.current.value);
                console.groupEnd();

                console.group('Товары');
                    products.forEach(pr => {
                        console.group(pr.title);
                            console.log('Сумма: ' + pr.amount * pr.price);
                            console.log('Количество: ' + pr.amount);
                        console.groupEnd();
                    });
                console.groupEnd();
            console.groupEnd();
    }


    const inputHandler = (ind: string) => {
        setErrors({ ...errors, [ind]: false });
    }

    return (
        <form className='form aside-cart__form'>
            <h5 className="form__title">Контактная информация</h5>
            <FormItemInput error={errors.fio} inputHandler={inputHandler}
                reference={fio} tag={'fio'} placeholder='ФИО'
            />
            <FormItemInput error={errors.tel} inputHandler={inputHandler}
                reference={tel} tag={'tel'} placeholder='Контактный телефон'
            />
            <FormItemInput error={errors.mail} inputHandler={inputHandler}
                reference={mail} tag={'mail'} placeholder='Email'
            />
            <FormItemInput error={errors.inn} inputHandler={inputHandler}
                reference={inn} tag={'inn'} placeholder='Организация / ИНН'
            />

            <div className="form__error">
                {Object.values(errors).map(v =>
                    <p key={Math.random()}>{v}</p>
                )}
            </div>

            <div className="aside-cart__sum-price">
                <h3 className="aside-cart__price-title">Итого</h3>

                <h3 className="aside-cart__price">{sum} руб.</h3>
            </div>
            <button className='form__btn btn aside-cart__btn' onClick={clickHandler}>Оформить заказ</button>
            <button className='aside-cart__offer '>
                <span>Коммерческое предложение</span>
            </button>
        </form>
    );
};

export default CartForm;