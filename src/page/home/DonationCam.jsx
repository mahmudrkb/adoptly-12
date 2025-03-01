import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { FaAngleDoubleRight } from "react-icons/fa";
import AOS from 'aos';
import 'aos/dist/aos.css';

const DonationCam = () => {
  AOS.init()
  const axiosPublic = useAxiosPublic();

  const { data: allDonations = [], refetch } = useQuery({
    queryKey: ["allDonations"],
    queryFn: async () => {
      const res = await axiosPublic.get("/allDonations");
      return res.data;
    },
  });
  //   console.log(allDonations)

  return (
    <div className="dark:bg-blue-gray-900">
      <div className="container  mx-auto py-10 p-3">
        <div className="">
          <h2 className="text-pretty text-3xl font-semibold dark:text-white text-gray-900 sm:text-4xl">
            Donation Campaign
          </h2>
          <p className="mt-6 max-w-md text-gray-600 dark:text-gray-300"></p>
        </div>
        <div data-aos="fade-up" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {allDonations.slice(0, 3).map((donation, index) => (
            <Card
              key={index}
              className="mt-6 dark:bg-blue-gray-800 bg-gray-50 max-w-96"
            >
              <CardHeader color="blue-gray" className="relative h-56">
                <img 
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="1000"

                  src={donation.image}
                  alt="card-image"
                  className="h-fill w-full object-cover "
                />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {donation.name}
                </Typography>
                <Typography>
                  <div className="flex justify-between font-semibold">
                    <div className="text-green-500  ">
                      Goal
                      <p>$ {donation.maxAmount}</p>{" "}
                    </div>

                    <div className="text-orange-500">
                      Raised
                      <p>$ 100</p>{" "}
                    </div>

                    <div className="text-red-500">
                      To Go
                      <p>$ {donation.maxAmount - 100}</p>{" "}
                    </div>
                  </div>
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Link to={`/detailsCam/${donation._id}`}>
                  <Button
                    className="hover:bg-orange-100 hover:text-gray-700"
                    color="teal"
                  >
                    Read More
                  </Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="mt-10 font-semibold flex justify-end ">
          {" "}
          <Link
            to={"/allCampaigns"}
            className=" transition duration-300 flex items-center justify-center gap-2
                                   hover:bg-orange-100 hover:text-gray-700 rounded-md bg-teal-300 text-white py-2 px-4 border border-transparent text-center text-sm shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none  active:bg-slate-700 hover:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          >
            See All <FaAngleDoubleRight />{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default DonationCam;
