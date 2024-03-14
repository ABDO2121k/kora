import { Outlet } from "react-router-dom";
import Footer from "../../components/main/Footer";
import Nav from "../../components/main/Nav";

const Home = () => {
  return (
    <div>
      <div>
        <Nav />
      </div>
      <div className="mt-[4rem]">
        <Outlet />
      </div>
      <div className="mt-10">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
