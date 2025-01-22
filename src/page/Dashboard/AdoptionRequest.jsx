import React from "react";
import SectionsTitles from "./../shared/SectionTitles";
import { PencilIcon, UserPlusIcon } from "@heroicons/react/24/solid";
import {
  Card,
  CardHeader,
  Typography,
  CardBody,
} from "@material-tailwind/react";
import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { MdAddTask, MdDeleteOutline } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const AdoptionRequest = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();

  const { data: adoptionRequest = [], refetch } = useQuery({
    queryKey: ["adoptionRequest"],
    queryFn: async () => {
      const res = await axiosPublic.get(`/myAdoptions/${user.email}`);
      return res.data;
    },
  });

  const handleAdoption = (e, id) => {
    const data = { status: e.target.value };
    axiosPublic.patch(`/setAdoption/${id}`, data).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          title: "Adoption Status Updated",
          icon: "success",
          draggable: true,
        });
        refetch();
      }
    });
  };

  return (
    <div>
      <div className="my-10">
        <SectionsTitles
          heading={"Adoption Request"}
          subheading={"Give a Loving Home to a Pet in Need"}
        ></SectionsTitles>
      </div>
      <div>
        <Card className="h-full w-full ">
          <CardHeader floated={false} shadow={false} className="rounded-none">
            <div className=" flex items-center justify-between gap-8">
              <div>
                <Typography variant="h5">
                  My Pets Adoption Request ({adoptionRequest.length})
                </Typography>
                <Typography color="gray" className="mt-1 font-normal">
                  See Pet Adopter information:
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
                      Email
                    </Typography>
                  </th>
                  <th className="border-y border-blue-gray-100  p-4">
                    <Typography
                      variant="small"
                      className="font-normal leading-none "
                    >
                      Phone Number
                    </Typography>
                  </th>
                  <th className="border-y border-blue-gray-100  p-4">
                    <Typography
                      variant="small"
                      className="font-normal leading-none "
                    >
                      Location
                    </Typography>
                  </th>

                  <th className="border-y border-blue-gray-100  p-4">
                    <Typography
                      variant="small"
                      className="font-normal leading-none "
                    >
                      {" "}
                      Action
                    </Typography>
                  </th>
                </tr>
              </thead>
              <tbody>
                {adoptionRequest?.map((item, index) => {
                  const isLast = index === adoptionRequest.length - 1;
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
                        <div className="flex flex-col">
                          <Typography variant="small" className="font-normal">
                            {item.name}
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="flex flex-col">
                          <Typography variant="small" className="font-normal">
                            {item.email}
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="flex flex-col">
                          <Typography variant="small" className="font-normal">
                            {item.phone}
                          </Typography>
                        </div>
                      </td>

                      <td className={classes}>
                        <div className="flex flex-col">
                          <Typography variant="small" className="font-normal">
                            {item.location}
                          </Typography>
                        </div>
                      </td>
                      <td className={classes}>
                        <div className="border-none ">
                          <select
                            name="status"
                            defaultValue={item.status || "Pending"}
                            onChange={(e) => handleAdoption(e, item._id)}
                            className="block  border-2 h-9 w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-teal-300 sm:text-sm/6"
                          >
                            <option disabled>Pending</option>

                            <option>Accept</option>
                            <option>Reject</option>
                          </select>
                        </div>
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

export default AdoptionRequest;
