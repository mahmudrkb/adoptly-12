import React from "react";

const Banner = () => {
  return (
    <div className="mt-16 dark:bg-blue-gray-900   ">
      <div className='h-screen   bg-fixed   bg-center bg-[url("https://i.ibb.co.com/WPtXRhd/banner2.png")] bg-cover  '>
        <div className=" flex items-center justify-center   bg-gray-900 bg-opacity-60  h-screen roboto-mono ">
          <div className="text-center space-y-3  text-white">
            <h1 className="text-6xl  "> Find Your Best Friend </h1>
            <p>
              Browse pets from our network of over 500 shelters and rescues.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
