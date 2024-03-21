import { useState } from "react";
import CommentsR from "./CommentsR";
import commentStyles from "./styles/Comments.module.css";
import RepCommentsModal from "./modals/RepCommentsModal";


const Comments = ({ comment }) => {
  const date = new Date(comment?.date);
  const options = { month: "long", day: "numeric", year: "numeric" };
  const formattedDate = date?.toLocaleDateString("en-US", options);
  return (
    <div>
      <div className={`${commentStyles.singleC} ${commentStyles.firstC} p-5`}>
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
            <a  className={`${commentStyles.btnC} mr-3 cursor-pointer`}>
              Like ({comment?.likes})
            </a>
            <RepCommentsModal commentId={comment?.id} type={'comment'}/>
          </div>
        </div>
      </div>
      {comment?.replies?.slice(0, 2)?.map((e, i) => (
        <CommentsR comment={e} key={i} />
      ))}
    </div>
  );
};

export default Comments;
