import CommentIcon from "@mui/icons-material/Comment";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import firstStyles from "./styles/FirstB.module.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { myContext } from "../../../context/GlobalContext";

const FirstBlog = ({ blog }) => {
  const context=useContext(myContext)
  const formattedDate=context?.dateChange(blog?.createdAt)
  return (
    <div className="cursor-pointer ml-5">
      <Link to={`/news/${blog?._id?.toString()}`}>
        {" "}
        <div
          className={`relative mt-10 w-full h-96 bg-cover bg-center bg-no-repeat ${firstStyles.largeB} rounded-md  shadow-md`}
          style={{
            backgroundImage: `url(${blog?.images?.length>0&&blog?.images[0]})`,
          }}
        >
          <div className="absolute top-0 left-0 bg-black bg-opacity-50 px-4 py-2 rounded-lg">
            <div className={`text-white font-bold ${firstStyles.biB}`}>
              News
            </div>
          </div>
          <div
            className={`absolute bottom-0 left-0 bg-black bg-opacity-50 px-4 py-3 rounded-lg ${firstStyles.biText}`}
          >
            <h3 className="text-white text-3xl break-words">
              <a href="./blog-details.html">{blog?.title}</a>
            </h3>
            <ul className="text-white">
              <li>
                <CalendarMonthIcon /> {formattedDate}
              </li>
              <li>
                <CommentIcon /> {blog?.comments?.length} comments
              </li>
            </ul>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default FirstBlog;
