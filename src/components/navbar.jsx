import { useState } from "react";
import logo from "../assets/logo-text.png"
import hamburger from "../assets/hamburger.png"
import closeButton from "../assets/close-button.png"



function Navbar() {
  // this tells us if the mobile menu is open or closed
  const [menuOpen, setMenuOpen] = useState(false);

  function toggleMenu() {
    setMenuOpen(!menuOpen);
  }

  return (
    <nav className=" container m-auto sticky top-0 z-50 bg-white shadow-md px-4 py-3 flex items-center justify-between">
      {/* Logo */}
      <div>
        <img src={logo} alt="Logo" className="h-8" />
      </div>

      {/* Links for big screens */}
      <ul className="hidden md:flex gap-6">
        <li>
          <a href="#" className="text-gray-700 hover:text-pink-600">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-700 hover:text-pink-600">
            Technologies
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-700 hover:text-pink-600">
            Projects
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-700 hover:text-pink-600">
            About
          </a>
        </li>
        <li>
          <a href="#" className="text-gray-700 hover:text-pink-600">
            Contact
          </a>
        </li>
      </ul>

      {/* Buttons for big screens */}
      <div className="hidden md:flex gap-4 items-center">
        <a href="#" className="text-gray-700">
          Sign In
        </a>
        <a
          href="#"
          className="bg-pink-600 text-white px-4 py-2 rounded-full"
        >
          Sign Up
        </a>
      </div>

      {/* Hamburger button for small screens */}
      <button onClick={toggleMenu} className="md:hidden">
        {menuOpen ? (
          <img src={closeButton} alt="Close menu" className="h-8" />
        ) : (
          <img src={hamburger} alt="Open menu" className="h-6" />
        )}
      </button>

      {/* Mobile menu - only shows when menuOpen is true */}
      {menuOpen && (
        <div className="absolute top-14 right-4 bg-white shadow-md rounded-lg p-4 flex flex-col gap-3 md:hidden">
          <a href="#" className="text-gray-700">
            Home
          </a>
          <a href="#" className="text-gray-700">
            Technologies
          </a>
          <a href="#" className="text-gray-700">
            Projects
          </a>
          <a href="#" className="text-gray-700">
            About
          </a>
          <a href="#" className="text-gray-700">
            Contact
          </a>
          <hr />
          <a href="#" className="text-gray-700">
            Sign In
          </a>
          <a
            href="#"
            className="bg-pink-600 text-white px-4 py-2 rounded-full text-center"
          >
            Sign Up
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;