import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { useContext, useState } from "react";
import { toast } from "react-hot-toast";
import { myContext } from "../../../../context/GlobalContext";
import dayjs from "dayjs";

const Checkout = ({ selectedEvent, handleS, amount }) => {
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();
    const [currency, setCurrency] = useState(options.currency);
    const context = useContext(myContext);

    const onCurrencyChange = ({ target: { value } }) => {
        setCurrency(value);
        dispatch({
            type: "resetOptions",
            value: {
                ...options,
                currency: value,
            },
        });
    };

    const onCreateOrder = (data, actions) => {
        return actions.order.create({
            purchase_units: [
                {
                    amount: {
                        value: amount,
                    },
                },
            ],
        });
    };

    const onApproveOrder = (data, actions) => {
        return actions.order.capture().then((details) => {
            handlePaid();
            const name = details.payer.name.given_name;
            toast(`Transaction completed by ${name}`);
        });
    };

    const handlePaid = async () => {
        try {
            const res = await context?.paidR(
                selectedEvent?.event?.extendedProps._id.toString()
            );
            toast.success(res.message);
            handleS();
        } catch (err) {
            toast.error(err.message);
        }
    };

    return (
        <div>
            {isPending ? (
                <p className="mt-5 text-emerald-500">LOADING...</p>
            ) : (
                <>
                    <select value={currency} onChange={onCurrencyChange}>
                        <option value="USD">💵 USD</option>
                        <option value="EUR">💶 Euro</option>
                        {/* <option value="MAD">💶 MAD</option> */}
                    </select>
                    <PayPalButtons
                        style={{ layout: "vertical" }}
                        createOrder={(data, actions) => onCreateOrder(data, actions)}
                        onApprove={(data, actions) => onApproveOrder(data, actions)}
                    />
                </>
            )}
        </div>
    );
};

export default Checkout;
