import React from "react";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AdminHome = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: stats } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });

  console.log(stats);

  return (
    <div className="mt-5">
      <div className="text-3xl">
        {" "}
        Hi! Welcome
        <span className="">
          {" "}
          {user?.displayName ? user?.displayName : "Back"}
        </span>
      </div>
      {/* all data show this part  */}
      <div>
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl ">
            <dl className=" grid grid-cols-1 gap-4 gap-y-16 text-center lg:grid-cols-3">
              <div className="mx-auto  py-3 bg-orange-300 w-full rounded-md   flex max-w-xs flex-col gap-y-4">
                <dt className="text-base/7 text-gray-600 ">Total User</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{stats?.users}
                </dd>
              </div>
              <div className="mx-auto  py-3 bg-orange-300 w-full rounded-md   flex max-w-xs flex-col gap-y-4">
                <dt className="text-base/7 text-gray-600">Total pets </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {stats?.pets}
                </dd>
              </div>
              <div className="mx-auto  py-3 bg-orange-300 w-full rounded-md   flex max-w-xs flex-col gap-y-4">
                <dt className="text-base/7 text-gray-600">Total Donations</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl"> $  
                {stats?.totalDonation / 100}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminHome;
