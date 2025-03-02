import React from "react";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";





import { PieChart, Pie,  Cell,BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,  } from 'recharts';
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];



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
  const { data: allPayments = [],  } = useQuery({
      queryKey: ["allPayments"],
      queryFn: async () => {
        const res = await axiosSecure.get("/allPayments");
        return res.data;
      },
    });

  const { data: pets = [], refetch } = useQuery({
    queryKey: ["pets"],
    queryFn: async () => {
      const res = await axiosSecure.get("/allPets");
      return res.data;
    },

  });
  const count = pets.reduce((acc,pet ) => {
    acc[pet.category] = (acc[pet.category] || 0) + 1;
    return acc;
  }, {});

  // Convert to PieChart-compatible format
  const pieChartData = Object.entries(count).map(([key, value]) => ({
    name: key,
    value: value,
  }));

//   console.log(stats);
const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

  return (
    <div className=" pt-3 lg:pt-10 dark:bg-blue-gray-900 ">
      <div className="text-3xl  md:pl-5 lg:text-5xl dark:text-white">
        {" "}
        Hi! Welcome
        <div className="">
          {" "}
          {user?.displayName ? user?.displayName : "Back"}
        </div>
      </div>
      {/* all data show this part  */}
      <div>
        <div className=" dark:bg-blue-gray-900 py-8 lg:py-16 ">
          <div className="mx-auto max-w-7xl ">
            <dl className=" grid grid-cols-1 gap-4  gap-y-8 lg:gap-y-16 text-center lg:grid-cols-3">
              <div className="mx-auto  py-3 bg-gradient-to-r from-orange-300  to-teal-300  w-full rounded-md   flex max-w-xs flex-col gap-y-4">
           
                <dt className="text-base/7 text-gray-600 "> Total User</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">{stats?.users}
                </dd>
              </div>
              <div className="mx-auto  py-3 bg-gradient-to-t from-orange-300  to-teal-300  w-full rounded-md   flex max-w-xs flex-col gap-y-4">
                <dt className="text-base/7 text-gray-600">Total pets </dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                  {stats?.pets}
                </dd>
              </div>
              <div className="mx-auto  py-3 bg-gradient-to-l from-orange-300  to-teal-300  w-full rounded-md   flex max-w-xs flex-col gap-y-4">
                <dt className="text-base/7 text-gray-600">Total Donations</dt>
                <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl"> $  
                {stats?.totalDonation / 100}
                </dd>
              </div>
            </dl>
          </div>

        </div>
      </div>
      {/* graph data show */}
      <div className="lg:flex justify-between mb-10">

     <div className=" mt-4 w-full h-[450px] ">
     <ResponsiveContainer width="100%" height="100%">
     <PieChart className="" >
      
          <Pie
            data={pieChartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={130}
            fill="#8884d8"
            dataKey="value"
            
          >
            {pieChartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend></Legend>
        </PieChart>
  </ResponsiveContainer>
        
     </div>
     {/* graph  */}
     <div className=" mt-4 w-full h-[300px] md:h-[400px] lg:h-[500px] ">
     <ResponsiveContainer width="100%" height="100%">
        <BarChart
        className=""
         
          data={allPayments}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="petName" />
          <YAxis dataKey="price" />
          <Tooltip />
          <Legend />
          <Bar dataKey="price" fill="#8884d8" activeBar={<Rectangle fill="pink" stroke="blue" />} />
         
        </BarChart>
        </ResponsiveContainer>
 


     </div>

      </div>
    </div>
  );
};

export default AdminHome;
