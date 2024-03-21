
import commentStyles from "./styles/Comments.module.css";

const CommentsR = ({ comment }) => {
  const date = new Date(comment?.date);
  const options = { month: "long", day: "numeric", year: "numeric" };
  const formattedDate = date?.toLocaleDateString("en-US", options);
  return (
    <div>
      <div
        className={`${commentStyles.singleC} p-5  `}
        style={{ paddingLeft: "12%" }}
      >
        <div className={`${commentStyles.author}`}>
          <img
            className={`${commentStyles.imgC}`}
            src={comment?.profile}
            alt="Profile"
          />
        </div>
        <div className={`${commentStyles.textC}`}>
          <span>{formattedDate}</span>
          <h5>
            {comment?.firstName} {comment?.lastName}
          </h5>
          <p>{comment?.text}</p>
          <div className="mt-2 flex">
            <a className={`${commentStyles.btnC} cursor-pointer`}>
              Like ({comment?.likes || 0})
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommentsR;
