import { PayPalScriptProvider } from "@paypal/react-paypal-js";


import Checkout from "./Paiment";
import { useContext, useEffect, useState } from "react";
import { Backdrop, CircularProgress } from "@mui/material";
import { myContext } from "../../../../context/GlobalContext";

const Paypal = ({ selectedEvent, handleS }) => {
    const [stadium, setStadium] = useState()
    const [loading, setLoading] = useState(false)
    const [price, setPrice] = useState(0)
    const [prixH, setPrixH] = useState(0)
    const context = useContext(myContext)
    const initialOptions = {
        "client-id": import.meta.env.VITE_PAYPAL_CLIENT_ID,
        currency: "USD",
        intent: "capture",
    };


    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true)
                const res = await context?.getOneStadium(selectedEvent?.event?.extendedProps?.stadium?.toString());
                setStadium(res);
            } catch (err) {
                console.log(err);
            }
            setTimeout(() => {
                setLoading(false);
            }, 500);
        };
        fetchData();
    }, [selectedEvent]);


    useEffect(() => {
        if (stadium) {
            const hourlyRate = parseFloat(stadium?.prix);
            const startTime = new Date(selectedEvent?.event?.start);
            const endTime = new Date(selectedEvent?.event?.end);
            const durationMs = endTime - startTime;
            const durationHours = durationMs / (1000 * 60 * 60);
            const totalPrice = durationHours * hourlyRate/10;
            setPrice(totalPrice)
        }

    }, [stadium])

    return (
        <div>
            {console.log(stadium)}
            {console.log(selectedEvent.event.end)}
            <Backdrop
                sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 100000 }}
                open={loading}
            >
                <CircularProgress style={{ color: "#ff1744" }} />
            </Backdrop>
            <div className={`w-[100%] shadow-md mt-4 flex flex-col items-center `}>
                <PayPalScriptProvider
                    options={initialOptions}
                >
                    {price > 0 && <Checkout handleS={handleS} selectedEvent={selectedEvent} amount={price} />
                    }
                </PayPalScriptProvider>
            </div>
        </div>
    );
};

export default Paypal;
