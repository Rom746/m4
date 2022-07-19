import React, { FC } from 'react';

interface FormItemSelectProps {
    reference: React.MutableRefObject<any>;
    tag: string
    placeholder?: string;
    list: any[];
}

const FormItemSelect: FC<FormItemSelectProps> = ({ list, reference, tag, placeholder }) => {
    return (
        <div className="form__item">
            <span className={'form__icon form__icon--' + tag}></span>
            <select ref={reference} className="form__select">
                {list.map(value =>
                    <option
                        value={JSON.stringify(value)}
                        key={value.id}>{value.title}
                    </option>
                )}
            </select>
            <label className="form__label--top">{placeholder || tag}</label>
        </div>
    );
};

export default FormItemSelect;