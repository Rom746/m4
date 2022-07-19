import { FC } from 'react';
import AsideItem from '../Aside/AsideItem';
import CheckBox from '../Aside/CheckBox';
import PriceFilter from './Filters/PriceFilter';
import TypeFilter from './Filters/TypeFilter';


const Filters: FC = () => {
    
    return (
        <div className='filters'>
            <p className="filters__title aside__title">Фильтры</p>
            <AsideItem className='price'>
                <PriceFilter />
            </AsideItem>
            <AsideItem className='type'>
                <TypeFilter />
            </AsideItem>
            <AsideItem className='brand'>
                <h2 className='item-brand'>Пусто</h2>
            </AsideItem>
            <div className='item-choice'>
                <CheckBox
                    changeHandler={() => { }}
                    className="item-choice"
                    getCheck={(id: number) => { return false }}
                    type={{ title: "Выбор покупателей", id: 1 }}
                />
            </div>
            <div className='item-best'>
                <CheckBox
                    changeHandler={() => { }}
                    className="item-best"
                    getCheck={(id: number) => { return true }}
                    type={{ title: "Лучшая цена", id: 1 }}
                />
            </div>
            <div className="filters__inner">
                <button className="filters__btn">Сбросить фильтры</button>
            </div>
        </div>
    );
};

export default Filters;