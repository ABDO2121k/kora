import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/HomeP";
import Main from "./pages/Home/Main";
import Contact from "./pages/Home/Contact";
import News from "./pages/Home/News";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import NewsDetails from "./pages/Home/NewsDetails";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<SignUp />}/>
        <Route path="/" element={<Home />}>
          <Route index element={<Main />} />
          <Route path="/" element={<Main />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsDetails />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
