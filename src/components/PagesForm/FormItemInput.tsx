import React, { FC } from 'react';

interface FormItemInputProps {
    reference: React.MutableRefObject<any>;
    tag: string
    error: string | boolean;
    inputHandler: (ind: string) => void;
    placeholder?: string;
}

const FormItemInput: FC<FormItemInputProps> = ({error, inputHandler, reference, tag , placeholder}) => {
    return (
        <div className="form__item">
            <span className={'form__icon form__icon--' + tag}></span>
            <input
                ref={reference} type="text" placeholder= {placeholder || tag}
                className={"form__input " + (error ? 'input--error' : '')}
                onClick={() => inputHandler(tag)}
            />
            <label className="form__label">{placeholder || tag}</label>
        </div>
    );
};

export default FormItemInput;