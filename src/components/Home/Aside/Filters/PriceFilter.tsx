import React, { ChangeEvent, FC, useRef } from 'react';
import RangeSlider from './RangeSlider';
import { useAppDispatch, useAppSelector } from 'utils/reduxUtils';
import { filterPriceSlice } from 'store/reducers/FilterPriceSlice';

const PriceFilter: FC = () => {
    const { priceFilter } = useAppSelector(state => state.filterPriceReducer);
    const { setStatePrice } = filterPriceSlice.actions;
    const dispatch = useAppDispatch();

    const changeHandler = (event: ChangeEvent<HTMLInputElement>):void => {
        event.preventDefault();

        if(Number.isNaN(Number(event.target.value))) {
            return
        } else if (event.target.id === 'val0') {
            dispatch(setStatePrice([Number(event.target.value), priceFilter[1]]))
        } else {
            dispatch(setStatePrice([priceFilter[0], Number(event.target.value)]))
        }
    }

    const set = (value: number[]) => {
        dispatch(setStatePrice(value));
    }

    return (
        <div className='price__item item-price'>
            <div className="item-price__inputs">
                <div className="item-price__inner">
                    <span className="item-price__title">от</span>
                    <input type="text" className="item-price__input" value={priceFilter[0]} id="val0" onChange={changeHandler}/>
                </div>
                <div className="item-price__inner">
                    <span className="item-price__title">до</span>
                    <input type="text" className="item-price__input" value={priceFilter[1]} id="val1" onChange={changeHandler}/>
                </div>
            </div>
            <RangeSlider setValuesGlobal={set} valuesGlobal={priceFilter} />
            <ul className="item-price__dots-list">
                {Array.from(Array(6)).map(index =><li key={Math.random()} className="item-price__dots-item"></li>)}
            </ul>
        </div>
    );
};

export default PriceFilter;