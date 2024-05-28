
import CommentsR from "./CommentsR";
import commentStyles from "./styles/Comments.module.css";
import RepCommentsModal from "./modals/RepCommentsModal";
import DeleteIcon from '@mui/icons-material/Delete';
import { useContext, useEffect, useState } from "react";
import { myContext } from "../../../context/GlobalContext";
import { useParams } from "react-router-dom";
import { Backdrop, CircularProgress } from "@mui/material";
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';



const Comments = ({ comment, title, setCounter }) => {
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
      await context?.removeComment(id, comment?._id.toString())
      setLoading(false)
      setCounter()
    } catch (err) {
      console.log(err)
    }
  }

  const handelLike = async () => {
    try {
      setLoading(true)
      const newUser = { ...context?.currentUser };
      if (Index == -1) {
        await context?.addLike(id, comment?._id.toString())
        newUser.heLikes.push(comment?._id.toString());
      } else {
        await context?.removeLike(id, comment?._id.toString())
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
    <div style={{ position: 'relative' }}>
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={loading}
      >
        <CircularProgress style={{ color: "#ff1744" }} />
      </Backdrop>
      <div className={`${commentStyles.singleC} ${commentStyles.firstC} p-5`}>
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
          <h5>
            {comment?.user?.firstName} {comment?.user?.lastName}
          </h5>
          <p className="w-[400px] break-words overflow-hidden">{comment?.text}</p>
          <div className="mt-2 flex">
            <a className={`${commentStyles.btnC} cursor-pointer`} onClick={handelLike}>
              {context?.isLo ? 
              (Index === -1 ? (
                <ThumbUpOffAltIcon />
              ) : (
                <ThumbUpAltIcon className={`${commentStyles.like}`} />
              )): (
                <ThumbUpOffAltIcon sx={{color:"black"}} />
              )} ({comment?.likes})

            </a>
            <RepCommentsModal comment={comment} title={title} setCounter={setCounter} />
          </div>
        </div>
        {context?.currentUser?._id == comment?.user?._id.toString() && <div className="cursor-pointer text-red-500" style={{ position: 'absolute', top: '20px', right: '10px' }} onClick={handleDelete}>
          <DeleteIcon />
        </div>
        }
      </div>
      {comment?.replies?.slice(0, 2)?.map((e, i) => (
        <CommentsR comment={e} key={i} setCounter={setCounter} commentId={comment?._id.toString()} />
      ))}
    </div>
  );
};

export default Comments;
