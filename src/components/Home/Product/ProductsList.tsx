import { FC } from 'react';
import { productFilter } from 'utils/productsFilter';
import { useAppSelector } from 'utils/reduxUtils';
import ProductItem from './ProductsItem';


const ProductList: FC = () => {

    const { products } = useAppSelector(state => state.productReducer);
    const { gostFilter } = useAppSelector(state => state.filterGostReducer);
    const { priceFilter } = useAppSelector(state => state.filterPriceReducer);
    const { typeFilter } = useAppSelector(state => state.filterTypeReducer);

    const productsFiltered = productFilter(products,
        { gostFilter: gostFilter, priceFilter: priceFilter, typeFilter: typeFilter }
    );

    return (productsFiltered.length > 0) ? (
        <div className='products__card card'>
            <ul className="card__list">
                {productsFiltered.map(product =>
                    <ProductItem product={product} key={product.id} />
                )}
            </ul>
        </div>
    ) : <h1 className='error'>Ничего не найдено</h1>
};

export default ProductList;