import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import PetCard from "../shared/PetCard";
import { FaAngleDoubleRight, FaArrowLeft } from 'react-icons/fa';
import { Link } from "react-router-dom";


const TopPets = () => {
  const axiosPublic = useAxiosPublic();

  const { data: pets = [], refetch } = useQuery({
    queryKey: ["pets"],
    queryFn: async () => {
      const res = await axiosPublic.get("/allPets");
      return res.data;
    },
  });


  return (
    <div   className=" dark:bg-blue-gray-900 ">
      <div className="container mx-auto p-3 py-10">
        <div className="">
          <h2 className="text-pretty text-3xl font-semibold dark:text-white text-gray-900 sm:text-4xl">
            Top Pets
          </h2>
          <p className="mt-6 max-w-md text-gray-600 dark:text-gray-300"></p>
        </div>
        <div  className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {pets.slice(0, 3).map((pet, index) => (
            <PetCard key={index} pet={pet}></PetCard>
          ))}
        </div>
        <div className="mt-10 font-semibold flex justify-end ">
          {" "}
          <Link to={"/listing"} className=" transition duration-300 flex items-center justify-center gap-2
                           hover:bg-orange-100 hover:text-gray-700 rounded-md bg-teal-300 text-white py-2 px-4 border border-transparent text-center text-sm shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none  active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"  >See All <FaAngleDoubleRight /> </Link>
          
        </div>
      </div>
    </div>
  );
};

export default TopPets;
