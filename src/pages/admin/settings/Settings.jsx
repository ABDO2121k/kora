import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import CardTable from "../../../components/admin/settings/tables/CardTable";
import Faq from "../../../components/admin/settings/tables/FaqTable";
import SectionTable from "../../../components/admin/settings/tables/SectionTable";
import { useState } from "react";
import CardModal from "../../../components/admin/settings/modals/CardModal";
import FaqModal from "../../../components/admin/settings/modals/FaqModal";
import SectionModal from "../../../components/admin/settings/modals/SectionModal";

const Settings = () => {
  const [cardOpen, setCardOpen] = useState(false);
  const [cardCounter, setCardCounter] = useState(0)
  const [faqOpen, setFaqOpen] = useState(false);
  const [faqCounter, setFaqCounter] = useState(0)
  const [sectionCounter, setSectionCounter] = useState(0)
  const [sectionOpen, setSectionOpen] = useState(false)

  return (
    <div className="w-[100%]">
      <div className="p-10 flex justify-around items-center flex-col md:flex-row w-full">
        <h1 className="mb-4 text-3xl text-center break-words  font-extrabold leading-none tracking-tight text-gray-900 md:text-3xl lg:text-4xl dark:text-white">
          List of Cards , Faqs and Section In your main page
        </h1>
      </div>
      <Grid container spacing={1} sx={{ marginTop: "2rem" }}>
        <Grid item lg={6} xs={12} sx={{ padding: "30px" }}>
          <div className="flex justify-around items-center flex-col md:flex-row w-full">
            <h1 className="mb-4 text-md  break-words  font-extrabold leading-none tracking-tight text-gray-900 md:text-lg lg:text-xl dark:text-white">
              List of Cards
            </h1>
            <div className="flex justify-center">
              <Link
                className={`p-3 border border-transparent text-white txt-center text-bold  bg-[#ff1744] rounded-md hover:bg-white hover:text-[#ff1744] hover:border-black hover:border-opacity-50`}
                onClick={() => setCardOpen(true)}
              >
                Add new Card
              </Link>
            </div>
          </div>
          <div className="mt-10 p-5">
            <CardTable counter={cardCounter} setCounter={setCardCounter} />
          </div>
        </Grid>
        <Grid item lg={6} xs={12} sx={{ padding: "30px" }}>
          <div className="flex justify-around items-center flex-col md:flex-row w-full">
            <h1 className="mb-4 text-md  break-words  font-extrabold leading-none tracking-tight text-gray-900 md:text-lg lg:text-xl dark:text-white">
              List of Faqs
            </h1>
            <div className="flex justify-center">
              <Link
                className={`p-3 border border-transparent text-white txt-center text-bold  bg-[#ff1744] rounded-md hover:bg-white hover:text-[#ff1744] hover:border-black hover:border-opacity-50`}
                onClick={() => setFaqOpen(true)}
              >
                Add new Faq
              </Link>
            </div>
          </div>
          <div className="mt-10 p-5">
            <Faq counter={faqCounter} setCounter={setFaqCounter} />
          </div>
        </Grid>
        <Grid item xs={12} sx={{ padding: "30px" }}>
          <div className="flex justify-around items-center flex-col md:flex-row w-full">
            <h1 className="mb-4 text-md  break-words  font-extrabold leading-none tracking-tight text-gray-900 md:text-lg lg:text-xl dark:text-white">
              List of Sections
            </h1>
            <div className="flex justify-center">
              <Link
                className={`p-3 border border-transparent text-white txt-center text-bold  bg-[#ff1744] rounded-md hover:bg-white hover:text-[#ff1744] hover:border-black hover:border-opacity-50`}
                onClick={() => setSectionOpen(true)}
              >
                Add new Section
              </Link>
            </div>
          </div>
          <div className="mt-10 p-5">
            <SectionTable counter={sectionCounter} setCounter={setSectionCounter} />
          </div>
        </Grid>
      </Grid>
      <CardModal open={cardOpen} setOpen={setCardOpen} type={'add'} setCounter={setCardCounter} />
      <FaqModal open={faqOpen} setOpen={setFaqOpen} type={'add'} setCounter={setFaqCounter} />
      <SectionModal open={sectionOpen} setOpen={setSectionOpen} type={'add'} setCounter={setSectionCounter} />
    </div>
  );
};

export default Settings;
