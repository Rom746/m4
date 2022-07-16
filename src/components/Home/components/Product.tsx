import React, { FC, useState } from 'react';
import { productFilter } from 'utils/productsFilter';
import { useAppSelector } from 'utils/reduxUtils';
import GostFilter from './GostsFilter';
import ProductList from './ProductsList';

const Product: FC = () => {
    const [selectedGost, setSelectedGost] = useState<number | null>(null);
    const {products} = useAppSelector(state => state.productReducer);
    const {gosts} = useAppSelector(state => state.gostReducer);
     
    const productsFiltered = productFilter(products, {gost:selectedGost});

    return (
        <section className='home__products products'>
            <div className="products__aside">

            </div>
            <div className="products__inner ">
                <GostFilter gosts={gosts} selectedGost={selectedGost} setSelectedGost={setSelectedGost}/>
                {productsFiltered.length > 0 ?  <ProductList products={productsFiltered}/> : <h1 className='error'>Ничего не найдено</h1> }
            </div>
        </section>
    );
};

export default Product;