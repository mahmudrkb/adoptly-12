import React from "react";
import { FaPhone } from "react-icons/fa";
import { MdEmail, MdLocationPin } from "react-icons/md";

const Contact = () => {
  return (
    <div className="bg-gray-100 ">
      <div id="contact" className=" container mx-auto p-3 py-20">
        <div className=" ">
          <div className=" ">
            <div className="text-center md:flex lg:text-left">
             <div className="">
             <h1 className="text-4xl font-bold">
                Get in <span className="text-teal-300">Touch</span>
              </h1>
              <p className="py-6 max-w-2xl">
                We'd love to hear from you! Whether you have questions,
                feedback, or just want to say hello, feel free to reach out. You
                can contact us via email, phone and What's app. Our team is here to assist you and will get back to
                you as soon as possible.
              </p>
             </div>
              <div className="grid md:grid-cols-2 gap-5 ">
                <a href="tel:+8801741715265">
                  <div
                    data-aos="flip-down"
                    data-aos-duration="500"
                    className=" bg-white  rounded-md shrink-0 hover:shadow-2xl text-center  p-3 "
                  >
                    <FaPhone className="text-4xl text-teal-300 mx-auto mb-3 " />
                    <p>01741715265</p>
                  </div>
                </a>

                <a href="mailto:rakib65rkb@gmail.com">
                  <div
                    data-aos="flip-up"
                    data-aos-duration="500"
                    className=" bg-white rounded-md shrink-0 hover:shadow-2xl text-center  p-3 "
                  >
                    <MdEmail className="text-4xl text-teal-300 mx-auto mb-3 " />{" "}
                    <p>rakib65rkb@gmail.com</p>
                  </div>
                </a>

                <a href="https://wa.me/qr/NKB5F2GVENP4F1" target="_blank">
                  <div
                    data-aos="flip-down"
                    data-aos-duration="1000"
                    className=" bg-white flex items-center mb-5 rounded-md shrink-0 hover:shadow-2xl text-center  p-3 "
                  >
                    {/* <FaWhatsapp className="text-4xl text-teal-300 mx-auto mb-3 " /> */}
                    <img
                      className="w-16  mx-auto"
                      src="https://i.ibb.co.com/LY2g87n/Screenshot-20250104-152020-Whats-App.jpg"
                      alt=""
                    />
                  </div>
                </a>
                <a
                  href="https://maps.app.goo.gl/easvHPgwvVQTWJFd6"
                  target="_blank"
                >
                  <div
                    data-aos="flip-up"
                    data-aos-duration="1000"
                    className=" bg-white   rounded-md shrink-0 hover:shadow-2xl text-center  p-3 "
                  >
                    <MdLocationPin className="text-4xl mt-1  text-teal-300 mx-auto  " />{" "}
                    <p className="">Dhaka, Bangladesh</p>
                  </div>
                </a>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
