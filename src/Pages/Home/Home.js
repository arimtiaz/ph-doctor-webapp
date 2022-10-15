import React from 'react';
import Hero from './Hero/Hero';
import Service from './Service/Service';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Hero></Hero>
            <Service></Service>
        </div>
    );
};

export default Home;