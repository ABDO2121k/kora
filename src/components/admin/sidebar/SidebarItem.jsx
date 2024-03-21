import { useEffect, useState } from "react";
import NewspaperIcon from '@mui/icons-material/Newspaper';
import StadiumIcon from '@mui/icons-material/Stadium';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

export default function SidebarItem({ icon, text, active, alertV, expanded }) {
    const [img, setImg] = useState();
    useEffect(() => {
        switch (icon) {
            case "news":
                setImg(
                    <NewspaperIcon size={expanded && expanded && 20} />
                );
                break;
            case "stadium":
                setImg(
                    <StadiumIcon size={expanded && expanded && 20} />
                );
                break;
            case "planing":
                setImg(
                    <AccessTimeIcon size={expanded && expanded && 20} />
                );
                break;
        }
    }, [icon]);
    return (
        <>
            <li
                className={`
        relative flex items-center py-2 px-3 my-1
        font-medium rounded-md cursor-pointer
        transition-colors group
        ${active
                        ? "bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800"
                        : "hover:bg-indigo-50 text-gray-600 "
                    }
    `}
            >
                <span>{img}</span>

                <span
                    className={`overflow-hidden transition-all ${expanded ? "w-52 ml-3" : "w-0"
                        }`}
                >
                    {text}
                </span>
                {alertV && (
                    <div
                        className={`absolute right-2 w-2 h-2 rounded bg-[#ff1744] ${expanded ? "" : "top-2"
                            }`}
                    />
                )}

                {expanded == false && (
                    <div
                        className={`
          absolute left-full rounded-md px-2 py-1 ml-6
          z-[100] bg-indigo-100 text-[#ff1744] text-sm
          invisible opacity-20 -translate-x-3 transition-all
          group-hover:visible group-hover:opacity-100 group-hover:translate-x-0
          group-hover:z-100
      `}
                    >
                        {text}
                    </div>
                )}
            </li>
        </>
    );
}
