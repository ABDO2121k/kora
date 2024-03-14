import Card from "../../components/main/Card";
import Home from "../../components/main/Home";
import Section from "../../components/main/Section";
import WelecomParg from "../../components/main/WelecomParg";

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
