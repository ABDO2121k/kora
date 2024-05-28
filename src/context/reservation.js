import axios from "axios";





export const paidR = async (reservationId) => {
    try {
        const res = await axios.put(`http://localhost:8000/api/reservation/paidR/${reservationId}`);
        return res.data
    } catch (err) {
        console.error(err.response.data.message);
        throw new Error(err.response.data.message);
    }
};


export const addReservation = async (reserId, data) => {
    try {
        const res = await axios.post(`http://localhost:8000/api/reservation`, {data,planingId:reserId});
        return res.data
    } catch (err) {
        console.error(err.response.data.message);
        throw new Error(err.response.data.message);
    }
};

export const deleteReservation = async (idP, idR) => {
    try {
        const res = await axios.delete(`http://localhost:8000/api/reservation/deleteReservation/${idP}/${idR}`);
        return res.data
    } catch (err) {
        console.error(err.response.data.message);
        throw new Error(err.response.data.message);
    }
};

