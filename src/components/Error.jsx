import Lottie from "lottie-react";
import React from "react";
import { FaArrowLeft } from "react-icons/fa";
import error from "../assets/error.json";

import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <main className="grid min-h-full  place-items-center px-6 py-24 sm:py-0 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold  w-3/5 mx-auto">
            <Lottie className=" " animationData={error} loop={true} />
          </p>
          <h1 className=" text-balance text-5xl font-semibold tracking-tight text-gray-800  sm:text-7xl">
            Page not found
          </h1>
          <p className="mt-5 text-pretty text-lg font-medium text-gray-500 sm:text-xl">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-9 flex items-center justify-center gap-x-6">
            <Link
              to={"/"}
              className="rounded-md flex items-center gap-2 bg-gray-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gray-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
            >
              {" "}
              <FaArrowLeft />
              Go back home
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Error;
