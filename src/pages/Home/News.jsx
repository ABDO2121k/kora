import { Backdrop, CircularProgress, Grid } from "@mui/material";
import BlogCard from "../../components/home/news/BlogCard";
import FirstBlog from "../../components/home/news/FirstBlog";
import HeadeN from "../../components/home/news/HeadeN";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { useContext, useState } from "react";
import { myContext } from "../../context/GlobalContext";
import RecentNSection from "../../components/home/news/RecentNSection";

const News = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const context = useContext(myContext);

  const handlePageChange = (event, page) => {
    setLoading(true);
    setTimeout(() => {
      setCurrentPage(page);
      setLoading(false);
    }, 1500);
  };
  const totalPages = Math.ceil(context?.blogPostTable?.length / 5);
  return (
    <div>
      <div>
        <HeadeN />
      </div>
      <Grid container>
        <Grid item  md={8} sm={12}>
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={loading}
          >
            <CircularProgress style={{ color: "#ff1744" }} />
          </Backdrop>
          <div>
            <FirstBlog
              blog={
                context?.blogPostTable?.length > 0 && context?.blogPostTable[0]
              }
            />
          </div>{" "}
          <div className="mt-5">
            {context?.blogPostTable?.length > 0 &&context?.blogPostTable
              ?.slice(currentPage * 5 - 5, currentPage * 5)
              .map((e, i) => (
                <BlogCard key={i} blog={e} />
              ))}
            <div className="mt-5 h-full flex items-center justify-center">
              <Stack spacing={2} className="ml-10">
                <Pagination
                  count={totalPages}
                  variant="outlined"
                  style={{ borderColor: "#ff1744" }}
                  onChange={handlePageChange}
                />
              </Stack>
            </div>
          </div>
        </Grid>
        <Grid item md={4} sm={12}>
          {/* hna  */}
          <RecentNSection number={7} />
        </Grid>
      </Grid>
    </div>
  );
};

export default News;
