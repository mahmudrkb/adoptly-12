import React from "react";
import useAuth from "../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { PieChart, Pie,  Cell,BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,  } from 'recharts';
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
const UserHome = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: payments = [], } = useQuery({
       queryKey: ["payments"],
       queryFn: async () => {
         const res = await axiosSecure.get(`/allPayments/${user.email}`);
         return res.data;
       },
     });
  
    const { data: pets = [], refetch } = useQuery({
      queryKey: ["pets"],
      queryFn: async () => {
        const res = await axiosSecure.get(`/addedPets/${user.email}`);
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
    <div className="container mx-auto">
       <div className="text-3xl  md:pl-5 lg:text-5xl dark:text-white">
        {" "}
        Hi! Welcome
        <div className="">
          {" "}
          {user?.displayName ? user?.displayName : "Back"}
        </div>
      </div>
      {/* graph data show */}
      <div className="  lg:flex justify-between mb-10">
        <div className="mt-4 w-full h-[450px]  ">
         
             <ResponsiveContainer width="100%" height="100%">
          <PieChart   >
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
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend></Legend>
          </PieChart>
          </ResponsiveContainer>
       
        </div>
        {/* graph  */}
        <div className=" mt-4 w-full h-[300px] md:h-[400px] lg:h-[500px]">
        <ResponsiveContainer
         width="100%" height="100%">
          <BarChart
          
            data={payments}
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
            <Bar
              dataKey="price"
              fill="#8884d8"
              activeBar={<Rectangle fill="pink" stroke="blue" />}
            />
          </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default UserHome;
