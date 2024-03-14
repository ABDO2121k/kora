import {
  Backdrop,
  Button,
  CircularProgress,
  Grid,
  TextField,
} from "@mui/material";
import section from "../../assets/contact.jpg";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import AlertM from "../../components/main/Alert";

const Contact = () => {
  const formR = useRef();
  const [open, setOpen] = useState(false);
  const [alertOpen,setAlertOpen]=useState(false)
  const [alert,setAlert]=useState({severity:'',message:''})
  const handelSubmit = (e) => {
    e.preventDefault();
    setOpen(true);
    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        formR.current,
        {
          publicKey: import.meta.env.VITE_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          console.log("SUCCESS!");
          setAlert({severity:'success',message:'message submitted with success'})
        },
        (error) => {
          console.log("FAILED...", error.text);
          setAlert({severity:'danger',message:error.text})
        }
      );
      e.target.reset()
    setTimeout(() => {
      setOpen(false);
      setAlertOpen(true)
    }, 500);
    setTimeout(() => {
      setAlertOpen(false)
    }, 10000);
  };
  return (
    <div>
      <div className="mt-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.9212649972314!2d-5.0158834258045175!3d34.02023191942253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd9f8b1c83940641%3A0x20b4dedb0f447c16!2scit%C3%A9%20de%20sports%20adarissa!5e0!3m2!1sfr!2sma!4v1710116600557!5m2!1sfr!2sma"
          style={{ height: "400px", width: "100%" }}
          height=""
          width=""
          allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className="mt-10 flex flex-col lg:flex-row justify-between items-center">
        {" "}
        <div className="p-5 shadow-md w-full h-full">
          <h1 className="mb-5 text-4xl text-semibold text-[#ff1747] text-center shadow-sm p-3">
            Contact Form
          </h1>
         {alertOpen&&<AlertM severity={alert.severity} message={alert.message} />}
          <form onSubmit={handelSubmit} ref={formR}>
            <Backdrop
              sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
              open={open}
            >
              <CircularProgress color="inherit" />
            </Backdrop>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <TextField
                  required
                  id="FullName"
                  name="to_name"
                  label="Full Name"
                  type="text"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="Email"
                  name="from_name"
                  label="Email"
                  type="text"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  id="Message"
                  name="message"
                  label="Message"
                  type="textarea"
                  fullWidth
                  multiline
                  rows={6}
                />
              </Grid>
            </Grid>
            <Button
              variant="contained"
              type="submit"
              sx={{
                backgroundColor: "#ff1747",
                marginTop: "1rem",
                padding: "10px 20px",
              }}
            >
              Send
            </Button>
          </form>
        </div>
        <div className="mt-3 w-full">
          <div className={` rounded-md`}>
            <img
              className={`rounded-md  ml-10 object-cover w-[90%] h-[30rem]`}
              src={section}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
