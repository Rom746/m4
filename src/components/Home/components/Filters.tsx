import React, { FC } from 'react';
import AsideItem from './AsideItem';
import PriceFilter from './PriceFilter';

const Filters: FC = () => {
    return (
        <div className='filters'>
            <p className="filters__title aside__title">Фильтры</p>
            <AsideItem className='price'>
                <PriceFilter />
            </AsideItem>
        </div>
    );
};

export default Filters;