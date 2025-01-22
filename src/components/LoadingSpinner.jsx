import React from "react";

import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const LoadingSpinner = () => {
  return (
    <div className='lg:mt-20'>
    <div>
    <Skeleton />
    <Skeleton count={5} />
    </div>
    </div>
  );
};

export default LoadingSpinner;
