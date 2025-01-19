import React from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
} from "@material-tailwind/react";

import useAxiosPublic from "../hooks/useAxiosPublic";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

const Modal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(open);
  const axiosPublic = useAxiosPublic();
  const { id } = useParams();
  const { data: pet = [], refetch } = useQuery({
    queryKey: ["pet"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/pet/${id}`);
      return res.data;
    },
  });

  console.log(pet);
  return (
    <div>
      <Button
        className="  transition duration-300 flex items-center justify-center gap-2
                           hover:bg-orange-100 hover:text-gray-700 rounded-md bg-teal-300 text-white py-2 px-4 border border-transparent text-center text-sm shadow-md hover:shadow-lg focus:bg-slate-700 focus:shadow-none  active:bg-slate-700 active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none "
        onClick={handleOpen}
      >
        Adopt Now
      </Button>

      <Dialog open={open} handler={handleOpen}>
        <div className=" grid grid-cols-2">
          <div>
            {" "}
            <img
              className=" w-full h-full object-cover "
              src={pet.image}
              alt=""
            />
          </div>

          <div className="pt-4">
            <DialogHeader className="justify-center">
              <h1>{pet.name}</h1>
            </DialogHeader>

            {/* form   .... */}
            <DialogBody>
              <Card className="max-w-96">
                <CardBody className="flex flex-col gap-4">
                  <Input label="Email" size="lg" />
                  <Input label="Password" size="lg" />
                  <Input label="Password" size="lg" />
                  <Input label="Password" size="lg" />
                </CardBody>
              </Card>
            </DialogBody>
          </div>
        </div>
        <DialogFooter className="flex justify-between">
          <Button
            variant="text"
            color="red"
            onClick={handleOpen}
            className="mr-1 border-red-400 border"
          >
            <span>Cancel</span>
          </Button>
          <Button
            className="border-green-400 border "
            variant="text"
            color="green"
            onClick={handleOpen}
          >
            <span>Confirm</span>
          </Button>
        </DialogFooter>
      </Dialog>
    </div>
  );
};

export default Modal;
