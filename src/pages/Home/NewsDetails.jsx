import { Backdrop, CircularProgress, Grid } from "@mui/material";
import HeaderD from "../../components/home/DetailNews/HeaderD";
import RecentNSection from "../../components/home/news/RecentNSection";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { myContext } from "../../context/GlobalContext";
import Comments from "../../components/home/DetailNews/Comments";
import AddCommentModal from "../../components/home/DetailNews/modals/AddCommentModal";
import ButtonStyles from "../../components/home/DetailNews/styles/AddC.module.css";
import HtmlRenderer from "../../components/admin/news/htmlToText/F";

const NewsDetails = () => {
  const [loading, setLoading] = useState(false);
  const context = useContext(myContext);
  const navigate = useNavigate()
  const { id } = useParams();
  const [news, setNews] = useState();
  const [counter, setCounter] = useState(0)
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => {
    if (context?.isLo) {
      setOpen(true);
    } else {
      navigate('/login')
    }

  }
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const news1 = await context?.getOneNews(id)
        setNews(news1);

      } catch (err) {
        console.log(err)
      }
      return setInterval(() => {
        setLoading(false);
      }, 1000);
    }
    fetchData()
  }, [id, counter]);

  const handleAdd = () => {
    handleClose()
    setCounter(counter + 1)
  }

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
            <HtmlRenderer text={news?.text} />
          </div>
          <div>
            <h4
              className="text-3xl mt-5 p-5"
              style={{ textShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)" }}
            >
              {news?.comments?.length} Comments :
            </h4>
            {news?.comments?.slice(0, 3)?.map((e, i) => (
              <Comments key={i} comment={e} title={news?.title} setCounter={handleAdd} />
            ))}
            <div className="w-full p-3 mt-3 shadow-md flex justify-center items-end">
              <button className={`${ButtonStyles.btnCAdd}`} onClick={handleOpen}>
                Add Comment
              </button>
              <AddCommentModal open={open} counter={counter} setCounter={handleAdd} handleClose={handleClose} selectedNews={news} />
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
