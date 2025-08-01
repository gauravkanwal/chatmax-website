import { NavLink } from "react-router";
function Header() {
  return (
      <div className="flex justify-around py-6 px-5">
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
  );
}

export default Header;
