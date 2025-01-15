import cat from "../../assets/cat.jpg";
import dog from "../../assets/dog.jpg";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Button,
} from "@material-tailwind/react";

const CallToAction = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="">
      <div className="container mx-auto py-20 p-3">
        <div className="max-w-2xl ">
          <Card className=" bg-teal-300 border-2 border-orange-100  md:flex-row">
            <CardHeader
              shadow={false}
              floated={false}
              className="m-0 md:w-2/5 shrink-0 md:rounded-r-none"
            >
              <img
                src={cat}
                alt="card-image"
                className="h-full w-full object-cover"
              />
            </CardHeader>
            <CardBody>
              <Typography variant="h4" color="blue-gray" className="mb-2">
                Every Pet Deserves a Loving Home
              </Typography>
              <Typography color="gray" className="mb-8 font-normal">
                Imagine the wagging tail of a dog or the soft purr of a cat that
                has found its forever family. By adopting a pet, you’re not just
                giving them a home you’re giving them a second chance at life
                filled with love, warmth, and care.
              </Typography>
              <Button
                onClick={() => scrollToSection("contact")}
                variant="text"
                className="   transition duration-300 flex items-center gap-2
                           hover:bg-orange-100 hover:text-gray-700 "
              >
                Contact Us
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Button>
            </CardBody>
          </Card>
        </div>
        <div className=" mt-10 flex  md:justify-end  ">
          <Card className=" bg-teal-300 border-2  max-w-2xl border-orange-100  flex-col-reverse md:flex-row">
            <CardBody>
              <Typography variant="h4" color="blue-gray" className="mb-2">
                Bring joy to their lives and find unconditional love in yours.
              </Typography>
              <Typography color="gray" className="mb-8 font-normal">
                Pets are more than just companions; they become a part of your
                family. They greet you with enthusiasm, comfort you in tough
                times, and bring endless laughter and happiness into your life.
                Every adoption story is unique, and yours could be the next to
                make a difference.
              </Typography>
              <Button 
              onClick={() => scrollToSection("contact")}
                variant="text"
                className="  transition duration-300 flex items-center gap-2
                           hover:bg-orange-100 hover:text-gray-700 "
              >
                Contact Us
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Button>
            </CardBody>
            <CardHeader
              shadow={false}
              floated={false}
              className="m-0 md:w-2/5 shrink-0 md:rounded-l-none"
            >
              <img
                src={dog}
                alt="card-image"
                className="h-full w-full object-cover"
              />
            </CardHeader>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
