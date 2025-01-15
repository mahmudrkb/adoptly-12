import React from "react";

const Contact = () => {
  return (
    <div>
      <div id="contact" className="">
        <div className="hero bg-base-200 py-5 min-h-screen">
          <div className="hero-content flex-col lg:flex-row">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl font-bold">
                Get in <span className="text-purple-700">Touch</span>
              </h1>
              <p className="py-6 max-w-2xl">
                We'd love to hear from you! Whether you have questions,
                feedback, or just want to say hello, feel free to reach out. You
                can contact us via email, phone, or by filling out the contact
                form below. Our team is here to assist you and will get back to
                you as soon as possible.
              </p>
              <div className="grid md:grid-cols-2 gap-5 ">
                <a href="tel:+8801741715265">
                  <div
                    data-aos="flip-down"
                    data-aos-duration="500"
                    className=" bg-white  rounded-md shrink-0 hover:shadow-2xl text-center  p-3 "
                  >
                    <FaPhone className="text-4xl text-purple-700 mx-auto mb-3 " />
                    <p>01741715265</p>
                  </div>
                </a>

                <a href="mailto:rakib65rkb@gmail.com">
                  <div
                    data-aos="flip-up"
                    data-aos-duration="500"
                    className=" bg-white rounded-md shrink-0 hover:shadow-2xl text-center  p-3 "
                  >
                    <MdEmail className="text-4xl text-purple-700 mx-auto mb-3 " />{" "}
                    <p>rakib65rkb@gmail.com</p>
                  </div>
                </a>

                <a href="https://wa.me/qr/NKB5F2GVENP4F1" target="_blank">
                  <div
                    data-aos="flip-down"
                    data-aos-duration="1000"
                    className=" bg-white flex items-center mb-5 rounded-md shrink-0 hover:shadow-2xl text-center  p-3 "
                  >
                    {/* <FaWhatsapp className="text-4xl text-purple-700 mx-auto mb-3 " /> */}
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
                    <MdLocationPin className="text-4xl mt-1  text-purple-700 mx-auto  " />{" "}
                    <p className="">Dhaka, Bangladesh</p>
                  </div>
                </a>
              </div>
            </div>
            <div className="card  w-full max-w-sm shrink-0 shadow-2xl">
              <form onSubmit={onSubmitFrom} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Name</span>
                  </label>
                  <input
                    name="name"
                    type="text"
                    placeholder="Your Name"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    name="email"
                    type="email"
                    placeholder="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Text Area</span>
                  </label>
                  <textarea
                    type="text"
                    name="message"
                    className="input pt-3 input-bordered"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>

                <div className="form-control mt-6">
                  <button
                    type="submit"
                    className="text-sm  hover:text-purple-500  font-bold  py-2 px-3   gap-1 text-white rounded-md bg-purple-950"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
