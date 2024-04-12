import React from 'react';
import Header from '../Header';
import ProductList from '../ProductList';
import './index.css'

const Home = () => {

    return (
        <div className='maincontainer'>
            <Header />
            <ProductList/>
        </div>
    )
}

export default Home;
