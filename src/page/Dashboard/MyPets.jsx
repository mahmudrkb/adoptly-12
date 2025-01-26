import React, { useState } from "react";
import SectionsTitles from "./../shared/SectionTitles";

import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Typography,
  Button,
  CardBody,
  Chip,
  CardFooter,
  Avatar,
  IconButton,
  Tooltip,
} from "@material-tailwind/react";

import { MdAddTask, MdDeleteOutline } from "react-icons/md";
import { useQuery } from "@tanstack/react-query";
import useAuth from "./../../hooks/useAuth";
import { format } from "date-fns";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const MyPets = () => {
  const { user } = useAuth();

  const axiosPublic = useAxiosPublic();

  const { data: pets = [], refetch } = useQuery({
    queryKey: ["pets"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/addedPets/${user.email}`);
      return res.data;
    },
  });

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    })
      .then((result) => {
        if (result.isConfirmed) {
          axiosPublic.delete(`/delete-pet/${id}`).then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
            refetch();
          });
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${err.message} Try Again`,
        });
      });
  };

  // const [isdisabled,setDisabled]=useState(false)

  const handleUpdateStatus = (id, status) => {
    const data = {
      adopted: status,
    };
    axiosPublic.patch(`/setAdopted/${id}`, data).then((res) => {
      Swal.fire({
        title: "Adopted Successfully!",
        icon: "success",
      });
      refetch();
      // setDisabled(true)
    });
  };
  // console.log("this is all my added pets", pets);

  // const formattedDate = format(date, "MMMM dd, yyyy");

  return (
    <div className="container mx-auto my-10">
      <SectionsTitles
        heading={"My Pets"}
        subheading={"This is all my pets"}
      ></SectionsTitles>
      <div>
        <Card className="h-full w-full overflow-x-scroll">
          <CardHeader floated={false} shadow={false} className="rounded-none">
            <div className=" flex items-center justify-between gap-8">
              <div>
                <Typography variant="h5">
                  My Pets List ({pets.length})
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                  See information about all pets
                </Typography>
              </div>
            </div>
          </CardHeader>
          <CardBody className=" px-0">
            <table className=" w-full min-w-max table-auto text-left">
              <thead>
                <tr className=" bg-teal-300 text-white">
                  <th className="border-y border-gray-100 p-4">
                    <Typography
                      variant="small"
                      className="font-normal leading-none "
                    >
                      #
                    </Typography>
                  </th>
                  <th className="border-y border-blue-gray-100  p-4">
                    <Typography
                      variant="small"
                      className="font-normal leading-none "
                    >
                      Name
                    </Typography>
                  </th>
                  <th className="border-y border-blue-gray-100  p-4">
                    <Typography
                      variant="small"
                      className="font-normal leading-none "
                    >
                      Category
                    </Typography>
                  </th>
                  <th className="border-y border-blue-gray-100  p-4">
                    <Typography
                      variant="small"
                      className="font-normal leading-none "
                    >
                      Status
                    </Typography>
                  </th>
                  <th className="border-y border-blue-gray-100  p-4">
                    <Typography
                      variant="small"
                      className="font-normal leading-none "
                    >
                      Date
                    </Typography>
                  </th>

                  <th className="border-y border-blue-gray-100  p-4">
                    <Typography
                      variant="small"
                      className="font-normal leading-none "
                    ></Typography>
                  </th>
                </tr>
              </thead>
              <tbody>
                {pets?.map((pet, index) => {
                  const isLast = index === pets.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-blue-gray-50";

                  return (
                    <tr key={index}>
                      <td className={classes}>
                        <Typography variant="small" className="font-normal">
                          {index + 1}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <div className="flex items-center gap-3">
                          <Avatar src={pet.image} alt={pet.name} size="sm" />
                          <div className="flex flex-col">
                            <Typography variant="small" className="font-normal">
                              {pet.name}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="flex flex-col">
                          <Typography variant="small" className="font-normal">
                            {pet.category}
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="w-max">
                          <Chip
                            variant="ghost"
                            size="sm"
                            value={pet.adopted ? "Adopted" : "Not Adopted"}
                            color={pet.adopted ? "green" : "blue-gray"}
                          />
                        </div>
                      </td>

                      <td className={classes}>
                        <Typography variant="small" className="font-normal">
                          {pet.date &&
                            format(new Date(pet.date), "MMMM dd, yyyy hh:mm")}
                        </Typography>
                      </td>
                      <td className={classes}>
                        <Tooltip content="Adopted ">
                          <button
                            onClick={() => handleUpdateStatus(pet._id, true)}
                          >
                            <IconButton variant="text">
                              <MdAddTask className="h-4 w-4" />
                            </IconButton>
                          </button>
                        </Tooltip>
                        <Tooltip content="Edit Pets">
                          <Link to={`/dashboard/update-pet/${pet._id}`}>
                            <IconButton variant="text">
                              <PencilIcon className="h-4 text-green-600  w-4" />
                            </IconButton>
                          </Link>
                        </Tooltip>

                        <Tooltip content="Delete">
                          <IconButton variant="text">
                            <button onClick={() => handleDelete(pet._id)}>
                              <MdDeleteOutline className="h-4 text-red-600 w-4" />
                            </button>
                          </IconButton>
                        </Tooltip>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </CardBody>
          <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
            <Typography variant="small" className="font-normal">
              Page 1 of 10
            </Typography>
            <div className="flex gap-2">
              <Button variant="outlined" size="sm">
                Previous
              </Button>
              <Button variant="outlined" size="sm">
                Next
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default MyPets;
