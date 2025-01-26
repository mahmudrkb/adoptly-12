import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import signup from "../../assets/json/signup.json";
import Lottie from "lottie-react";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import google from "../../assets/img/search.png";
import github from "../../assets/img/github.png";
import useAxiosPublic from "./../../hooks/useAxiosPublic";

const Register = () => {
  const { createUser, setUser, googleSignIn, githubSignin, updateUserProfile } =
    useAuth();
  const navigate = useNavigate();

  const axiosPublic = useAxiosPublic();

  const handleSignin = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;

    const addUser = axiosPublic.post("/add-user", {
      name,
      email,
      photo,
      role: "user",
    });

    createUser(email, password)
      .then((result) => {
        updateUserProfile(name, photo);
        setUser({ ...result.user, photoURL: photo, displayName: name });
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Signup Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        // console.log(result.user);
        setUser(result.user);
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.message} Try Again`,
        });
      });
  };
  const handleGoogleLogin = () => {
    googleSignIn()
      .then((result) => {
        const userInfo = {
          name: result.user?.displayName,
          email: result.user?.email,
          photo: result.user?.photoURL,
          role: "user",
        };
        axiosPublic.post("/add-user", userInfo).then((result) => {
          // console.log(result.data, "user added");
          navigate("/");
        });
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Login Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.message} Try Again`,
        });
      });
  };

  const handleGithubLogin = () => {
    githubSignin()
      .then(() => {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Login Successful",
          showConfirmButton: false,
          timer: 1500,
        });
        navigate("/");
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.message} Try Again`,
        });
      });
  };

  return (
    <div className="container mx-auto p-3 my-5 ">
      <Link to={"/"} className="flex hover:text-teal-300 items-center  gap-3">
        <FaArrowLeft></FaArrowLeft>Back to Home{" "}
      </Link>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6  lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img alt="Your Company" src={logo} className="mx-auto h-20 w-auto" />
          <h2 className="my-5 text-center text-2xl/9 font-bold tracking-tight text-gray-800">
            <span className="text-teal-300"> Sign Up</span> To Your Account
          </h2>
        </div>

        <div className=" lg:flex  ">
          <div className="">
            <Lottie className=" " animationData={signup} loop={true} />
          </div>
          <div className="p-7  shrink-md rounded-md shadow-md sm:mx-auto sm:w-full sm:max-w-sm">
            <form onSubmit={handleSignin} method="POST" className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm/6 font-medium text-gray-800"
                >
                  Name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-teal-300 sm:text-sm/6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="photo"
                  className="block text-sm/6 font-medium text-gray-800"
                >
                  Photo URL
                </label>
                <div className="mt-2">
                  <input
                    id="photo"
                    name="photo"
                    type="URL"
                    required
                    autoComplete="email"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-teal-300 sm:text-sm/6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm/6 font-medium text-gray-800"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-teal-300 sm:text-sm/6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm/6 font-medium text-gray-800"
                  >
                    Password
                  </label>
                  {/* <div className="text-sm">
                  <a
                    href="#"
                    className="font-semibold text-indigo-600 hover:text-indigo-500"
                  >
                    Forgot password?
                  </a>
                </div> */}
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    required
                    autoComplete="current-password"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-teal-300 sm:text-sm/6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-teal-300 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-orange-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300"
                >
                  Sign in
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm/6 text-gray-500">
              Don't have an account?
              <Link
                to={"/login"}
                className="font-semibold text-teal-300 hover:text-orange-100"
              >
                SIGNUP
              </Link>
            </p>
            <div className="mt-7 flex gap-3 items-center ">
              <button
                onClick={handleGoogleLogin}
                className="flex items-center gap-3 w-full justify-center rounded-md bg-teal-300 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-orange-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300"
              >
                <img className="size-4" src={google} alt="" />
                <p>Google</p>
              </button>

              <button
                onClick={handleGithubLogin}
                className="flex items-center gap-3 w-full justify-center rounded-md bg-teal-300 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-orange-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300"
              >
                <img className="size-4" src={github} alt="" />
                <p>Github</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
