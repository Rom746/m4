import { FC } from 'react';
import { filterGostStlice } from 'store/reducers/FilterGostSlice';
import { useAppDispatch, useAppSelector } from 'utils/reduxUtils';

const GostFilter: FC = () => {

    const { gosts } = useAppSelector(state => state.gostReducer);
    const { gostFilter } = useAppSelector(state => state.filterGostReducer)

    const {setStateGost, deleteStateGost} = filterGostStlice.actions;
    const dispatch = useAppDispatch();

    const clickHandler = (id: number): void => {

        if (!gostFilter.includes(id)) {
            dispatch(setStateGost(id))
        } else {
            dispatch(deleteStateGost(id))
        }
        

    }

    return (
        <div className="products__gosts gosts-filter ">
            <ul className="gosts-filter__list">
                {gosts.map((gost) =>
                    <li className='gosts-filter__item' key={gost.id}>
                        <button
                            className={'gosts-filter__btn ' + (gostFilter.includes(gost.id) ? 'gost-active' : '')}
                            onClick={() => clickHandler(gost.id)}
                        >{gost.title}</button>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default GostFilter;