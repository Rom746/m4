import { ChangeEvent, FC } from 'react';
import { filterTypeSlice } from 'store/reducers/FilterTypeSlice';
import { useAppSelector, useAppDispatch } from 'utils/reduxUtils';

const TypeFilter: FC = () => {

    const { types } = useAppSelector(state => state.typeReducer);
    const { typeFilter } = useAppSelector(state => state.filterTypeReducer);
    const { deleteStateType, setStateType } = filterTypeSlice.actions;
    const dispatch = useAppDispatch();

    const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {

        if (event.target.checked) {
            dispatch(setStateType(Number(event.target.id)))
        } else {
            dispatch(deleteStateType(Number(event.target.id)))
        }
    }

    const getCheck = (id: number): boolean => {
        return typeFilter.includes(id);
    }

    return (
        <div className='type__item item-type'>
            <ul className="item-type__list">
                {types.map(type =>
                    <li className="item-type__item" key={type.id}>
                        <div className="item-type__inner checkbox">
                            <input type="checkbox"
                                name={type.title}
                                id={type.id + ''}
                                checked={getCheck(type.id)}
                                onChange={changeHandler}
                                className="item-type__input checkbox__input"
                            />
                            <label htmlFor={type.title} className='item-type__label checkbox__label'>
                                {type.title}
                            </label>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default TypeFilter;