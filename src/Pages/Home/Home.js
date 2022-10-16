import React from 'react';
import Footer from './Footer/Footer';
import Hero from './Hero/Hero';
import Services from './Services/Services';
import Service from './Services/Services';
import Social from './Social/Social';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <Hero></Hero>
            <Social></Social>
            <Services></Services>
            <Footer></Footer>
        </div>
    );
};

export default Home;