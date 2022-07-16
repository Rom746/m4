import { IGost } from 'models/IGost';
import React, { FC } from 'react';

interface GostFilterProps {
    gosts: IGost[];
    selectedGost: number | null;
    setSelectedGost: (value: number | null) => void;
}

const GostFilter: FC<GostFilterProps> = ({ gosts, selectedGost, setSelectedGost }) => {

    const clickHandler = (id: number): void => {
        setSelectedGost(selectedGost === id ? null : id);
    }

    return (
        <div className="products__gosts gosts-filter ">
            <ul className="gosts-filter__list">
                {gosts.map((gost) => 
                    <li className='gosts-filter__item' key={gost.id}>
                        <button
                            className={'gosts-filter__btn ' + (selectedGost === gost.id ? 'gost-active' : '')}
                            onClick={() => clickHandler(gost.id)}
                        >{gost.title}</button>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default GostFilter;