import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  Card,
  CardBody,
} from "@material-tailwind/react";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import useAuth from "./../hooks/useAuth";
import Swal from "sweetalert2";

const Modal = () => {
  const { user } = useAuth();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(!open);
  const axiosPublic = useAxiosPublic();
  const { id } = useParams();

  const { data: pet = {} } = useQuery({
    queryKey: ["pet"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/pet/${id}`);
      return res.data;
    },
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const adoption = {
      owner: pet.ownerEmail,
      id: pet._id,
      name: user.displayName,
      email: user.email,
      phone: data.phone,
      location: data.location,
      status: "pending",
    };
    // console.log(adoption);

    const addAdoption = await axiosPublic.post("/addAdoption", adoption);

    // console.log(addAdoption.data);

    if (addAdoption.data.insertedId) {
      Swal.fire({
        position: "top-center",
        icon: "success",
        title: "Adopted Successfully",
        showConfirmButton: false,
        timer: 1500,
      });
      handleOpen();
    }
  };

  return (
    <div>
      <Button
        className="transition duration-300 flex items-center justify-center gap-2
                  hover:bg-orange-100 hover:text-gray-700 rounded-md bg-teal-300 text-white py-2 px-4"
        onClick={handleOpen}
      >
        Adopt Now
      </Button>

      <Dialog open={open} handler={handleOpen}>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Pet Image */}
          <div className="flex items-center">
            <img
              className="mx-auto h-56 w-56 lg:w-full lg:h-full object-contain"
              src={pet.image}
              alt={pet.name || "Pet"}
            />
          </div>

          {/* Form */}
          <div className="pt-4">
            <DialogHeader className="justify-center">
              <h1>{pet.name}</h1>
            </DialogHeader>

            <DialogBody>
              <Card className="max-w-96 bg-gray-50">
                <CardBody>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="space-y-4 w-full">
                      <div>
                        <input
                          id="name"
                          name="name"
                          type="text"
                          disabled
                          value={user?.displayName}
                          {...register("name")}
                          className=" border-2 w-full bg-white p-1 pl-3 rounded-md inputField  disabled:cursor-not-allowed"
                        />
                      </div>

                      <div>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          disabled
                          value={user?.email}
                          {...register("email")}
                          className=" border-2 w-full bg-white p-1 pl-3 rounded-md inputField disabled:cursor-not-allowed"
                        />
                      </div>

                      <div>
                        <input
                          id="phone"
                          placeholder="Phone Number"
                          name="phone"
                          type="text"
                          {...register("phone", {
                            required: "Phone number is required",
                            // pattern: {
                            //   value: /^[0-9]+$/,
                            //   message: "Phone number must contain only digits",
                            // },
                            minLength: {
                              value: 11,
                              message:
                                "Phone number must be at least 11 digits long",
                            },
                          })}
                          className="border-2 w-full bg-white p-1 pl-3 rounded-md inputField"
                        />
                        {errors.phone && (
                          <span className="text-red-500 text-xs">
                            {errors.phone.message}
                          </span>
                        )}
                      </div>

                      <div>
                        <input
                          id="location"
                          name="location"
                          placeholder="Location"
                          type="text"
                          {...register("location", {
                            required: "Location is required",
                          })}
                          className=" border-2 w-full bg-white p-1 pl-3 rounded-md inputField"
                        />
                        {errors.location && (
                          <span className="text-red-500 text-xs">
                            {errors.location.message}
                          </span>
                        )}
                      </div>
                    </div>
                    <div>
                      <DialogFooter className="flex justify-between">
                        <Button
                          className="border-red-600 border"
                          variant="text"
                          color="red"
                          onClick={handleOpen}
                        >
                          <span>Cancel</span>
                        </Button>
                        <Button
                          type="submit"
                          className="border-green-600 border"
                          variant="text"
                          color="green"
                        >
                          <span>Confirm</span>
                        </Button>
                      </DialogFooter>
                      {/* <button
                        className="px-4 py-2 bg-color-accent rounded-md mt-4"
                        type="submit"
                      >
                        Submit
                      </button> */}
                    </div>
                  </form>
                </CardBody>
              </Card>
            </DialogBody>

            {/* Footer */}
          </div>
        </div>
      </Dialog>
    </div>
  );
};

export default Modal;
