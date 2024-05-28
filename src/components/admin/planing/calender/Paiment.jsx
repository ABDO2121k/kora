
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { Alert, Grid, } from '@mui/material';
import { useContext, useEffect } from 'react';
import { myContext } from '../../../../context/GlobalContext';
import toast from 'react-hot-toast';
import Paypal from '../paiment/Provider';
import dayjs from 'dayjs';

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

export default function Paiment({ open, setOpen, setCounter, counter, selectedEvent, setSelectedEvent, currentS }) {
    const handleClose = () => setOpen(false);
    const context = useContext(myContext)


    const createdAtDate = dayjs(selectedEvent?.event?.extendedProps?.createdAt);
    const oneHourAgo = dayjs().subtract(1, 'hour');
    const isDisabled = createdAtDate.isBefore(oneHourAgo);

    const handleS = () => {
        setCounter(counter + 1)
        setOpen(false)
    }

    const handelDelete = async () => {
        try {
            setOpen(false)
            if (isDisabled) return false;
            const res = await context?.deleteReservation(
                currentS,
                selectedEvent?.event?.extendedProps._id.toString()
            );
            toast.success(res.message);
            setCounter(counter + 1);
        }
        catch (err) {
            toast.error(err.message);
        }
        setSelectedEvent()
    }


    const handelPaid = async () => {
        try {
            setOpen(false)
            const res = await context?.paidR(
                selectedEvent?.event?.extendedProps._id.toString()
            );
            toast.success(res.message);
            setCounter(counter + 1);
        }
        catch (err) {
            toast.error(err.message);
        }
        setSelectedEvent()
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
                        Update or Delete Event :
                    </h1>
                    <Grid container>
                        <Grid item lg={8} xs={12} sx={{ margin: "auto", marginBottom: '20px' }} className='w-full'>
                            <div className="mt-10 w-full flex items-center justify-center">
                                <button className="btn btn-outline btn-error " onClick={handelDelete} disabled={isDisabled && context?.currentUser != "admin"}>
                                    Remove Event
                                </button>
                            </div>
                        </Grid>
                    </Grid>
                    <div className="divider">OR</div>
                    <Grid container>
                        {!selectedEvent?.event?.extendedProps?.isPaid ? (
                            context?.currentUser?.role == "admin" ? <Grid item lg={8} xs={12} sx={{ margin: "auto" }}>
                                <div className="mt-10 w-full flex items-center justify-center">
                                    <button className="btn btn-outline btn-success " onClick={handelPaid}>
                                        Make Event Paid
                                    </button>
                                </div>
                            </Grid>
                                : <Grid item xs={12}>
                                    <Paypal handleS={handleS} selectedEvent={selectedEvent} />
                                </Grid>
                        ) : (
                            <Alert className='m-auto mt-4' severity="success">The Reservation already Paid.</Alert>

                        )}

                    </Grid>
                </Box>
            </Modal>
        </div>
    );
}