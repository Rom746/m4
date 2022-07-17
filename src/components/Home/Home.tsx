import { FC } from 'react';
import Categories from './components/Categories';
import Filters from './components/Filters';
import GostFilter from './components/GostsFilter';
import Head from './components/Head';
import ProductList from './components/ProductsList';

const Home: FC = () => {
    return (
        <main>
            <div className="container">
                <Head />
                <section className='home__products products'>
                    <div className="products__aside aside">
                        <Categories />
                        <Filters />
                    </div>
                    <div className="products__inner ">
                        <GostFilter />
                        <ProductList/>
                    </div>
                </section>
            </div>
        </main>
    );
};

export default Home;