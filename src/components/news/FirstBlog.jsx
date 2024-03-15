import CommentIcon from "@mui/icons-material/Comment";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import firstStyles from "./styles/FirstB.module.css";
import { Link } from "react-router-dom";

const FirstBlog = ({ blog }) => {
  const date = new Date(blog?.date);
  const options = { month: "long", day: "numeric", year: "numeric" };
  const formattedDate = date?.toLocaleDateString("en-US", options);
  return (
    <div className="cursor-pointer ml-5">
      <Link to={`/news/${blog?.id}`}>
        {" "}
        <div
          className={`relative mt-10 w-full h-96 bg-cover bg-center bg-no-repeat ${firstStyles.largeB} rounded-md  shadow-md`}
          style={{
            backgroundImage: `url("https://img.freepik.com/photos-gratuite/photographie-arene-football-sport_1409-4807.jpg?t=st=1710514430~exp=1710518030~hmac=0c52851186530ccd5e4d7f5ce200fd2fd51a93538355b7177d500d266504e9f3&w=900")`,
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
            <h3 className="text-white text-3xl">
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
