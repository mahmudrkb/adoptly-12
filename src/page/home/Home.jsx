import About from "./About";
import Banner from "./Banner";
import CallToAction from "./CallToAction";
import Categories from "./Categories";
import Contact from "./Contact";
import DonationCam from "./DonationCam";
import Question from "./Question";
import Testimonial from "./Testimonial";
import TopPets from "./TopPets";

const Home = () => {
  return (
    <div className=" ">
      <Banner></Banner>
      <Categories></Categories>
      <TopPets></TopPets>
      <CallToAction></CallToAction>
      <DonationCam></DonationCam>
      <Testimonial></Testimonial>
      <About></About>
      <Question></Question>
      <Contact></Contact>
    </div>
  );
};

export default Home;
