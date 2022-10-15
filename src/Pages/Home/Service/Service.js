import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart, faCalendarCheck, faKissWinkHeart } from '@fortawesome/free-regular-svg-icons'
import React from 'react';

const Service = () => {
    return (
        <div>
            <section class="bg-white dark:bg-gray-900">
  <div class="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
      <div class="max-w-screen-md mb-8 lg:mb-16">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Services For You To Be Healthy</h2>
          <p class="text-gray-500 sm:text-xl dark:text-gray-400">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit ullam in, tempora praesentium perferendis fugiat qui atque expedita laboriosam impedit!</p>
      </div>
      <div class="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
          <div className='bg-white drop-shadow-xl p-12 rounded'>
              <div class=" flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">Cardiac Rehabilition</h3>
              <p class="text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo qui, nam aperiam cupiditate consequuntur quas. Modi, at dolore?</p>
              <button className='text-white mt-3 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800'>Book</button>
          </div>
          <div className='bg-white drop-shadow-xl p-12 rounded '>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <FontAwesomeIcon icon={faCalendarCheck}></FontAwesomeIcon>
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">Food Habit</h3>
              <p class="text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo qui, nam aperiam cupiditate consequuntur quas. Modi, at dolore?</p>
              <button className='text-white mt-3 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800'>Book</button>
          </div>
          <div className='bg-white drop-shadow-xl p-12 rounded '>
              <div class="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                  <FontAwesomeIcon icon={faKissWinkHeart}></FontAwesomeIcon>
              </div>
              <h3 class="mb-2 text-xl font-bold dark:text-white">Staying Happy</h3>
              <p class="text-gray-500 dark:text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo qui, nam aperiam cupiditate consequuntur quas. Modi, at dolore?</p>
              <button className='text-white mt-3 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800'>Book</button>
          </div>
      </div>
  </div>
</section>
        </div>
    );
};

export default Service;