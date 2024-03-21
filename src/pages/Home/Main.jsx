import Card from "../../components/home/main/Card";
import Home from "../../components/home/main/Home";
import Section from "../../components/home/main/Section";
import WelecomParg from "../../components/home/main/WelecomParg";

const Main = () => {
  return (
    <div>
      <div>
        <Home />
      </div>
      <div>
        <WelecomParg />
      </div>
      <div className="mt-20">
        <Section />
      </div>
      <div className="mt-20">
        <Card />
      </div>
    </div>
  );
};

export default Main;
