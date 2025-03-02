import React from "react";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
import useAuth from "../../hooks/useAuth";
import useAdmin from "../../hooks/useAdmin";
// import Image from "next/image";

const Profile = () => {
  const { user } = useAuth();
  const [isAdmin] = useAdmin();
  return (
    <div className="">
      <div className="container mx-auto p-3">
        <section className="container mx-auto px-8 py-10">
          <Card shadow={false} className=" rounded-2xl">
            <CardHeader shadow={false} className="lg:h-72 !rounded-lg">
              <img
                src="https://i.ibb.co.com/zHVX54mL/360-F-1000821370-0o-Bj-Qg-Dm-OOsbt-HA8-ZDri-X0-BN9-Dc-VWQOi.jpg"
                alt="dark"
                height={1024}
                width={1024}
                className="w-full h-full object-cover"
              />
            </CardHeader>
            <CardBody className="   ">
              <div className="flex lg:pl-24  border-b pb-7 border-gray-500  lg:gap-0 gap-6 flex-wrap justify-between items-center">
                <div className="lg:flex items-center gap-3">
                  <Avatar
                    className="-mt-20 lg:w-40 lg:h-40"
                    src={user?.photoURL}
                    size="xxl"
                    alt="avatar"
                  />
                   
                  <div>
                    <Typography
                      className=" text-2xl *:lg:text-4xl"
                      color="blue-gray"
                      variant="h6"
                    >
                     {user?.displayName}
                    </Typography>
                    <Typography
                      variant="small"
                      className="font-normal text-gray-600"
                    >
                     {user?.email}
                    </Typography>
                    <button className=" bg-green-100 text-sm text-green-700 px-2 py rounded-md">
                    {isAdmin ? "Admin": "User"}
                   </button>
                  </div>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  
                  <a href="https://github.com" target="_blank">
                    {" "}
                    <Button
                      variant="outlined"
                      className="border-gray-300 flex items-center gap-2"
                    >
                      <i className="fa fa-github text-base" />
                      Github
                    </Button>
                  </a>
                  <a href="https://x.com" target="_blank">
                    <Button
                      variant="outlined"
                      className="border-gray-300 flex items-center gap-2"
                    >
                      <i className="fa-brands fa-twitter" />
                      Twitter
                    </Button>
                  </a>
                </div>
              </div>
              <Typography
                variant="small"
                className="font-normal text-gray-600 mt-10"
              ></Typography>
            </CardBody>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Profile;
