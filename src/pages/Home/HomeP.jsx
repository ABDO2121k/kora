import { Outlet } from "react-router-dom";
import Footer from "../../components/home/main/Footer";
import Nav from "../../components/home/main/Nav";
import Chatbot from "../../components/home/chat/Chat";


const Home = () => {
  return (
    <div className="relative">
      <div>
        <Nav />
      </div>
      <div className="mt-[4rem]">
        <Outlet />
      </div>
      <div className="mt-10">
        <Footer />
      </div>{" "}
      {/* <Chatbot /> */}
    </div>
  );
};

export default Home;
