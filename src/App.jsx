import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/HomeP";
import Main from "./pages/Home/Main";
import Contact from "./pages/Home/Contact";
import News from "./pages/Home/News";
import Login from "./components/Login";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/l" element={<Login />}></Route>
        <Route path="/" element={<Home />}>
          <Route index element={<Main />} />
          <Route path="/" element={<Main />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/news" element={<News />} />
        </Route>
      </Routes>
    </div>
  );
};

export default App;
