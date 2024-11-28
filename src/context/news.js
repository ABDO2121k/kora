import axios from 'axios'

export const getNews = async () => {
    try {
        const res = await axios.get("/api/news/allNews");
        return res.data
    } catch (err) {
        console.error(err.response.data.message);
        throw new Error(err.response.data.message);
    }
};


export const getOneNews = async (newsId) => {
    try {
        const res = await axios.get(`/api/news/one/${newsId}`);
        return res.data
    } catch (err) {
        console.error(err.response.data.message);
        throw new Error(err.response.data.message);
    }
};


export const addNews = async (data) => {
    try {
        const res = await axios.post("/api/news/addNews", data);
        return res.data
    } catch (err) {
        console.error(err.response.data.message);
        throw new Error(err.response.data.message);
    }
};

export const deleteNews = async (id) => {
    try {
        const res = await axios.delete(`/api/news/deleteNews/${id}`);
        return res.data
    } catch (err) {
        console.error(err.response.data.message);
        throw new Error(err.response.data.message);
    }
};

export const updateNews = async (newsId, data) => {
    try {
        const res = await axios.put("/api/news/updateNews", { newsId, data });
        return res.data
    } catch (err) {
        console.error(err.response.data.message);
        throw new Error(err.response.data.message);
    }
};

export const addComment = async (newsId, data) => {
    try {
        const res = await axios.post("/api/news/addComment", { newsId, data });
        return res.data
    } catch (err) {
        console.error(err.response.data.message);
        throw new Error(err.response.data.message);
    }
};


export const addReply = async (newsId, commentId, data) => {
    try {
        const res = await axios.post("/api/news/addReply", { newsId, commentId, data });
        return res.data
    } catch (err) {
        console.error(err.response.data.message);
        throw new Error(err.response.data.message);
    }
};

export const addLike = async (newsId, commentId) => {
    try {
        const res = await axios.put("/api/news/addLike", { newsId, commentId });
        return res.data
    } catch (err) {
        console.error(err.response.data.message);
        throw new Error(err.response.data.message);
    }
};

export const addReplyLike = async (newsId, commentId, replyId) => {
    try {
        const res = await axios.put("/api/news/addReplyLike", { newsId, commentId, replyId });
        return res.data
    } catch (err) {
        console.error(err.response.data.message);
        throw new Error(err.response.data.message);
    }
};


export const removeLike = async (newsId, commentId) => {
    try {
        const res = await axios.put("/api/news/removeLike", { newsId, commentId });
        return res.data
    } catch (err) {
        console.error(err.response.data.message);
        throw new Error(err.response.data.message);
    }
};

export const removeReplyLike = async (newsId, commentId, replyId) => {
    try {
        const res = await axios.put("/api/news/removeReplyLike", { newsId, commentId, replyId });
        return res.data
    } catch (err) {
        console.error(err.response.data.message);
        throw new Error(err.response.data.message);
    }
};



export const removeComment = async (newsId, commentId) => {
    try {
        const res = await axios.put("/api/news/removeComment", { newsId, commentId });
        return res.data
    } catch (err) {
        console.error(err.response.data.message);
        throw new Error(err.response.data.message);
    }
};

export const removeReply = async (newsId, commentId, replyId) => {
    try {
        const res = await axios.put("/api/news/removeReply", { newsId, commentId, replyId });
        return res.data
    } catch (err) {
        console.error(err.response.data.message);
        throw new Error(err.response.data.message);
    }
};