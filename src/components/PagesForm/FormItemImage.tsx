import React, { FC, useState } from 'react';

interface FormItemImageProps {
    reference: React.MutableRefObject<any>;
    tag: string
    inputHandler?: () => void;
    placeholder?: string;
}

const FormItemImage: FC<FormItemImageProps> = ({ inputHandler, reference, tag, placeholder }) => {

    const [image, setImage] = useState<any>();

    const imgHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        event.preventDefault();

        if (!event.target.files) {
            return
        }

        const file = event.target.files[0];

        if (!file.type.match(/image\/(jpeg|jpg|png)/)) {
            return
        }

        let reader = new FileReader();

        reader.readAsDataURL(file);

        reader.onload = function () {
            setImage(reader.result);
            reference.current = reader.result;
        };

        reader.onerror = function () {
            console.error(reader.error);
        };
    }

    return (
        <div className="form__item">
            <span className={'form__icon form__icon--' + tag}></span>
            <input type="file" className='form__file-img img-input' accept='image/png, image/jpeg' onChange={imgHandler} />
            <label className="form__label--top">{placeholder || tag}</label>
            <div className="img-input__inner">
                <div className="img-input__btn">Выберите файл</div>
                <div className="img-input__preview">
                    <img src={image} alt="" />
                </div>
            </div>
        </div>
    );
};

export default FormItemImage;