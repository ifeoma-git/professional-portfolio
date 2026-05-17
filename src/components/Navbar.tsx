import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? "text-blue-600 font-semibold"
      : "text-gray-600 hover:text-blue-600 transition";

  return (
    <nav className="w-full border-b bg-white sticky top-0 z-50">

      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">

        {/* LOGO */}
        <div className="font-bold text-xl text-gray-900">
          Portfolio
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-6 items-center">

          <NavLink to="/" className={linkClass}>
            Home
          </NavLink>

          <NavLink to="/projects" className={linkClass}>
            Projects
          </NavLink>

          <NavLink to="/about" className={linkClass}>
            About
          </NavLink>

          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>

        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-gray-700 text-2xl"
        >
          ☰
        </button>

      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-3">

          <NavLink onClick={() => setOpen(false)} to="/" className={linkClass}>
            Home
          </NavLink>

          <NavLink onClick={() => setOpen(false)} to="/projects" className={linkClass}>
            Projects
          </NavLink>

          <NavLink onClick={() => setOpen(false)} to="/about" className={linkClass}>
            About
          </NavLink>

          <NavLink onClick={() => setOpen(false)} to="/contact" className={linkClass}>
            Contact
          </NavLink>

        </div>
      )}

    </nav>
  );
}