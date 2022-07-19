import { ITypesProduct } from 'models/ITypesProduct';
import React, { FC } from 'react';

interface CheckBoxProps {
    type: ITypesProduct;
    getCheck: (id: number) => boolean;
    changeHandler: () => void;
    className: string;
}

const CheckBox: FC<CheckBoxProps> = ({type, getCheck, changeHandler, className}) => {
    return (
        <div className={className + "__inner checkbox"}>
            <input type="checkbox"
                name={type.title}
                id={type.id + ''}
                checked={getCheck(type.id)}
                onChange={changeHandler}
                className={className + "__input checkbox__input"}
            />
            <label htmlFor={type.title} className={className + '__label checkbox__label'}>
                {type.title}
            </label>
        </div>
    );
};

export default CheckBox;