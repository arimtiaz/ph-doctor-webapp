import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faCalendarCheck,
  faKissWinkHeart,
} from "@fortawesome/free-regular-svg-icons";
import React, { useEffect, useState } from "react";
import Service from "../Service/Service";

const Services = () => {
  const [services, setServices] = useState([])
  
  useEffect(() =>{
    fetch('services.json')
    .then(res => res.json())
    .then(data => setServices(data))
  }, [])

  return (
    <div id="services" className="lg:mt-5">
      <h2 className="text-center mb-3 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Services For You To Be Healthy
            </h2>
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
        {
          services.map(service => <Service
          key={service.id}
          service={service}
          ></Service>)
        }
        </div>
      </div>
    </div>
  );
};

export default Services;
