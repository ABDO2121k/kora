import CommentIcon from "@mui/icons-material/Comment";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
// import recentStyles from "./styles/BlogCard.module.css";

const BlogRecent = ({ blog }) => {
  const date = new Date(blog?.date);
  const options = { month: "long", day: "numeric", year: "numeric" };
  const formattedDate = date?.toLocaleDateString("en-US", options);
  return (
    <div>
      <div className="cursor-pointer shadow-md mt-10 ml-2 p-3">
        <Link to={`/news/${blog?.id}`}>
          <Grid container>
            <Grid element sm={4}>
              <div className={``}>
                <div>
                  <img src={blog?.images[0]} alt="blog img" />
                </div>
              </div>
            </Grid>
            <Grid item sm={8}>
              <div className="flex flex-col justify-around h-full ml-2">
                <h4 className="text-lg p-3 text-bold">{blog?.title}</h4>
                <ul className={`text-black flex flex-row text-xs`}>
                  <li>
                    <CalendarMonthIcon sx={{fontSize:'20px', color:"#ff1744"}} /> {formattedDate}
                  </li>{" "}
                  &nbsp;|&nbsp;
                  <li>
                    <CommentIcon sx={{fontSize:'20px', color:"#ff1744"}}/> {blog?.comments?.length} comments
                  </li>
                </ul>
              </div>
            </Grid>
          </Grid>
        </Link>
      </div>
      <div className="mt-4">
        <hr />
      </div>
    </div>
  );
};

export default BlogRecent;
