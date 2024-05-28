import { createContext, useEffect, useState } from "react";
import { senMessage } from './chat.js'
import { getNews, addNews, deleteNews, updateNews, addComment, addReply, addLike, addReplyLike, removeLike, removeReplyLike, getOneNews, removeComment, removeReply } from './news.js'
import { getCards, getOneCard, addCard, deleteCard, updateCard, getFaqs, getOneFaq, addFaq, deleteFaq, updateFaq, getSections, getOneSection, addSection, deleteSection, updateSection } from './parametres.js'
import { getStadiums, getOneStadium, addStadium, deleteStadium, updateStadium } from './stadium.js'
import { GetStadiumPlannings, GetCurrentPlaning, addPlaning, deletePlaning, updatePlaning } from "./planing.js";
import { paidR, addReservation, deleteReservation } from "./reservation.js";
import axios from "axios"

axios.defaults.withCredentials = true;




export const myContext = createContext(null);

const ContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLo, setLogged] = useState(false);

  //auth
  const login = async (inputs) => {
    try {
      const res = await axios.post("http://localhost:8000/api/user/login", inputs);
      setCurrentUser(res.data);
      console.log(currentUser)
      setLogged(true);
    } catch (err) {
      console.error(err.response.data.message);
      throw new Error(err.response.data.message);
    }
  };

  const signup = async (inputs) => {
    try {
      const res = await axios.post("http://localhost:8000/api/user/signup", inputs);
      return res
    } catch (err) {
      throw new Error(err.response.data.message);
    }
  };

  const logout = async () => {
    await axios.post("http://localhost:8000/api/user/logout");
    setCurrentUser(null);
    setLogged(false);
  };

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await axios.post("http://localhost:8000/api/user/verify");
        if (res.data) {
          setCurrentUser(res.data);
          setLogged(true);
        }
        return true;
      } catch (err) {
        return err;
      }
    };
    checkAuth();
  }, []);


  const dateChange = (dateV) => {
    const date = new Date(dateV);
    const options = { month: "long", day: "numeric", year: "numeric" };
    const formattedDate = date?.toLocaleDateString("en-US", options);
    return formattedDate
  }
  //end auth

  return (
    <myContext.Provider
      value={{
        senMessage,
        currentUser,
        isLo,
        login,
        signup,
        logout,
        getNews,
        addNews,
        deleteNews,
        updateNews,
        addComment,
        getOneNews,
        addReply,
        addLike,
        addReplyLike,
        removeLike,
        removeReplyLike,
        removeComment,
        removeReply,
        setCurrentUser,
        dateChange,
        getCards,
        getOneCard,
        addCard,
        deleteCard,
        updateCard,
        getFaqs,
        getOneFaq,
        addFaq,
        deleteFaq,
        updateFaq,
        getSections,
        getOneSection,
        addSection,
        deleteSection,
        updateSection,
        getStadiums,
        getOneStadium,
        addStadium,
        deleteStadium,
        updateStadium,
        GetStadiumPlannings,
        GetCurrentPlaning,
        addPlaning,
        deletePlaning,
        updatePlaning,
        paidR,
        addReservation,
        deleteReservation
      }}
    >
      {children}
    </myContext.Provider>
  );
};

export default ContextProvider;
