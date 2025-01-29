import { useQuery } from "@tanstack/react-query";

import PetCard from "./shared/PetCard";
import useAxiosPublic from "../hooks/useAxiosPublic";

const Listing = () => {
  const axiosPublic = useAxiosPublic();

  const { data: pets = [], refetch } = useQuery({
    queryKey: ["pets"],
    queryFn: async () => {
      const res = await axiosPublic.get("/allPets");
      return res.data;
    },
  });

  // console.log("this is all pets", pets);

  return (
    <div className="pt-16 dark:bg-blue-gray-900 ">
      <div className='h-screen  bg-fixed   bg-center bg-[url("https://i.ibb.co.com/hBbGgfV/Untitled-Project.jpg")] bg-cover  '>
        <div className=" flex items-center justify-center   bg-gray-900 bg-opacity-60  h-screen roboto-mono ">
          <div className="text-center space-y-3 text-white">
            <h1 className="text-6xl  "> Discover Your Companion!</h1>
            <p>
              Discover adorable pets waiting for a loving home.Adopt, don't
              shop, and bring joy to your life with a furry friend!"
            </p>

            {/* <div  className=" flex justify-center items-center gap-x-2 lg:flex">
              <div className=" flex w-full gap-2 md:w-max">
                <input
                  type="search"
                  placeholder="Search"
                  containerProps={{
                    className: "min-w-[288px]",
                  }}
                  className=" !border-t-blue-gray-300 pl-9 placeholder:text-blue-gray-300 focus:!border-blue-gray-300"
                  labelProps={{
                    className: "before:content-none after:content-none",
                  }}
                />
                <div className="!absolute left-3 top-[13px]">
                  <svg
                    width="13"
                    height="14"
                    viewBox="0 0 14 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.97811 7.95252C10.2126 7.38634 10.3333 6.7795 10.3333 6.16667C10.3333 4.92899 9.84167 3.742 8.9665 2.86683C8.09133 1.99167 6.90434 1.5 5.66667 1.5C4.42899 1.5 3.242 1.99167 2.36683 2.86683C1.49167 3.742 1 4.92899 1 6.16667C1 6.7795 1.12071 7.38634 1.35523 7.95252C1.58975 8.51871 1.93349 9.03316 2.36683 9.4665C2.80018 9.89984 3.31462 10.2436 3.88081 10.4781C4.447 10.7126 5.05383 10.8333 5.66667 10.8333C6.2795 10.8333 6.88634 10.7126 7.45252 10.4781C8.01871 10.2436 8.53316 9.89984 8.9665 9.4665C9.39984 9.03316 9.74358 8.51871 9.97811 7.95252Z"
                      fill="#CFD8DC"
                    />
                    <path
                      d="M13 13.5L9 9.5M10.3333 6.16667C10.3333 6.7795 10.2126 7.38634 9.97811 7.95252C9.74358 8.51871 9.39984 9.03316 8.9665 9.4665C8.53316 9.89984 8.01871 10.2436 7.45252 10.4781C6.88634 10.7126 6.2795 10.8333 5.66667 10.8333C5.05383 10.8333 4.447 10.7126 3.88081 10.4781C3.31462 10.2436 2.80018 9.89984 2.36683 9.4665C1.93349 9.03316 1.58975 8.51871 1.35523 7.95252C1.12071 7.38634 1 6.7795 1 6.16667C1 4.92899 1.49167 3.742 2.36683 2.86683C3.242 1.99167 4.42899 1.5 5.66667 1.5C6.90434 1.5 8.09133 1.99167 8.9665 2.86683C9.84167 3.742 10.3333 4.92899 10.3333 6.16667Z"
                      stroke="#CFD8DC"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
              <button size="md" className="rounded-lg ">
                Search
              </button>
            </div> */}
          </div>
        </div>
      </div>
      {/* all pets  */}
      <div className="container mx-auto p-3 py-10">
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {pets.map((pet, index) => (
            <PetCard key={index} pet={pet}></PetCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Listing;
