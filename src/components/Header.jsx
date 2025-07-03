import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = ["Home", "About", "Blog", "Contact"];

  return (
    <nav
      className="relative bg-neutral-800 px-6 py-6 flex justify-between items-center"
      role="navigation"
      aria-label="Main Navigation"
    >
      <a href="#home" className="ml-4 sm:ml-10" aria-label="Go to Homepage">
        <img
          src="https://images.squarespace-cdn.com/content/v1/5c6fd1c7c2ff616d47ed3809/1550839443584-XL6BMJZ93MCMRQX2BPGP/Orestis-Georgiou-logo-web-white.png"
          alt="Orestis Georgiou Logo"
          className="h-16 sm:h-20 w-auto"
        />
      </a>

      {/* Desktop nav */}
      <ul className="hidden md:flex space-x-8 text-orange-500 text-lg mr-10">
        {navItems.map((item) => (
          <li key={item}>
            <a
              href={`#${item.toLowerCase()}`}
              className="uppercase hover:text-white focus:text-white hover:underline hover:underline-offset-4 transition"
            >
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* Burger menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex items-center justify-center w-10 h-10 text-orange-500 focus:outline-none"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile menu */}
      {isOpen && (
        <ul className="absolute top-full right-0 mt-2 w-48 bg-neutral-800 rounded-md shadow-lg py-2 flex flex-col space-y-2 text-orange-500 z-50">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="block px-4 py-2 uppercase hover:bg-orange-500 hover:text-white transition rounded"
                onClick={() => setIsOpen(false)} // close on click
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Header;
