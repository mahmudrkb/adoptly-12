import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import SectionsTitles from "../../shared/SectionTitles";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

// TODO
// import.meta.env.VITE_IMAGE_HOSTING_API_KEY
const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_API_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

// console.log("this is code",image_hosting_key)

const AddDonation = () => {
  const tomorrowDate = new Date();
  tomorrowDate.setDate(tomorrowDate.getDate() + 1);
  const formattedTomorrowDate = tomorrowDate.toISOString().split("T")[0];

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const onSubmit = async (data) => {
    // console.log(data);
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    // console.log(res.data);
    if (res.data.success) {
      const donation = {
        name: data.name,
        maxAmount: data.maxAmount,
        lastDate: data.lastDate,
        shortDescription: data.shortDescription,
        longDescription: data.longDescription,
        image: res.data.data.display_url,
        donOwnerEmail: user.email,
        startDate: new Date().toISOString(),
      };
      //   console.log(donation);

      const addDonation = await axiosSecure.post("/add-donation", donation);

      // console.log(addDonation.data);

      if (addDonation.data.insertedId) {
        Swal.fire({
          position: "top-center",
          icon: "success",
          title: "Donation added successfully",
          showConfirmButton: false,
          timer: 1500,
        });
        reset();
      }
    }
  };
  return (
    <div className=" container mx-auto my-10">
      <SectionsTitles
        heading={"Donation Campaign"}
        subheading={"Add new donation campaign"}
      ></SectionsTitles>
      <div className="p-7 bg-blue-gray-50 shrink-md rounded-md shadow-md sm:mx-auto sm:w-full sm:max-w-3xl">
        <form
          onSubmit={handleSubmit((data) => {
            onSubmit(data);
          })}
          className="space-y-4"
        >
          <div className="w-full">
            <label className=" text-sm/6 font-semibold text-gray-800">
              Name
            </label>
            <div className="mt-2">
              <input
                {...register("name", {
                  required: "Donation Campaign name is required",
                  minLength: {
                    value: 3,
                    message: "Name must be at least 3 characters",
                  },
                })}
                className="w-full border-2 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-teal-300 sm:text-sm/6"
              />
              {errors.name && (
                <div className="  text-red-500 text-sm">
                  {errors.name.message}
                </div>
              )}
            </div>
          </div>
          <div className="flex gap-5 ">
            <div className="w-full">
              <label className="block text-sm/6 font-semibold text-gray-800">
                Maximum Donation Amount
              </label>
              <div className="mt-2">
                <input
                  type="number"
                  {...register("maxAmount", {
                    required: " Donation  amount  is required",
                    min: { value: 0, message: "Amount cannot be negative" },
                    max: {
                      value: 10000,
                      message: "You can donate maximum 10000",
                    },
                  })}
                  className="block  border-2 w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-teal-300 sm:text-sm/6"
                />
                {errors.maxAmount && (
                  <div className="  text-red-500 text-sm">
                    {errors.maxAmount.message}
                  </div>
                )}
              </div>
            </div>
            <div className="w-full">
              <label className=" text-sm/6 font-semibold text-gray-800">
                Last Date Of Donation
              </label>
              <div className="mt-2">
                <input
                  type="date"
                  min={formattedTomorrowDate}
                  defaultValue={formattedTomorrowDate}
                  {...register("lastDate", {
                    required: "Last date of donation  is required",
                    min: {
                      value: formattedTomorrowDate,
                      message: "Please select a valid date.",
                    },
                  })}
                  className="w-full border-2 rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-teal-300 sm:text-sm/6"
                />
                {errors.lastDate && (
                  <div className="  text-red-500 text-sm">
                    {errors.lastDate.message}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="w-full">
            <label className="block text-sm/6 font-semibold text-gray-800">
              Short Description{" "}
            </label>
            <div className="mt-2">
              <input
                {...register("shortDescription", {
                  required: "Short description is required",
                  minLength: {
                    value: 10,
                    message: "Description must be at least 10 characters",
                  },
                })}
                className="block  border-2 w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-teal-300 sm:text-sm/6"
              />
              {errors.shortDescription && (
                <div className="text-red-500 text-sm">
                  {errors.shortDescription.message}
                </div>
              )}
            </div>
          </div>
          <div class="">
            <div class="relative w-full min-w-[200px]">
              <textarea
                {...register("longDescription", {
                  required: "Detailed description is required",
                  minLength: {
                    value: 20,
                    message: "Description must be at least 20 characters",
                  },
                })}
                class="peer bg-white h-full min-h-[100px] focus:outline-teal-300 w-full resize-none rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:border-t-transparent focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50"
                placeholder=" "
              ></textarea>
              {errors.longDescription && (
                <div className="text-red-500 text-sm">
                  {errors.longDescription.message}
                </div>
              )}
              <label class="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full focus:outline-teal-300 select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 text-sm peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-gray-900 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 text-sm">
                Long Description
              </label>
            </div>
          </div>

          <div className="">
            <label className="block text-sm/6 font-semibold text-gray-800">
              Image{" "}
            </label>
            <div className="mt-2">
              <input
                type="file"
                accept="image/*"
                {...register("image", { required: "Pet image is required" })}
              />
              {errors.image && (
                <div className="text-red-500 text-sm">
                  {errors.image.message}
                </div>
              )}
            </div>
          </div>

          <button
            type="submit"
            className="flex w-full justify-center rounded-md bg-teal-300 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-orange-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-teal-300"
          >
            {" "}
            Add Donation Campaign{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddDonation;
