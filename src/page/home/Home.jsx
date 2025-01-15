import About from "./About";
import Banner from "./Banner";
import CallToAction from "./CallToAction";
import Contact from "./Contact";
import Question from "./Question";

const Home = () => {
  return (
    <div className=" ">
      <Banner></Banner>
      <CallToAction></CallToAction>
      <About></About>
      <Question></Question>
      <Contact></Contact>
    </div>
  );
};

export default Home;
