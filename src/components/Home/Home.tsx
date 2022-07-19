import { FC } from 'react';
import About from './Foot/About';
import Categories from './Aside/Categories';
import Foot from './Foot/Foot';
import GostFilter from './Product/GostsFilter';
import Head from './Head/Head';
import ProductList from './Product/ProductsList';
import Filters from './Aside/Filters';


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
                <Foot />
                <About/>
            </div>
        </main>
    );
};

export default Home;