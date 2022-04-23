import React from 'react';
import HomePage from '../HomePage/HomePage';
import Navbar from '../Nvabar/Navbar';
import Products from '../Products/Products';

const Home = ({cartItem}) => {
    return (
        <div className='container'>
            <Navbar cartItem={cartItem}/>
        </div>
    );
};

export default Home;