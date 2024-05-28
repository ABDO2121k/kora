
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Grid, TextField } from '@mui/material';
import { useContext } from 'react';
import { myContext } from '../../../../context/GlobalContext';

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "70%",
    maxHeight: "80vh",
    bgcolor: "background.paper",
    outline: "none",
    boxShadow: 24,
    p: 4,
    overflowY: "auto",
};

export default function EventName({ open, setOpen, setInputV, inputV, setSubmitted }) {
    const handleClose = () => setOpen(false);
    const context = useContext(myContext)
    const handleSubmit = () => {
        setSubmitted(true)
        setOpen(false)
    }

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <h1 className="mb-4 text-lgd  break-words  font-extrabold leading-none tracking-tight text-gray-900 md:text-xl lg:text-2xl dark:text-white">
                        Add New Event :
                    </h1>
                    <Grid container>
                        {context?.currentUser?.role == "admin" && <Grid item lg={8} xs={12} sx={{ margin: "auto" }}>
                            <TextField
                                label={"title"}
                                fullWidth
                                name="title"
                                required
                                value={inputV}
                                onChange={(e) => setInputV(e.target.value)}
                            />
                        </Grid>
                        }
                    </Grid>
                    <div className="mt-10 w-full flex items-center justify-center">
                        <button className="btn btn-outline btn-error " onClick={handleSubmit}>
                            Add
                        </button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}