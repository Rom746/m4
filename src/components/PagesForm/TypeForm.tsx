import React, { FC, useRef, useState } from 'react';
import { typeProductSlice } from 'store/reducers/TypeProductSlice';
import { useAppDispatch } from 'utils/reduxUtils';
import { validTest } from 'utils/validate';
import FormItemInput from './FormItemInput';

interface IErrors {
    id: string | boolean;
    title: string | boolean;
}

const TypeForm: FC = () => {

    const id = useRef<any>();
    const title = useRef<any>();
    const success = useRef<any>();
    const dispatch = useAppDispatch();
    const { addType } = typeProductSlice.actions;
    const [errors, setErrors] = useState<IErrors>({ id: false, title: false });

    const clickHandler = (event: React.MouseEvent): void => {
        event.preventDefault();

        const errTitle = validTest(title.current as HTMLInputElement, 'strnum');
        const errId = validTest(id.current as HTMLInputElement, 'number');

        if (errTitle || errId) {
            setErrors({ id: errId, title: errTitle });
            return;
        } else {
            dispatch(addType({ id: Number(id.current?.value), title: String(title.current?.value) }));
            id.current.value = '';
            title.current.value = '';
            success.current.textContent = 'Тип добавлен';
        }
    }

    const inputHandler = (ind: string) => {
        setErrors({...errors, [ind]: false});
        success.current.textContent = '';
    }

    return (
        <section className='page'>
            <div className="container page__wrapper">
                <h1 className="page__title">Типы продуктов</h1>
                <form className='form'>
                    <h5 className="form__title">Добавить тип</h5>
                    <FormItemInput error={errors.id} inputHandler={inputHandler}
                        reference={id} tag={'id'}
                    />
                    <FormItemInput error={errors.title} inputHandler={inputHandler}
                        reference={title} tag={'title'}
                    />
                    <div className="form__error">
                        <p>{errors.id}</p>
                        <p>{errors.title}</p>
                    </div>
                    <p className="form__success" ref={success}></p>
                    <button className='form__btn btn' onClick={clickHandler}>Добавить</button>
                </form>
            </div>
        </section>
    );
};

export default TypeForm;