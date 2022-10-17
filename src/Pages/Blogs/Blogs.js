import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa1, fa2, fa3 } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const Blogs = () => {
    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
    <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="max-w-screen-md">
        <div className=" flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <FontAwesomeIcon icon={fa1}></FontAwesomeIcon>
              </div>
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Difference between authorization and authentication.</h2>
            <p className="mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400">Authentication verifies the identity of a user or service, and authorization determines their access rights</p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            </div>
        </div>
        <div className="max-w-screen-md">
        <div className="my-10 flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <FontAwesomeIcon icon={fa2}></FontAwesomeIcon>
              </div>
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Why are you using firebase? What other options do you have to implement authentication?</h2>
            <p className="mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400">Firebase helps you develop high-quality apps, grow your user base, and earn more money.
            </p>
            <ul className='ml-10 my-10 list-disc'>
                <li>Back4App</li>
                <li>Backendless</li>
                <li>Kuzzle</li>
                <li>Pubnub</li>
                <li>Kumulos</li>
                <li>Heroku</li>
            </ul>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            </div>
        </div>
        <div className="my-10 max-w-screen-md">
        <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <FontAwesomeIcon icon={fa3}></FontAwesomeIcon>
              </div>
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">What other services does firebase provide other than authentication</h2>
            <p className="mb-8 font-light text-gray-500 sm:text-xl dark:text-gray-400">Hosting Services</p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
            </div>
        </div>
    </div>
</section>
        </div>
    );
};

export default Blogs;