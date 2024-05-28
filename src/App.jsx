import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/HomeP";
import Main from "./pages/Home/Main";
import Contact from "./pages/Home/Contact";
import News from "./pages/Home/News";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import NewsDetails from "./pages/Home/NewsDetails";
import Admin from "./pages/admin/AdminP";
import Planing from "./pages/admin/planing/Planing";
import DashBord from "./pages/admin/DashBord";
import Stadium from "./pages/admin/stadium/Stadium";
import NewsA from "./pages/admin/news/News";
import AddNews from "./pages/admin/news/AddNews";
import Settings from "./pages/admin/settings/Settings";
import AddStadium from "./pages/admin/stadium/AddStadium";
import StadiumPlaning from "./pages/admin/planing/StadiumPlaning";
import AddPlaning from "./pages/admin/planing/AddPlaning";


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
          <Route element={<DashBord />} />
          <Route path="/admin/planing" element={<Planing />} />
          <Route path="/admin/news" element={<NewsA />} />
          <Route path="/admin/news/add" element={<AddNews />} />
          <Route path="/admin/news/update/:id" element={<AddNews />} />
          <Route path="/admin/settings" element={<Settings />} />
          <Route path="/admin/stadium" element={<Stadium />} />
          <Route path="/admin/stadium/add" element={<AddStadium />} />
          <Route path="/admin/stadium/update/:id" element={<AddStadium />} />
          <Route path="/admin/stadium/planing/:idS" element={<StadiumPlaning />} />
          <Route path="/admin/stadium/planing/add/:idP" element={<AddPlaning />} />
        </Route>
        <Route path="/test" element={<Planing />} />
      </Routes>
    </div>
  );
};

export default App;
