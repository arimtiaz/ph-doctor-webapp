import React from 'react';
import Footer from './Footer/Footer';
import Hero from './Hero/Hero';
import Service from './Service/Service';
import Social from './Social/Social';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Hero></Hero>
            <Social></Social>
            <Service></Service>
            <Footer></Footer>
        </div>
    );
};

export default Home;