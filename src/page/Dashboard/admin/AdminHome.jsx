import React from "react";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";





import { PieChart, Pie,  Cell,BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend,  } from 'recharts';
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];


const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
]
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
    <div className="pt-10 dark:bg-blue-gray-900 ">
      <div className="text-3xl lg:text-5xl dark:text-white">
        {" "}
        Hi! Welcome
        <span className="">
          {" "}
          {user?.displayName ? user?.displayName : "Back"}
        </span>
      </div>
      {/* all data show this part  */}
      <div>
        <div className="bg-white dark:bg-blue-gray-900 py-16 ">
          <div className="mx-auto max-w-7xl ">
            <dl className=" grid grid-cols-1 gap-4 gap-y-16 text-center lg:grid-cols-3">
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
      <div className="flex justify-between mb-10">

     <div className="">
     <PieChart className=" " width={400} height={400}>
          <Pie
            data={pieChartData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            
          >
            {pieChartData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Legend></Legend>
        </PieChart>
        
     </div>
     {/* graph  */}
     <div className="">
    
        <BarChart
          width={600}
          height={400}
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
 


     </div>

      </div>
    </div>
  );
};

export default AdminHome;
