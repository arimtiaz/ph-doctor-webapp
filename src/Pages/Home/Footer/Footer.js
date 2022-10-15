import React from "react";
import { Link } from "react-router-dom";
import logo from "../../../images/jonas_logo.png";

const Footer = () => {
  return (
    <div>
      <footer class="p-4 bg-white rounded-lg shadow md:px-6 md:py-8 dark:bg-gray-900">
        <div class="sm:flex sm:items-center sm:justify-between">
          <Link
            href="https://flowbite.com/"
            class="flex items-center mb-4 sm:mb-0"
          >
            <img style={{ width: "200px" }} src={logo} alt="" />
          </Link>
          <ul class="flex flex-wrap items-center mb-6 text-sm text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <Link href="/home" class="mr-4 hover:underline md:mr-6 ">
                Home
              </Link>
            </li>
            <li>
              <Link href="/services" class="mr-4 hover:underline md:mr-6">
                Services
              </Link>
            </li>
            <li>
              <Link href="/blogs" class="mr-4 hover:underline md:mr-6 ">
                Blogs
              </Link>
            </li>
          </ul>
        </div>
        <div class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8">
          {" "}
        </div>
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2022{" "}
          <Link href="https://github.com/programmingHero1" class="hover:underline">
            Programming Hero
          </Link>
          . All Rights Reserved.
        </span>
      </footer>
    </div>
  );
};

export default Footer;
