import { useContext, useState } from "react";
import { Bars3BottomRightIcon, XMarkIcon } from "@heroicons/react/24/solid";
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer";
import { Link, NavLink } from "react-router-dom";
import "./styles/Nav.css";
import { myContext } from "../../../context/GlobalContext";
import IconLogin from "./IconLogin";
// import ModalC from "./Modal";

const Nav = () => {
  let Links = [
    { name: "Home", link: "/" },
    { name: "News", link: "/news" },
    { name: "Contact", link: "/contact" },
  ];
  let [open, setOpen] = useState(false);

  const context = useContext(myContext)

  return (
    <div className="shadow-md w-full fixed top-0 left-0 z-50 h-[4rem]">
      <div className="md:flex items-center justify-between bg-white py-4 md:px-10 px-7">
        {/* logo section */}
        <div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
          <SportsSoccerIcon className="text-[#ff1744]" />
          <span>FtbHub</span>
        </div>
        {/* Menu icon */}
        <div
          onClick={() => setOpen(!open)}
          className="absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7"
        >
          {open ? <XMarkIcon /> : <Bars3BottomRightIcon />}
        </div>
        {/* linke items */}
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? "top-12" : "top-[-490px]"
            }`}
        >
          {Links.map((link, i) => (
            <li className="relative md:ml-8 md:my-0 my-7 font-semibold" key={i}>
              <NavLink
                to={link.link}
                className="text-gray-800 hover:text-red-400 duration-500 el"
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          {!context?.isLo ? (
            <Link to={'/login'} className="bg-[#ff1744] text-white md:ml-8 font-semibold px-3 py-1 rounded duration-500 md:static">
              Get Started
            </Link>

          ) : (
            <div className="ml-6">
              <IconLogin />
            </div>
          )}
        </ul>
        {/* button */}
      </div>
    </div>
  );
};

export default Nav;
