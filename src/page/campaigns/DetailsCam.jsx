import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useParams } from "react-router-dom";
import ModalCam from "./ModalCam";

const DetailsCam = () => {
  const axiosPublic = useAxiosPublic();
  const { id } = useParams();

  const { data: detailsCam = [], refetch } = useQuery({
    queryKey: ["detailsCam"],

    queryFn: async () => {
      const res = await axiosPublic.get(`/donation-cam/${id}`);
      return res.data;
    },
  });
  //   console.log(detailsCam)
  const {
    image,
    name,
    longDescription,
    lastDate,
    maxAmount,
    startDate,
    shortDescription,
  } = detailsCam;

  return (
    <div>
      <div className="container mx-auto mt-16 p-3 my-10">
        <Card className="w-full max-w-5xl mx-auto bg-gray-50 mt-10 flex-row">
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
            <Typography variant="h6" color="gray" className="mb-4 uppercase">
              {name}
            </Typography>
            <Typography variant="h4" color="blue-gray" className="mb-2">
              {shortDescription}
            </Typography>
            <Typography color="gray" className="mb-8 font-normal">
              {longDescription}
            </Typography>
            <Typography color="gray" className="mb-8 font-normal">
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

            <ModalCam></ModalCam>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default DetailsCam;
