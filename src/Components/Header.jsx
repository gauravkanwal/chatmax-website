import React from "react";
import { NavLink } from "react-router";
function Header() {
  return (
    <div className="py-5 pl-20 md:pl-200 pr-4">
      <div className="flex justify-around">
        <NavLink to="/chatmax" className={({ isActive }) =>
            ` text-lg md:text-base ${
              isActive ? "text-[var(--chatmax-color)]" : "text-white"
            } hover:text-[var(--chatmax-color)] hover:underline`
          }>Chatmax</NavLink>
        <NavLink to="/bichhoo-g4ng" className={({ isActive }) =>
            ` text-lg md:text-base ${
              isActive ? "text-[var(--bichhoo-color)]" : "text-white"
            } hover:text-[var(--bichhoo-color)] hover:underline`
          }>Bichhoo G4ng</NavLink>
        <NavLink to="/tofuss" className={({ isActive }) =>
            ` text-lg md:text-base ${
              isActive ? "text-[var(--tofuss-color)]" : "text-white"
            } hover:text-[var(--tofuss-color)] hover:underline`
          }>Tofuss</NavLink>
    </div>
    </div>
  );
}

export default Header;
