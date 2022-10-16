import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faCalendarCheck,
  faKissWinkHeart,
} from "@fortawesome/free-regular-svg-icons";
import React from "react";

const Service = ({ service }) => {
  const { id, serviceName, icon } = service;

  return (
    <div>
      <div className="bg-white hover:drop-shadow-xl hover:bg-white p-12 rounded">
              <div className=" flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                <FontAwesomeIcon icon={icon}></FontAwesomeIcon>
              </div>
              <h3 className="mb-2 text-xl font-bold dark:text-white">
                {serviceName}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo
                qui, nam aperiam cupiditate consequuntur quas. Modi, at dolore?
              </p>
              <button className="text-white mt-3 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800">
                Book
              </button>
            </div>
    </div>
  );
};

export default Service;
