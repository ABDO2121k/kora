import { useContext, useEffect, useState } from "react";
import Card from "../../components/home/main/Card";
import Home from "../../components/home/main/Home";
import Section from "../../components/home/main/Section";
import WelecomParg from "../../components/home/main/WelecomParg";
import { myContext } from "../../context/GlobalContext";
import { Backdrop, CircularProgress } from "@mui/material";
import { toast } from "react-hot-toast";
import AdminSection from "../../components/home/main/AdminSection";
import CardStyle from "../../components/home/main/styles/Card.module.css";
import CardAdmin from "../../components/home/main/CardAdmin";
import AccordionAdmin from "../../components/home/main/According";

const Main = () => {
  const context = useContext(myContext);
  const [sections, setSections] = useState();
  const [cards, setCards] = useState();
  const [loading, setLoading] = useState(false);
  const [faqs, setFaqs] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await context?.getSections();
        setSections(res);
        const res2 = await context?.getCards();
        setCards(res2);
        const res3 = await context?.getFaqs();
        setFaqs(res3);
      } catch (err) {
        toast.error(err.message);
        console.log(err);
      }
      setLoading(false);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress color="inherit" sx={{ color: "#ff1744" }} />
      </Backdrop>
      <div>
        <Home />
      </div>
      <div>
        <WelecomParg />
      </div>
      <div className="mt-20">
        <Section />
      </div>
      {sections?.map((e, i) => (
        <AdminSection key={i} section={e} index={i} />
      ))}

      <div className="mt-20">
        <Card />
      </div>
      <div className={CardStyle.dad}>
        {cards?.map((e, i) => (
          <CardAdmin key={i} card={e} />
        ))}
      </div>
      <div className="mt-20 p-5">
        {faqs?.length>0 && <h1 className="mb-4 text-xl ml-4 break-words  font-extrabold leading-none tracking-tight text-gray-900 md:text-2xl lg:text-3xl dark:text-white">
          FAQ :
        </h1>
        }
        <div>
          {faqs?.map((e, i) => (
            <AccordionAdmin key={i} faq={e} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;
