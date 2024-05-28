
import { useContext, useEffect, useState } from "react";
import commentStyles from "./styles/Comments.module.css";
import { myContext } from "../../../context/GlobalContext";
import DeleteIcon from '@mui/icons-material/Delete';
import { Backdrop, CircularProgress } from "@mui/material";
import { useParams } from "react-router-dom";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

const CommentsR = ({ commentId, comment, setCounter }) => {
  const date = new Date(comment?.createdAt);
  const options = {
    month: "long",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric"
  };
  const formattedDate = date?.toLocaleDateString("en-US", options);
  const context = useContext(myContext)
  const { id } = useParams()
  const [loading, setLoading] = useState(false)
  const [Index, setIndex] = useState()


  const handleDelete = async () => {
    try {
      setLoading(true)
      await context?.removeReply(id, commentId, comment?._id.toString())
      setCounter()
    } catch (err) {
      console.log(err)
    }
    return setLoading(false)
  }

  const handelLike = async () => {
    try {
      setLoading(true)
      const newUser = { ...context?.currentUser };
      if (Index == -1) {
        await context?.addReplyLike(id, commentId, comment?._id.toString())
        newUser.heLikes.push(comment?._id.toString());
      } else {
        await context?.removeReplyLike(id, commentId, comment?._id.toString())
        newUser.heLikes.splice(Index, 1);
      }
      context?.setCurrentUser({ ...newUser });
      setCounter()
    } catch (err) {
      console.log(err)
    }
    setLoading(false)
  }

  useEffect(() => {
    let index = context?.currentUser?.heLikes?.findIndex(e => e == comment?._id.toString())
    setIndex(index)
    console.log(Index)
  }, [handelLike])
  return (
    <div className="relative">
      <Backdrop

        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress style={{ color: "#ff1744" }} />
      </Backdrop>
      <div className={`${commentStyles.singleC} p-5`} style={{ paddingLeft: "12%" }}>
        <div className={`${commentStyles.author}`}>
          {comment?.profile ? (
            <img
              className={`${commentStyles.imgC}`}
              src={comment?.profile}
              alt="Profile"
            />
          ) : (
            <div className="rounded-lg bg-red-300 p-3">
              {comment?.user?.firstName[0]}
              {comment?.user?.lastName[0]}
            </div>
          )}
        </div>
        <div className={`${commentStyles.textC}`}>
          <span>{formattedDate}</span>
          <h5 className="break-words">
            {comment?.user?.firstName} {comment?.user?.lastName}
          </h5>
          <p>{comment?.text}</p>
          <div className="mt-2 flex">
            <a className={`${commentStyles.btnC} cursor-pointer`} onClick={handelLike}>
              {context?.isLo ?
                (Index === -1 ? (
                  <ThumbUpOffAltIcon />
                ) : (
                  <ThumbUpAltIcon className={`${commentStyles.like}`} />
                )) : (
                  <ThumbUpOffAltIcon sx={{ color: "black" }} />
                )} ({comment?.likes})

            </a>
          </div>
        </div>
      </div>
      {context?.currentUser?._id == comment?.user?._id.toString() && <div className="cursor-pointer text-red-500 absolute top-0 right-0 p-2" onClick={handleDelete}>
        <DeleteIcon />
      </div>
      }
    </div>
  );
};

export default CommentsR;
