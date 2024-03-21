import { Backdrop, CircularProgress, Grid } from "@mui/material";
import HeaderD from "../../components/home/DetailNews/HeaderD";
import RecentNSection from "../../components/home/news/RecentNSection";
import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { myContext } from "../../context/GlobalContext";
import Comments from "../../components/home/DetailNews/Comments";
import AddCommentModal from "../../components/home/DetailNews/modals/AddCommentModal";

const NewsDetails = () => {
  const [loading, setLoading] = useState(false);
  const context = useContext(myContext);
  const { id } = useParams();
  const [news, setNews] = useState();
  useEffect(() => {
    setLoading(true);
    setInterval(() => {
      setLoading(false);
    }, 4000);
    const news1 =
      context?.blogPostTable?.length > 0 &&
      context?.blogPostTable?.find((e) => e.id == id);
    setNews(news1);
  }, [id, context?.blogPostTable]);

  return (
    <div>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress style={{ color: "#ff1744" }} />
      </Backdrop>
      <div>
        <HeaderD news={news} />
      </div>
      <Grid container>
        <Grid item sm={8} xs={12}>
          <div className="p-5 mt-20 shadow-md" style={{ lineHeight: "2rem" }}>
            {news?.text}
          </div>
          <div>
            <h4
              className="text-3xl mt-5 p-5"
              style={{ textShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)" }}
            >
              2 Comments :
            </h4>
            {news?.comments?.slice(0, 3)?.map((e, i) => (
              <Comments key={i} comment={e} />
            ))}
            <div className="w-full p-3 mt-3 shadow-md flex justify-center items-end">
              <AddCommentModal />
            </div>
          </div>
        </Grid>
        <Grid item sm={4} xs={12}>
          <RecentNSection number={4} />
        </Grid>
      </Grid>
    </div>
  );
};

export default NewsDetails;
