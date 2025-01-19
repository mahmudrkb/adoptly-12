import React from "react";
import { Link } from "react-router-dom";

const PetCard = ({ pet }) => {
  const { image, name,age,location,shortDescription,longDescription,category, _id } = pet;
  return (
    <div className="">
      <div class="relative flex flex-col  bg-white  border  shrink-10 shadow-md  border-slate-200 rounded-lg max-w-96">
        <div class="relative h-56 m-2.5 overflow-hidden text-white rounded-md">
          <img className="w-full h-full object-cover"
            src={image}
            alt="card-image"
          />
        </div>
        <div class="p-4">
         <div className="flex items-center justify-between"> <h6 class="mb-2 text-slate-800 text-xl font-semibold">
           {name}
          </h6>
          <h6 class="mb-2 text-slate-800 text-xl ">
           Age: {age}
          </h6></div>
          <address class="text-slate-600 leading-normal font-light">
           {location}
          </address>
          <p class="text-slate-600 mt-3 leading-normal font-light">
        {/* {longDescription.slice(0, 100)} */}
        {longDescription.substring(0,50)}
          </p>
        </div>
        <div class="px-4 pb-4 pt-0 mt-2">
      
       <Link to={`/petDetails/${_id}`}
            className="  transition duration-300 flex items-center justify-center gap-2
                           hover:bg-orange-100 hover:text-gray-700 rounded-md bg-teal-300 text-white py-2 px-4 border border-transparent text-center text-sm shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none  active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            type="button"
          > View Details
        
          </Link>
   
        </div>
      </div>
    </div>
  );
};

export default PetCard;
