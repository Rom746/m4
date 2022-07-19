import { FC } from 'react';
import { categories } from 'assets/Items';
import AsideItem from './AsideItem';

const Categories: FC = () => {
    const list = () => {
        return categories.map(c =>
            <li key={c.id} className="categories__item item-category" >
                <p className="item-category__tag">{c.tag}</p>
                <p className="item-category__title">
                    {c.title}
                    <span className='item-category__count'>
                        {c.count}
                    </span>
                </p>
            </li>
        );
    }

    console.log('Categories')
    return (
        <AsideItem className='categories'>
            <div className="categories__inner">
                <ul className='categories__list'>
                    {list()}
                </ul>
                <button className='categories__all'>Показать все</button>
            </div>
        </AsideItem>
    );
};

export default Categories;