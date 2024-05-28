import axios from "axios";



export const GetStadiumPlannings = async (planingId) => {
    try {
        const res = await axios.post(`http://localhost:8000/api/planing/getStadiumPlannings/${planingId}`);
        return res.data
    } catch (err) {
        console.error(err.response.data.message);
        throw new Error(err.response.data.message);
    }
};


export const GetCurrentPlaning = async (planingId) => {
    try {
        const res = await axios.post(`http://localhost:8000/api/planing/getPlaning/${planingId}`);
        return res.data
    } catch (err) {
        console.error(err.response.data.message);
        throw new Error(err.response.data.message);
    }
};


export const addPlaning = async (data) => {
    try {
        const res = await axios.post("http://localhost:8000/api/planing/addPlaning", data);
        return res.data
    } catch (err) {
        console.error(err.response.data.message);
        throw new Error(err.response.data.message);
    }
};

export const deletePlaning = async (id) => {
    try {
        const res = await axios.delete(`http://localhost:8000/api/planing/deletePlaning/${id}`);
        return res.data
    } catch (err) {
        console.error(err.response.data.message);
        throw new Error(err.response.data.message);
    }
};

export const updatePlaning = async (planingId, data) => {
    try {
        const res = await axios.put("http://localhost:8000/api/planing/updatePlaning", { planingId, data });
        return res.data
    } catch (err) {
        console.error(err.response.data.message);
        throw new Error(err.response.data.message);
    }
};
