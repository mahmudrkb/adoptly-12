import React from "react";

const Banner = () => {
  return (
    <div className=" dark:bg-blue-gray-900  ">
      <div className=' max-h-96   bg-fixed   bg-center bg-[url("https://i.ibb.co.com/s9xMqCv7/banner.png")] bg-cover  '>
        <div className=" flex items-center justify-center   bg-gray-900 bg-opacity-60 h-96 roboto-mono ">
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
