import React, { useState } from "react";
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

import { MdAddTask, MdDeleteOutline, MdPreview } from "react-icons/md";

import { useQuery } from "@tanstack/react-query";

import { format } from "date-fns";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SectionsTitles from "../../shared/SectionTitles";
import { Progress } from "@material-tailwind/react";
import { FaRegCirclePause } from "react-icons/fa6";
import { IoPlayForwardCircleOutline } from "react-icons/io5";
import DonatorModal from "./DonatorModal";

const MyCampaigns = () => {
  const { user } = useAuth();

  const axiosSecure = useAxiosSecure();

  const { data: donations = [], refetch } = useQuery({
    queryKey: ["donations"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/my-donations/${user.email}`);
      return res.data;
    },
  });

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => setOpen(!open);

  //   const handleDelete = (id) => {
  //     Swal.fire({
  //       title: "Are you sure?",
  //       text: "You won't be able to revert this!",
  //       icon: "warning",
  //       showCancelButton: true,
  //       confirmButtonColor: "#3085d6",
  //       cancelButtonColor: "#d33",
  //       confirmButtonText: "Yes, delete it!",
  //     })
  //       .then((result) => {
  //         if (result.isConfirmed) {
  //           axiosSecure.delete(`/delete-donation/${id}`).then((res) => {
  //             if (res.data.deletedCount > 0) {
  //               Swal.fire({
  //                 title: "Deleted!",
  //                 text: "Your file has been deleted.",
  //                 icon: "success",
  //               });
  //             }
  //             refetch();
  //           });
  //         }
  //       })
  //       .catch((err) => {
  //         Swal.fire({
  //           icon: "error",
  //           title: "Oops...",
  //           text: `${err.message} Try Again`,
  //         });
  //       });
  //   };

  // const [isdisabled,setDisabled]=useState(false)

  //   const handleUpdateStatus = (id, status) => {
  //     const data = {
  //       adopted: status,
  //     };
  //     axiosSecure.patch(`/setAdopted/${id}`, data).then((res) => {
  //       Swal.fire({
  //         title: "Adopted Successfully!",
  //         icon: "success",
  //       });
  //       refetch();
  //       // setDisabled(true)
  //     });
  //   };
  // console.log("this is all my added donations", donations);

  // const formattedDate = format(date, "MMMM dd, yyyy");

  return (
    <div className="container mx-auto my-10">
      <SectionsTitles
        heading={"My Campaigns"}
        subheading={"This is all my Donation Campaigns"}
      ></SectionsTitles>
      <div className="overflow-x-auto">
        <Card className="h-full w-full  overflow-x-scroll">
          <CardHeader floated={false} shadow={false} className="rounded-none">
            <div className=" flex items-center justify-between gap-8">
              <div>
                <Typography variant="h5">
                  My Donations Campaigns List ({donations.length})
                </Typography>
              </div>
            </div>
          </CardHeader>
          <CardBody className=" px-0">
            <table className=" w-full min-w-max  table-auto text-left">
              <thead>
                <tr className=" bg-teal-300 text-white">
                  <th className="border-y border-blue-gray-100 p-4">
                    <Typography
                      variant="small"
                      className="font-normal leading-none "
                    >
                      #
                    </Typography>
                  </th>
                  <th className="border-y border-blue-gray-100 p-4">
                    <Typography
                      variant="small"
                      className="font-normal leading-none "
                    >
                      Name
                    </Typography>
                  </th>
                  <th className="border-y border-blue-gray-100 p-4">
                    <Typography
                      variant="small"
                      className="font-normal h-2.5 w-40 leading-none text-center "
                    >
                      Donation progress bar
                    </Typography>
                  </th>
                  <th className="border-y border-blue-gray-100 p-4">
                    <Typography
                      variant="small"
                      className="font-normal leading-none text-center "
                    >
                      Max Amount
                    </Typography>
                  </th>

                  <th className="border-y border-blue-gray-100 p-4">
                    <Typography
                      variant="small"
                      className="font-normal text-center leading-none "
                    >
                      Action{" "}
                    </Typography>
                  </th>
                </tr>
              </thead>
              <tbody className="">
                {donations?.map((donation, index) => {
                  const isLast = index === donations.length - 1;
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
                          <Avatar
                            src={donation.image}
                            alt={donation.name}
                            size="sm"
                          />
                          <div className="flex flex-col">
                            <Typography variant="small" className="font-normal">
                              {donation.name}
                            </Typography>
                          </div>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="text-teal-300">
                          <Progress
                            color="teal"
                            value={19}
                            maxValue={donation.maxAmount}
                            label=" "
                          />
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="text-center">
                          <Typography>$ {donation.maxAmount}</Typography>
                        </div>
                      </td>

                      <td className={classes}>
                        <Tooltip content="Pause ">
                          <button
                            onClick={() =>
                              handleUpdateStatus(donation._id, true)
                            }
                          >
                            <IconButton variant="text">
                              <FaRegCirclePause
                                color="red"
                                className="size-6  "
                              />
                            </IconButton>
                          </button>
                        </Tooltip>
                        <Tooltip content="Play ">
                          <button
                            onClick={() =>
                              handleUpdateStatus(donation._id, true)
                            }
                          >
                            <IconButton variant="text">
                              <IoPlayForwardCircleOutline
                                color="green"
                                className="size-7  "
                              />
                            </IconButton>
                          </button>
                        </Tooltip>
                        <Tooltip content="Edit Pets">
                          <Link
                            to={`/dashboard/update-donation/${donation._id}`}
                          >
                            <IconButton variant="text">
                              <PencilIcon className=" text-green-600  w-5" />
                            </IconButton>
                          </Link>
                        </Tooltip>

                        <Tooltip content="Donation History">
                          <IconButton variant="text">
                            <DonatorModal></DonatorModal>
                          </IconButton>
                        </Tooltip>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default MyCampaigns;
