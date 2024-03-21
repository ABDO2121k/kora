import axios from "axios";

export const senMessage = async (message) => {
  try {
    if (!message) return;
    let data;
    const thread = localStorage.getItem("thread");

    if (thread) {
      data = { message: message, thread: thread };
    } else {
      data = { message: message };
    }
    const response = await axios.post(
      "https://kora-chat-api.onrender.com/api",
      data
    );
    localStorage.setItem("thread", response.data?.thread);
    return response.data?.response;
  } catch (err) {
    throw new Error(err.response.data);
  }
};
