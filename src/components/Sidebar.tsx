import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import AllRoutes from "../routes/AllRoutes";
import { FaLessThan } from "react-icons/fa6";
import { SiReact } from "react-icons/si";
import { MdHome } from "react-icons/md";
import { IoMdListBox } from "react-icons/io";
import { AiFillSchedule } from "react-icons/ai";
import { WiMoonAltWaningCrescent4 } from "react-icons/wi";

// interface MainLink {
//   to: string;
//   name: string;
// }

export const Sidebar = () => {
  const [bar, setBar] = useState<boolean>(false);
  const [showLogo, setShowLogo] = useState<boolean>(false);

  const handleToggle = () => {
    setBar(!bar);
    setShowLogo(!showLogo);
  };

  const links = [
    {
      to: "/",
      name: "Home",
      logo: <MdHome />,
    },
    {
      to: "/recommendation",
      name: "More Theme",
      logo: <IoMdListBox />,
    },
    {
      to: "/schedule",
      name: "Schedule",
      logo: <AiFillSchedule />,
    },
    {
      to: "/theme",
      name: "Theme",
      logo: <WiMoonAltWaningCrescent4 />,
    },
  ];

  return (
    <div className="flex">
      <div
        className={`${bar ? "w-72" : "w-28"} p-5 pt-8 duration-300 h-screen bg-gray-100 relative`}
      >
        <FaLessThan
          className={`absolute cursor-pointer top-9 w-6 h-6 p-1 -right-3 text-white bg-black rounded-full ${!bar && "rotate-180"}`}
          onClick={handleToggle}
        />
        <div className="flex gap-x-4 items-center">
          <SiReact className="text-4xl" />
          <h1 className={`origin-left duration-300 ${!showLogo && "hidden"}`}>
            Logo
          </h1>
        </div>
        <ul>
          {links.map((ele, index) => (
            <NavLink
              className={({ isActive }) => (isActive ? "bg-red" : "bg-blue")}
              to={ele.to}
              key={index}
            >
              <li className="flex items-center gap-x-4 mt-4 hover:bg-orange-200 duration-300 rounded-md">
                <div className="p-2 text-2xl">{ele.logo}</div>
                <p
                  className={`origin-left duration-300 ${!showLogo && "hidden"}`}
                >
                  {ele.name}
                </p>
              </li>
            </NavLink>
          ))}
        </ul>
      </div>
      <div className="p-7 text-2xl font-semibold h-screen w-screen">
        <AllRoutes />
      </div>
    </div>
  );
};
