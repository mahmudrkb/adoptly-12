import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { useParams } from "react-router-dom";
import ModalCam from "./ModalCam";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);


// console.log(import.meta.env.VITE_PAYMENT_PK ,"this is promise")
const DetailsCam = () => {
  const axiosSecure = useAxiosSecure();
  const { id } = useParams();

  const { data: detailsCam = [], refetch } = useQuery({
    queryKey: ["detailsCam"],

    queryFn: async () => {
      const res = await axiosSecure.get(`/donation-cam/${id}`);
      return res.data;
    },
  });
    console.log(detailsCam)
  const {
    image,
    name,
    longDescription,
    lastDate,
    maxAmount,
    shortDescription,
  } = detailsCam;

  return (
    <div className="dark:bg-blue-gray-900 dark:text-white">
      <div className="container mx-auto mt-10 p-3 py-10">
        <Card className="w-full  max-w-5xl mx-auto dark:bg-blue-gray-800 bg-gray-50 mt-10 lg:flex-row">
          <CardHeader
            shadow={false}
            floated={false}
            className="m-0 w-2/5 shrink-0 rounded-r-none"
          >
            <img
              src={image}
              alt="card-image"
              className="h-full w-full object-cover"
            />
          </CardHeader>
          <CardBody>
            <Typography variant="h6" color="gray" className="mb-4 dark:text-gray-300 uppercase">
              {name}
            </Typography>
            <Typography variant="h4" color="blue-gray" className="mb-2 dark:text-white">
              {shortDescription}
            </Typography>
            <Typography color="gray" className="mb-8 font-normal dark:text-gray-400">
              {longDescription}
            </Typography>
            <Typography color="gray" className="mb-8 font-normal dark:text-white">
              <div className=" flex items-center justify-between">
                <div>
                  {" "}
                  Goal: <span className="text-green-600"> $ {maxAmount}</span>
                </div>
                <div>
                  End Date : <span className="text-red-600">{lastDate}</span>
                </div>
              </div>
            </Typography>

            <Elements stripe={stripePromise}>
              {" "}
              <ModalCam></ModalCam>
            </Elements>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default DetailsCam;
