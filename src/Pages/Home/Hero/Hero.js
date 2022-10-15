import React from 'react';
import heroimg from '../../../images/heroimg.png'

const Hero = () => {
    return (
    <div>
        <section className="bg-white dark:bg-gray-900">
    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
        <div className="mr-auto place-self-center lg:col-span-7">
            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl dark:text-white">Helping Peoples Keep There Heart Healthy</h1>
            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">I am a cardiologist who specializes in the diagnosis and treatment of heart disease. Get in contact with me to keep your heart healthy and safe</p>
        </div>
        <div className="hidden lg:mt-0 lg:col-span-5 lg:flex">
            <img className='w-10/12' src={heroimg} alt="" />
        </div>                
    </div>
</section>
    </div>
    );
};

export default Hero;