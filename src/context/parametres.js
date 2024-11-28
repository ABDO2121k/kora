import axios from "axios"



export const getCards = async () => {
    try {
        const res = await axios.get("/api/parametres/getCards");
        return res.data
    } catch (err) {
        console.error(err.response.data.message);
        throw new Error(err.response.data.message);
    }
};


export const getOneCard = async (cardId) => {
    try {
        const res = await axios.post(`/api/parametres/getOneCard/${cardId}`);
        return res.data
    } catch (err) {
        console.error(err.response.data.message);
        throw new Error(err.response.data.message);
    }
};


export const addCard = async (data) => {
    try {
        const res = await axios.post("/api/parametres/addCard", data);
        return res.data
    } catch (err) {
        console.error(err.response.data.message);
        throw new Error(err.response.data.message);
    }
};

export const deleteCard = async (id) => {
    try {
        const res = await axios.delete(`/api/parametres/deleteCard/${id}`);
        return res.data
    } catch (err) {
        console.error(err.response.data.message);
        throw new Error(err.response.data.message);
    }
};

export const updateCard = async (cardId, data) => {
    try {
        const res = await axios.put("/api/parametres/updateCard", { cardId, data });
        return res.data
    } catch (err) {
        console.error(err.response.data.message);
        throw new Error(err.response.data.message);
    }
};


// faq
export const getFaqs = async () => {
    try {
        const res = await axios.get("/api/parametres/getFaqs");
        return res.data
    } catch (err) {
        console.error(err.response.data.message);
        throw new Error(err.response.data.message);
    }
};


export const getOneFaq = async (faqId) => {
    try {
        const res = await axios.post(`/api/parametres/getOneFaq/${faqId}`);
        return res.data
    } catch (err) {
        console.error(err.response.data.message);
        throw new Error(err.response.data.message);
    }
};


export const addFaq = async (data) => {
    try {
        const res = await axios.post("/api/parametres/addFaq", data);
        return res.data
    } catch (err) {
        console.error(err.response.data.message);
        throw new Error(err.response.data.message);
    }
};

export const deleteFaq = async (id) => {
    try {
        const res = await axios.delete(`/api/parametres/deleteFaq/${id}`);
        return res.data
    } catch (err) {
        console.error(err.response.data.message);
        throw new Error(err.response.data.message);
    }
};

export const updateFaq = async (faqId, data) => {
    try {
        const res = await axios.put("/api/parametres/updateFaq", { faqId, data });
        return res.data
    } catch (err) {
        console.error(err.response.data.message);
        throw new Error(err.response.data.message);
    }
};


// section

export const getSections = async () => {
    try {
        const res = await axios.get("/api/parametres/getSections");
        return res.data
    } catch (err) {
        console.error(err.response.data.message);
        throw new Error(err.response.data.message);
    }
};


export const getOneSection = async (sectionId) => {
    try {
        const res = await axios.post(`/api/parametres/getOneSection/${sectionId}`);
        return res.data
    } catch (err) {
        console.error(err.response.data.message);
        throw new Error(err.response.data.message);
    }
};


export const addSection = async (data) => {
    try {
        const res = await axios.post("/api/parametres/addSection", data);
        return res.data
    } catch (err) {
        console.error(err.response.data.message);
        throw new Error(err.response.data.message);
    }
};

export const deleteSection = async (id) => {
    try {
        const res = await axios.delete(`/api/parametres/deleteSection/${id}`);
        return res.data
    } catch (err) {
        console.error(err.response.data.message);
        throw new Error(err.response.data.message);
    }
};

export const updateSection = async (sectionId, data) => {
    try {
        const res = await axios.put("/api/parametres/updateSection", { sectionId, data });
        return res.data
    } catch (err) {
        console.error(err.response.data.message);
        throw new Error(err.response.data.message);
    }
};