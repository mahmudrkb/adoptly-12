import React from "react";
import SectionsTitles from "./../shared/SectionTitles";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
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
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import useAuth from './../../hooks/useAuth';

const TABLE_ROWS = [
  {
    img: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/team-3.jpg",
    name: "John Michael",
    email: "john@creative-tim.com",
    job: "Manager",
    org: "Organization",
    online: true,
    date: "23/04/18",
  },
];




const MyPets = () => {

  
const {user}=useAuth()

const axiosPublic = useAxiosPublic();

const { data: pets = [], refetch } = useQuery({
  queryKey: ["pets"],
  queryFn: async () => {
    const res = await axiosPublic.get(`/addedPets/${user.email}`);
    return res.data;
  },
});

console.log("this is all my added pets", pets);

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
                <Typography variant="h5" color="blue-gray">
                  All Pets list
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
                <tr>
                  <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      #
                    </Typography>
                  </th>
                  <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      Name
                    </Typography>
                  </th>
                  <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      Category
                    </Typography>
                  </th>
                  <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      Status
                    </Typography>
                  </th>
                  <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    >
                      Date
                    </Typography>
                  </th>

                  <th className="border-y border-blue-gray-100 bg-blue-gray-50/50 p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none opacity-70"
                    ></Typography>
                  </th>
                </tr>
              </thead>
              <tbody>
                {TABLE_ROWS?.map(
                  ({ img, name, email, job, org, online, date }, index) => {
                    const isLast = index === TABLE_ROWS.length - 1;
                    const classes = isLast
                      ? "p-4"
                      : "p-4 border-b border-blue-gray-50";

                    return (
                      <tr key={name}>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {index + 1}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <div className="flex items-center gap-3">
                            <Avatar src={img} alt={name} size="sm" />
                            <div className="flex flex-col">
                              <Typography
                                variant="small"
                                color="blue-gray"
                                className="font-normal"
                              >
                                {name}
                              </Typography>
                            </div>
                          </div>
                        </td>
                        <td className={classes}>
                          <div className="flex flex-col">
                            <Typography
                              variant="small"
                              color="blue-gray"
                              className="font-normal"
                            >
                              {job}
                            </Typography>
                          </div>
                        </td>
                        <td className={classes}>
                          <div className="w-max">
                            <Chip
                              variant="ghost"
                              size="sm"
                              value={online ? "online" : "offline"}
                              color={online ? "green" : "blue-gray"}
                            />
                          </div>
                        </td>

                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {date}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Tooltip content="Adopted ">
                            <IconButton variant="text">
                              <MdAddTask className="h-4 w-4" />
                            </IconButton>
                          </Tooltip>
                          <Tooltip content="Edit Pets">
                            <IconButton variant="text">
                              <PencilIcon className="h-4 text-green-600  w-4" />
                            </IconButton>
                          </Tooltip>

                          <Tooltip content="Delete">
                            <IconButton variant="text">
                              <MdDeleteOutline className="h-4 text-red-600 w-4" />
                            </IconButton>
                          </Tooltip>
                        </td>
                      </tr>
                    );
                  }
                )}
              </tbody>
            </table>
          </CardBody>
          <CardFooter className="flex items-center justify-between border-t border-blue-gray-50 p-4">
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal"
            >
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
