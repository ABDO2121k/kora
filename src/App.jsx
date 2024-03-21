import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/HomeP";
import Main from "./pages/Home/Main";
import Contact from "./pages/Home/Contact";
import News from "./pages/Home/News";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import NewsDetails from "./pages/Home/NewsDetails";
import Admin from "./pages/admin/AdminP";
import Planing from "./pages/admin/Planing";
import DashBord from "./pages/admin/DashBord";
import NewsA from "./pages/admin/News";
import Stadium from "./pages/admin/Stadium";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={<Home />}>
          <Route index element={<Main />} />
          <Route path="/" element={<Main />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
          <Route path="/news/:id" element={<NewsDetails />} />
        </Route>
        <Route path="/admin" element={<Admin />}>
          <Route index element={<DashBord />} />
          <Route  element={<DashBord />} />
          <Route path="/admin/planing" element={<Planing />} />
          <Route path="/admin/news" element={<NewsA />} />
          <Route path="/admin/stadium" element={<Stadium />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
