import { IProduct } from 'models/IProduct';
import { FC, useState } from 'react';
import ProductItem from './ProductsItem';

interface ProductListProps {
    products: IProduct[];
}

const ProductList: FC<ProductListProps> = ({ products }) => {
    const [selectedCard, setSelectedCard] = useState<number | null>(null);
    return (
        <div className='products__card card'>
            <ul className="card__list">
                {products.map(product =>
                    <ProductItem product={product} key={product.id} selectedCard={selectedCard} setSelectedCard={setSelectedCard}/>
                )}
            </ul>
        </div>
    );
};

export default ProductList;