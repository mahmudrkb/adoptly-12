import { Typography } from "@material-tailwind/react"
import logo from "../../assets/logo.png"

const Footer = () => {
  return (
    <div className="bg-gray-700 " >
      <footer className="w-full  container mx-auto   p-3">
        <div className="flex flex-row flex-wrap text-white items-center justify-center gap-y-6 gap-x-12 text-center md:justify-between">
          <img
            src={logo}
            alt="logo-ct"
            className="w-16"
          />
          <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
            <li>
              <Typography
                as="a"
                href="#"
              
                className="font-normal transition-colors hover:text-teal-300 focus:text-teal-300"
              >
                About Us
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="#"
             
                className="font-normal transition-colors hover:text-teal-300 focus:text-teal-300"
              >
                License
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="#"
             
                className="font-normal transition-colors hover:text-teal-300 focus:text-teal-300"
              >
                Contribute
              </Typography>
            </li>
            <li>
              <Typography
                as="a"
                href="#"
             
                className="font-normal transition-colors hover:text-teal-300 focus:text-teal-300"
              >
                Contact Us
              </Typography>
            </li>
          </ul>
        </div>
        <hr className="my-8 border-blue-gray-50" />
        <Typography color="blue-gray" className="text-center font-normal">
          &copy; 2023 Material Tailwind
        </Typography>
      </footer>
    </div>
  );
};

export default Footer;
