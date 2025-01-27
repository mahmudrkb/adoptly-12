import {
  Card,
  CardHeader,
  Typography,
  CardBody,
  Avatar,
} from "@material-tailwind/react";

import useAxiosSecure from "../../../hooks/useAxiosSecure";
import SectionsTitles from "../../shared/SectionTitles";
import { useQuery } from "@tanstack/react-query";
import Swal from "sweetalert2";

const AllUser = () => {
  const axiosSecure = useAxiosSecure();

  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allUsers");
      return res.data;
    },
  });

  const handleAdoption = (e, id) => {
    const data = { role: e.target.value };

    axiosSecure.patch(`/userRoll/${id}`, data).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        Swal.fire({
          title: "User Roll Updated",
          icon: "success",
          draggable: true,
        });
        refetch();
      }
    });
  };

  // console.log(users);
  return (
    <div>
      <div className="container mx-auto my-10">
        <SectionsTitles
          heading={"All Users"}
          subheading={"This is all Users"}
        ></SectionsTitles>
        <div>
          <Card className="h-full w-full overflow-x-scroll">
            <CardHeader floated={false} shadow={false} className="rounded-none">
              <div className=" flex items-center justify-between gap-8">
                <div>
                  <Typography variant="h5">
                    My Users List ({users.length})
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
                        Email
                      </Typography>
                    </th>

                    <th className="border-y border-blue-gray-100  p-4">
                      <Typography
                        variant="small"
                        className="font-normal leading-none "
                      >
                        {" "}
                        Action{" "}
                      </Typography>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {users?.map((user, index) => {
                    const isLast = index === users?.length - 1;
                    const classes = isLast
                      ? "p-4"
                      : "p-4 border-b border-blue-gray-50";
                    return (
                      <tr>
                        <td className={classes}>
                          <Typography variant="small" className="font-normal">
                            {index + 1}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <div className="flex items-center gap-3">
                            <Avatar
                              src={user.photo}
                              alt={user.name}
                              size="sm"
                            />
                            <div className="flex flex-col">
                              <Typography
                                variant="small"
                                className="font-normal"
                              >
                                {user.name}
                              </Typography>
                            </div>
                          </div>
                        </td>
                        <td className={classes}>
                          <div className="flex flex-col">
                            <Typography variant="small" className="font-normal">
                              {user.email}
                            </Typography>
                          </div>
                        </td>

                        <td className={classes}>
                          <Typography variant="small" className="font-normal">
                            {" "}
                            <select
                              name="status"
                              defaultValue={user.role}
                              onChange={(e) => handleAdoption(e, user._id)}
                              className="block  border-2 h-9 w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-teal-300 sm:text-sm/6"
                            >
                             
                              <option>User</option>
                              <option>Admin</option>
                            </select>
                          </Typography>
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
    </div>
  );
};

export default AllUser;
