import CommentIcon from "@mui/icons-material/Comment";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import { Link } from "react-router-dom";
import cardStyles from "./styles/BlogCard.module.css";

const BlogCard = ({ blog }) => {
  const date = new Date(blog?.date);
  const options = { month: "long", day: "numeric", year: "numeric" };
  const formattedDate = date?.toLocaleDateString("en-US", options);
  return (
    <div>
      <div className="cursor-pointer shadow-md mt-10 ml-5 p-3">
        <Link to={`/news/${blog?.id}`}>
        <div className={` flex ${cardStyles.singleI} flex-col sm:flex-row`}>
            <div className={cardStyles.biPic}>
              <img
                className={cardStyles.img}
                src={blog?.images[0]}
                alt="blog img"
              />
            </div>
            <div className={cardStyles.biText}>
              <h4>{blog?.title}</h4>
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
                  {blog?.text ? blog?.text.slice(0, 150) : ""}
                  {blog?.text.length > 50 && <span className="text-sm text-[#ff1744] opacity-70">  continue ...</span>}
                </p>
              </div>
            </div>
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
