import { useContext, useState } from 'react'
import { Link, NavLink } from 'react-router-dom';
import SidebarItem from './SidebarItem';
import LastPageIcon from '@mui/icons-material/LastPage';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import { myContext } from '../../../context/GlobalContext';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box, IconButton, Typography } from '@mui/material';
import SportsSoccerIcon from "@mui/icons-material/SportsSoccer"

const Sidebar2 = () => {
  const [expanded, setExpanded] = useState(true);
  const context = useContext(myContext)
  const [state, setState] = useState([
    {
      icon: "dashboard",
      link: "",
      text: "Dashboard",
      alert: "Dashboard",
    },{
      icon: "planing",
      link: "planing",
      text: "Plannings",
      alert: "Plannings",
    },
    {
      icon: "stadium",
      link: "stadium",
      text: "Stadiums",
      alert: "Stadiums",
    },
    {
      icon: "news",
      link: "news",
      text: "News",
      alert: "News",
    },
    {
      icon: "settings",
      link: "settings",
      text: "Settings",
      alert: "Settings",
    },
  ]);

  return (
    <aside className={`h-screen w-auto `}>
      <nav className="h-full flex flex-col bg-white border-r shadow-sm">
        <div className="p-4 pb-2 flex justify-between items-center">
          {expanded && <Link to={'/admin'}>
            <Box sx={{ gap: 2, display: "flex", alignItems: "center" }}>
              <IconButton variant="soft" color="primary" size="sm">
                <SportsSoccerIcon sx={{ color: "#ff1744" }} />
              </IconButton>
              <Typography level="title-lg" className='text-lg text-bold'>FtbHub</Typography>
            </Box>
          </Link>}
          <button
            onClick={() => setExpanded((curr) => !curr)}
            className="p-1.5 rounded-lg bg-gray-50 hover:bg-gray-100"
          >
            {expanded ? <FirstPageIcon /> : <LastPageIcon />}
          </button>
        </div>

        <ul className="flex-[0.78] px-3 ">
          {state.map((e, i) => (
            <NavLink exact to={`/admin/${e.link}`} key={i}>
              <SidebarItem
                icon={e.icon}
                alertV={e.alertV}
                active={e.active}
                expanded={expanded}
                text={e.text}
                key={i}
              />
            </NavLink>
          ))}
        </ul>

        <div className="border-t flex p-3">
          <p
            className="text-white p-3 w-10 h-10 bg-black  rounded-md"
          >
            {context?.currentUser ? `${context?.currentUser?.firstName[0].toUpperCase()}${context?.currentUser?.lastName[0].toUpperCase()}` : "AK"}
          </p>
          <div
            className={`
                  flex justify-between items-center
                  overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"}
              `}
          >
            <div className="leading-4">
              <h4 className="font-semibold">
                {context?.currentUser?.firstName} {context?.currentUser?.lastName}
              </h4>
              <span className="text-xs text-gray-600">
                {context?.currentUser?.email}
              </span>
            </div>
            <MoreVertIcon size={20} />
          </div>
        </div>
      </nav>
    </aside>
  );
}

export default Sidebar2