import cat from "../../assets/img/cat.png";
import dog from "../../assets/img/dog.png";
import rabbit from "../../assets/img/rabbit1.png";
import fish from "../../assets/img/fish.png";

const Categories = () => {
  return (
    <div className="flex justify-center    pt-10 lg:-mt-20   dark:bg-blue-gray-900">
      <div className="grid grid-cols-2 dark:bg-blue-gray-900  lg:grid-cols-4 gap-5">
        <div className="flex-col  bg-teal-300 lg:bg-white border-2 lg:dark:bg-blue-gray-900  border-orange-100 p-5 rounded-md items-center">
          <img className="size-20 mx-auto" src={cat} alt="" />
          <h3 className="text-center mt-4 dark:text-white  text-gray-800 font-semibold text-xl ">
            Cats
          </h3>
        </div>
        <div className="flex-col lg:dark:bg-blue-gray-900 bg-teal-300 lg:bg-white border-2 border-orange-100 p-5 rounded-md items-center">
          <img className="size-20 mx-auto" src={dog} alt="" />
          <h3 className="text-center mt-4 dark:text-white  text-gray-800 font-semibold text-xl ">
            Dogs
          </h3>
        </div>
        <div className="flex-col lg:dark:bg-blue-gray-900 bg-teal-300 lg:bg-white border-2 border-orange-100 p-5 rounded-md items-center">
          <img className="size-20 mx-auto" src={fish} alt="" />
          <h3 className="text-center mt-4 dark:text-white  text-gray-800 font-semibold text-xl ">
            Fish
          </h3>
        </div>
        <div className="flex-col lg:dark:bg-blue-gray-900 bg-teal-300 lg:bg-white border-2 border-orange-100 p-5 rounded-md items-center">
          <img className="size-20 mx-auto" src={rabbit} alt="" />
          <h3 className="text-center mt-4 dark:text-white  text-gray-800 font-semibold text-xl ">
            Rabbit
          </h3>
        </div>
      </div>
    </div>
  );
};

export default Categories;
