import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { Link, useParams } from "react-router-dom";
import Modal from "../components/Modal";

const PetDetails = () => {
  const axiosPublic = useAxiosPublic();
  const { id } = useParams();

  const { data: pet = [], refetch } = useQuery({
    queryKey: ["pet"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/pet/${id}`);
      return res.data;
    },
  });
  //   console.log(pet);

  const {
    image,
    name,
    age,
    location,
    shortDescription,
    longDescription,
    category,
    _id,
  } = pet;
  return (
    <div className="bg-gray-50  dark:bg-blue-gray-900">
      <div className=" mt-16   py-12 container mx-auto p-3 flex justify-center">
        <Card className="w-full bg-white dark:bg-blue-gray-800  max-w-4xl ">
          <CardHeader
            shadow={false}
            floated={false}
            className="m-0 lg:w-2/5 shrink-0 "
          >
            <img
              src={image}
              alt="card-image"
              className="h-full w-full object-cover"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h6" color="gray" className="dark:text-white mb-4 uppercase">
              {category}
            </Typography>
            <Typography variant="h4" color="blue-gray  " className="mb-2 dark:text-white">
              <div className="flex justify-between">
                {" "}
                <h1>{name} </h1> <h2>{age} Year </h2>
              </div>
            </Typography>
            <address className="dark:text-white" >{location}</address>
            <Typography color="gray" className="dark:text-white  mt-4 mb-8 font-normal">
              {longDescription}
            </Typography>

            <Modal></Modal>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default PetDetails;
