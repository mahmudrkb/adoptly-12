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

const AllCampaigns = () => {
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
      <div className="mt-16  ">
        <div className="  ">
          <div className='max-h-96  bg-fixed   bg-center bg-[url("https://i.ibb.co.com/yfYnJxL/360-F-1000821370-0o-Bj-Qg-Dm-OOsbt-HA8-ZDri-X0-BN9-Dc-VWQOi.jpg")] bg-cover  '>
            <div className=" flex items-center justify-center h-96  bg-gray-900 bg-opacity-60  roboto-mono ">
              <div className="text-center space-y-3 text-white">
                <h1 className="text-6xl max-w-2xl  ">
                  {" "}
                  Give Donations For Our Latest Causes
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* this is my card */}

      <div className="container  mx-auto py-10 p-3">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {allDonations.map((donation, index) => (
            <Card key={index} className="mt-6 dark:bg-blue-gray-800 bg-gray-50 max-w-96">
              <CardHeader color="blue-gray" className="relative h-56">
                <img
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
      </div>
    </div>
  );
};

export default AllCampaigns;
