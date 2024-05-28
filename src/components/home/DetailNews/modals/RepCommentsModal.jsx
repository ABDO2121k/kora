import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import commentStyles from "../styles/Comments.module.css";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import { Backdrop, CircularProgress, Grid, TextField } from "@mui/material";
import { myContext } from "../../../../context/GlobalContext";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
  width: {
    xs: "450px",
    sm: "600px",
    md: "800px",
    lg: "900px",
  },
  height: {
    xs: "95%",
    sm: "75%",
    lg: "70%",
  },
};

const RepCommentsModal = ({ comment, title, setCounter }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const context = useContext(myContext);
  const [loading, setLoading] = useState(false)
  const { id } = useParams()


  const handleAddReply = async (e) => {
    try {
      setLoading(true)
      e.preventDefault()
      const formData = new FormData(e.target)
      const inputV = formData.get('comment')
      e.target.reset()
      const data = { user: context?.currentUser?._id, text: inputV }
      await context?.addReply(id, comment?._id.toString(), data)
      setOpen(false)
      setCounter()
    } catch (err) {
      console.log(err)
    }
    return setLoading(false)
  }


  return (
    <div>
      <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 10000000000000 }}
        open={loading}
      >
        <CircularProgress style={{ color: "#ff1744" }} />
      </Backdrop>
      <button className={`${commentStyles.btnC}`} onClick={handleOpen}>
        Reply ({comment?.replies?.length})
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="overflow-hidden">
          <Grid container>
            <Grid xs={12}>
              <h2 className="text-xl text-center text-gray-400 uppercase px-5 py-3">
                news Title : {title}
              </h2>
            </Grid>
            <Grid
              item
              sm={6}
              xs={12}
              sx={{
                height: {
                  xs: "150px",
                  sm: "250px",
                  md: "300px",
                  lg: "300px",
                },
              }}
            // className="bg-red-500"
            >
              <div className="h-full w-full  p-5">
                <h2 className="text-lg text-bold text-gray-500">
                  Reply to : {comment?.user?.firstName}{" "}
                  {comment?.user?.lastName}'s Comment
                </h2>
                <p className="p-3 border rounded-md mt-3 text-sm">
                  {comment?.text
                    ? comment?.text?.slice(0, 30)
                    : ""}{" "}
                  {comment?.text?.length > 30 && <span className="text-gray-500 text-xs">...</span>}
                </p>
              </div>
            </Grid>
            <Grid
              item
              sm={6}
              xs={12}
            // className="bg-red-400"
            >
              <div className="p-0 sm:p-5 flex items-center justify-center">
                <form className="mt-5 p-3" onSubmit={handleAddReply}>
                  <TextField
                    multiline
                    rows={4}
                    fullWidth
                    label="Your Comment here"
                    name="comment"
                    id="comment"
                    type="textarea"
                    required
                  />
                  <Button
                    variant="contained"
                    type="submit"
                    sx={{
                      backgroundColor: "#ff1747",
                      marginTop: "1rem",
                      padding: "10px 20px",
                    }}
                  >
                    Reply
                  </Button>
                </form>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
};

export default RepCommentsModal;
