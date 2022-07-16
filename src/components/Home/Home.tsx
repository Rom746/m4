import { ITypesProduct } from 'models/ITypesProduct';
import React, { FC, useState } from 'react';

import Head from './components/Head';
import Product from './components/Product';

const Home: FC = () => {

    const [priceFilter, setPriceFilter] = useState<number[]>([]);
    const [typeFilter, setTypeFilter] = useState<ITypesProduct[]>([])

    return (
        <main>
            <div className="container">
                <Head />
                <Product />
            </div>
        </main>
    );
};

export default Home;