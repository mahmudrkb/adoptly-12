import React from "react";
import {
  Avatar,
  Button,
  Card,
  CardBody,
  CardHeader,
  Typography,
} from "@material-tailwind/react";
// import Image from "next/image";

const Profile = () => {
    return (
        <div className='mt-16'>
           <div className='container mx-auto p-3'>
           <section className="container mx-auto px-8 py-10">
      <Card
        shadow={false}
        className=" rounded-2xl"
      >
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
            <Avatar className="-mt-20 lg:w-40 lg:h-40" src="https://docs.material-tailwind.com/img/face-2.jpg" size="xxl" alt="avatar" />
              <div>
                <Typography className=" text-2xl *:lg:text-4xl" color="blue-gray" variant="h6">
                  Emma Roberts
                </Typography>
                <Typography
                  variant="small"
                  className="font-normal text-gray-600"
                >
                  emma.roberts@mail.com
                </Typography>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <Button
                variant="outlined"
                className="border-gray-300 flex items-center gap-2"
              >
                <i className="fa fa-github text-base" />
                Github
              </Button>
              <Button
                variant="outlined"
                className="border-gray-300 flex items-center gap-2"
              >
                <i className="fa-brands fa-twitter" />
                Twitter
              </Button>
              <Button
                variant="outlined"
                className="border-gray-300 flex items-center gap-2"
              >
                <i className="fa-brands fa-medium" />
                Medium
              </Button>
            </div>
          </div>
          <Typography
            variant="small"
            className="font-normal text-gray-600 mt-10"
          >
            Passionate UI/UX designer focused on creating intuitive and engaging
            digital experiences.  Driven by design thinking, creativity,
            and a love for problem-solving.jjjjjjj
          </Typography>
        </CardBody>
      </Card>
    </section>

           </div>
        </div>
    );
};

export default Profile;