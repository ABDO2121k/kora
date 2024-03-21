import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import ButtonStyles from "../styles/AddC.module.css";
import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import { Grid, TextField } from "@mui/material";
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

export default function AddCommentModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () =>{
    setOpen(true);
    setCounter(counter+1)
  } 
  const handleClose = () => setOpen(false);
  const { id } = useParams();
  const [selectedNews, setSelectedNews] = useState();
  const context = useContext(myContext);
  const [counter,setCounter]=useState()
  useEffect(() => {
    const news1 =
      context?.blogPostTable?.length > 0 &&
      context?.blogPostTable?.find((e) => e.id == id);
    setSelectedNews(news1);
  }, [id,counter]);
  return (
    <div>
      <button className={`${ButtonStyles.btnCAdd}`} onClick={handleOpen}>
        Add Comment
      </button>
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
                <div className="mt-5 p-3">
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
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}
