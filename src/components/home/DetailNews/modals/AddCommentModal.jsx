import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { useContext, useState } from "react";
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
    xs: "100%",
    sm: "600px",
    md: "800px",
    lg: "900px",
  },
  height: {
    xs: "60%",
    sm: "75%",
    lg: "70%",
  },
};

export default function AddCommentModal({ open, counter, handleClose, setCounter, selectedNews }) {

  const context = useContext(myContext);
  const [loading, setLoading] = useState(false);
  const handleAddComment = async (e) => {
    try {
      setLoading(true)
      e.preventDefault()
      const formData = new FormData(e.target)
      const inputV = formData.get('comment')
      e.target.reset()
      const data = { user: context?.currentUser?._id, text: inputV }
      await context?.addComment(selectedNews?._id, data)
      setCounter(counter + 1)
    } catch (err) {
      console.log(err)
    }
    return setLoading(false)
  }

  return (
    <div>
         <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 10000000000000 }}
        open={loading}
      >
        <CircularProgress style={{ color: "#ff1744" }} />
      </Backdrop>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Grid container>
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
            >
              <div className="h-full w-full flex items-center justify-center">
                <img
                  className="rounded-md shadow-md w-full h-[90%]"
                  src={
                    selectedNews?.images?.length > 0 && selectedNews?.images[0]
                  }
                  alt=""
                />
              </div>
            </Grid>
            <Grid item sm={6} xs={12}>
              <div className="p-5">
                <h2 className="text-xl text-center text-gray-400 uppercase">
                  {selectedNews?.title}
                </h2>
                <form className="mt-5 p-3" onSubmit={handleAddComment}>
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
                    Add Comment
                  </Button>
                </form>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
