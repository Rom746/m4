import React, { FC } from 'react';

import Head from './Head';
import Product from './Products';

const Home: FC = () => {

    return (
        <main>
            <div className="container">
                <Head />
                <div className="inner">
                    <Product />
                </div>
            </div>
        </main>
    );
};

export default Home;