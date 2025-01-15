import { Typography } from "@material-tailwind/react";
import logo from "../../assets/logo.png";
import { FaFacebook, FaLinkedin, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const scrollToSection = (id) => {
    document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className="bg-gray-900 ">
      <footer className="w-full py-10 container mx-auto   p-3">
        <div className=" text-white md:flex justify-between gap-10 ">
          <div className="max-w-md ">
            <img src={logo} alt="logo-ct" className="w-16" />
            <p>
              We believe every pet deserves a loving home. Whether you're
              looking for a loyal companion or a playful friend, we're here to
              help. Let's give every pet the chance to be loved. Together, we
              can make a difference.
            </p>
          </div>
         <div className=" mt-10 ">
         <ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
            <li onClick={() => scrollToSection("about")}>
              <Typography
                as="a"
                className="font-normal transition-colors hover:text-teal-300 focus:text-teal-300"
              >
                About Us
              </Typography>
            </li>

            <li onClick={() => scrollToSection("faq")}>
              <Typography
                as="a"
                className="font-normal transition-colors hover:text-teal-300 focus:text-teal-300"
              >
                FAQ
              </Typography>
            </li>
            <li onClick={() => scrollToSection("contact")}>
              <Typography
                as="a"
                className="font-normal transition-colors hover:text-teal-300 focus:text-teal-300"
              >
                Contact Us
              </Typography>
            </li>
          </ul>
          <div className=" flex md:justify-between mt-5 md:mt-10 gap-x-8">
            <a href="https://www.facebook.com" target="block">
            <FaFacebook className="size-7 hover:text-blue-600"></FaFacebook>
            </a>
         <a href="https://www.youtube.com" target="block"> <FaYoutube className="size-7 hover:text-red-600" ></FaYoutube></a>
         <a href=" https://www.linkedin.com" target="block"> <FaLinkedin className="size-7 hover:text-blue-600" ></FaLinkedin>
         </a>
         </div>
         </div>
        </div>
        <hr className="my-8 border-blue-gray-50" />
        <Typography className="text-teal-300 text-center font-normal">
          &copy; 2025 Adoptly.LTD
        </Typography>
      </footer>
    </div>
  );
};

export default Footer;
