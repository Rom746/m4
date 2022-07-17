import { FC } from 'react';
import { filterGostStlice } from 'store/reducers/FilterGostSlice';
import { useAppDispatch, useAppSelector } from 'utils/reduxUtils';

const GostFilter: FC = () => {

    const { gosts } = useAppSelector(state => state.gostReducer);
    const { gostFilter } = useAppSelector(state => state.filterGostReducer)

    const {setStateGost} = filterGostStlice.actions;
    const dispatch = useAppDispatch();

    const clickHandler = (id: number): void => {
        dispatch(setStateGost(gostFilter === id ? null : id))
    }
    console.log('GostFilter')

    return (
        <div className="products__gosts gosts-filter ">
            <ul className="gosts-filter__list">
                {gosts.map((gost) =>
                    <li className='gosts-filter__item' key={gost.id}>
                        <button
                            className={'gosts-filter__btn ' + (gostFilter === gost.id ? 'gost-active' : '')}
                            onClick={() => clickHandler(gost.id)}
                        >{gost.title}</button>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default GostFilter;