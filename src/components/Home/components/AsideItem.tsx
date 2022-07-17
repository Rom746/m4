import React, { FC, ReactNode, useState } from 'react';

interface AsideListProps {
    children: ReactNode;
    className: string;
}

interface Ititle {
    [index: string]: string
}

const title: Ititle = {
    'categories': 'Категории',
    'type': 'Тип продукта',
    'price': 'Цена, руб.',
    'brand': 'Бренд',
}

const AsideItem: FC<AsideListProps> = ({ children, className }) => {
    const [toggle, setToggle] = useState(false);

    const click = () => {
        setToggle(!toggle);
    }

    return (
        <div className={className}>
            <button
                className={className + "__btn aside__btn " + (toggle ? 'aside__btn--active' : '')}
                onClick={click}>
                <span className={className + '__title aside__title'}>{title[className]}</span>
            </button>
            {toggle && children}
        </div>
    );
};

export default AsideItem;