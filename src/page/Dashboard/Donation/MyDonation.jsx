import React from "react";
import SectionsTitles from "../../shared/SectionTitles";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { useQuery } from "@tanstack/react-query";

import {
  Card,
  CardHeader,
  Typography,
  CardBody,
  Avatar,
} from "@material-tailwind/react";
import { format } from "date-fns";
import useAuth from "../../../hooks/useAuth";
const MyDonation = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments = [], refetch } = useQuery({
    queryKey: ["payments"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/allPayments/${user.email}`);
      return res.data;
    },
  });

  console.log(payments, "this is my payments");

  return (
    <div>
      <div className="container mx-auto my-10">
        <SectionsTitles
          heading={"My Donations"}
          subheading={"This is my Donations "}
        ></SectionsTitles>
        <div>
          <Card className="h-full w-full overflow-x-scroll">
            <CardHeader floated={false} shadow={false} className="rounded-none">
              <div className=" flex items-center justify-between gap-8">
                <div>
                  <Typography variant="h5">
                    My Payment List ({payments.length})
                  </Typography>
                  <Typography color="gray" className="mt-1 font-normal">
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
                        Name
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
                  {payments?.map((payment, index) => {
                    const isLast = index === payments?.length - 1;
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
                            <Avatar src={payment.petImage} alt={payment.petName} size="sm" />
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

export default MyDonation;
