import axios from "axios";



export const getStadiums = async () => {
    try {
        const res = await axios.get("http://localhost:8000/api/stadiums/getStadiums");
        return res.data
    } catch (err) {
        console.error(err.response.data.message);
        throw new Error(err.response.data.message);
    }
};


export const getOneStadium = async (stadiumId) => {
    try {
        const res = await axios.post(`http://localhost:8000/api/stadiums/getOneStadium/${stadiumId}`);
        return res.data
    } catch (err) {
        console.error(err.response.data.message);
        throw new Error(err.response.data.message);
    }
};


export const addStadium = async (data) => {
    try {
        const res = await axios.post("http://localhost:8000/api/stadiums/addStadium", data);
        return res.data
    } catch (err) {
        console.error(err.response.data.message);
        throw new Error(err.response.data.message);
    }
};

export const deleteStadium = async (id) => {
    try {
        const res = await axios.delete(`http://localhost:8000/api/stadiums/deleteStadium/${id}`);
        return res.data
    } catch (err) {
        console.error(err.response.data.message);
        throw new Error(err.response.data.message);
    }
};

export const updateStadium = async (stadiumId, data) => {
    try {
        const res = await axios.put("http://localhost:8000/api/stadiums/updateStadium", { stadiumId, data });
        return res.data
    } catch (err) {
        console.error(err.response.data.message);
        throw new Error(err.response.data.message);
    }
};
