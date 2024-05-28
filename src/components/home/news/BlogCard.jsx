import CommentIcon from "@mui/icons-material/Comment";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Link } from "react-router-dom";
import cardStyles from "./styles/BlogCard.module.css";
import { useContext } from "react";
import { myContext } from "../../../context/GlobalContext";
import HtmlRenderer from "../../admin/news/htmlToText/F";
import { Grid } from "@mui/material";

const BlogCard = ({ blog }) => {
  const context = useContext(myContext)
  const formattedDate = context?.dateChange(blog?.createdAt)
  return (
    <div>
      <div className="cursor-pointer shadow-md mt-10 ml-5 p-3">
        <Link to={`/news/${blog?._id.toString()}`}>
          <div className={` flex ${cardStyles.singleI} flex-col sm:flex-row`}>
            <Grid container>
              <Grid
                item
                lg={6}
                sm={12}
                className={`${cardStyles.biPic} flex items-center justify-center h-[90%] w-[50%] p-3 w-full`}
              >
                <img
                  className={`w-full h-[15rem] sm:w-full rounded-md`}
                  src={blog?.images?.length > 0 && blog?.images[0]}
                  alt="blog img"
                />
              </Grid>
              <Grid item
                lg={6}
                sm={12}
                className={cardStyles.biText}
              >
                <h4 className="text-bold break-words w-full px-3">{blog?.title}</h4>
                <ul>
                  <li>
                    <CalendarMonthIcon /> {formattedDate}
                  </li>
                  <li>
                    <CommentIcon /> {blog?.comments?.length} Comment
                  </li>
                </ul>
                <div className="p-4 border border-gray-200 w-[90%] rounded-md shadow-md">
                  <p className="text-lg font-semibold">
                    {blog?.text ? <HtmlRenderer text={blog?.text.slice(0, 150)} /> : ""}

                    {blog?.text.length > 50 && (
                      <span className="text-sm text-[#ff1744] opacity-70">
                        {" "}
                        continue ...
                      </span>
                    )}
                  </p>
                </div>
              </Grid>
            </Grid>

          </div>
        </Link>
      </div>
      <div className="mt-4">
        <hr />
      </div>
    </div>
  );
};

export default BlogCard;
