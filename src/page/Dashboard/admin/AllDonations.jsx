import React from "react";
import SectionsTitles from "../../shared/SectionTitles";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";
import { PencilIcon } from "@heroicons/react/24/solid";
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
import { format } from "date-fns";
const AllDonations = () => {
  const axiosSecure = useAxiosSecure();

  const { data: allPayments = [], refetch } = useQuery({
    queryKey: ["allPayments"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allPayments");
      return res.data;
    },
  });
  console.log(allPayments);

  return (
    <div >
      <div className="container mx-auto my-10">
        <SectionsTitles
          heading={"All Donations"}
          subheading={"This is all Donations "}
        ></SectionsTitles>
        <div>
          <Card className="h-full w-full dark:text-white dark:bg-blue-gray-800 p-3 overflow-x-scroll">
            <CardHeader floated={false} shadow={false} className="rounded-none">
              <div className=" flex items-center dark:text-white dark:bg-blue-gray-800 justify-between gap-8">
                <div>
                  <Typography variant="h5">
                    All Donations List ({allPayments.length})
                  </Typography>
                  <Typography color="gray" className="mt-1 dark:text-gray-300 font-normal">
                    See information about all Payments
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
                        Pet Name
                      </Typography>
                    </th>
                    <th className="border-y border-blue-gray-100  p-4">
                      <Typography
                        variant="small"
                        className="font-normal leading-none "
                      >
                        Donar Name
                      </Typography>
                    </th>
                    <th className="border-y border-blue-gray-100  p-4">
                      <Typography
                        variant="small"
                        className="font-normal leading-none "
                      >
                        Taka
                      </Typography>
                    </th>

                    <th className="border-y border-blue-gray-100  p-4">
                      <Typography
                        variant="small"
                        className="font-normal leading-none "
                      >
                        {" "}
                        Date{" "}
                      </Typography>
                    </th>
                    <th className="border-y border-blue-gray-100  p-4">
                      <Typography
                        variant="small"
                        className="font-normal leading-none "
                      >
                        {" "}
                        Donation Id{" "}
                      </Typography>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {allPayments?.map((payment, index) => {
                    const isLast = index === allPayments?.length - 1;
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
                              src={payment.petImage}
                              alt={payment.petName}
                              size="sm"
                            />
                            <div className="flex flex-col">
                              <Typography
                                variant="small"
                                className="font-normal"
                              >
                                {payment.petName}
                              </Typography>
                            </div>
                          </div>
                        </td>

                        <td className={classes}>
                          <div className="flex flex-col">
                            <Typography variant="small" className="font-normal">
                              {payment.name}
                            </Typography>
                          </div>
                        </td>
                        <td className={classes}>
                          <div className="flex flex-col">
                            <Typography variant="small" className="font-normal">
                              $ {payment.price}
                            </Typography>
                          </div>
                        </td>

                        <td className={classes}>
                          <div className="flex flex-col">
                            <Typography variant="small" className="font-normal">
                              {payment.date &&
                                format(
                                  new Date(payment.date),
                                  "MMMM dd, yyyy hh:mm"
                                )}
                            </Typography>
                          </div>
                        </td>
                        <td className={classes}>
                          <div className="flex flex-col">
                            <Typography variant="small" className="font-normal">
                              {payment.donationId}
                            </Typography>
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
    </div>
  );
};

export default AllDonations;
