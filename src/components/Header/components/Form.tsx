import React, { FC } from 'react';

const Form: FC = () => {
    return (
        <form className='search-menu__form form-search'>
            <span className='form-search__icon'></span>
            <input className="form-search__input" type="text" placeholder='Поиск по названию...'/>
            <button className='form-search__btn'></button>
        </form>
    );
};

export default Form;