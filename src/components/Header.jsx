import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    //   const navItems = ["Home", "About", "Blog", "Contact"];

    return (
    <>
        <nav
        className="relative z-50 bg-neutral-800 px-6 py-6 flex justify-between items-center"
        role="navigation"
        aria-label="Main Navigation"
        >
        <Link to="/" aria-label="Go to Homepage">
            <img
            src="https://images.squarespace-cdn.com/content/v1/5c6fd1c7c2ff616d47ed3809/1550839443584-XL6BMJZ93MCMRQX2BPGP/Orestis-Georgiou-logo-web-white.png"
            className="h-20 w-auto ml-10"
            />
        </Link>

        {/* Desktop nav */}
        {/* <ul className="hidden md:flex space-x-8 text-orange-500 text-lg mr-10">
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
        </ul> */}

        <ul className="hidden md:flex space-x-14 text-orange-500 mr-10 text-lg">
            <li>
                <Link 
                    to="/" 
                    className="hover:text-white focus:text-white hover:underline hover:underline-offset-4 uppercase"
                >
                    Home
                </Link>
            </li>
            <li>
                <Link 
                    to="/about"
                    className="hover:text-white focus:text-white hover:underline hover:underline-offset-4 uppercase"
                >
                    About
                </Link>
            </li>
            <li>
                <Link 
                    to="/blogs" 
                    className="hover:text-white focus:text-white hover:underline hover:underline-offset-4 uppercase"
                >
                    Blog
                </Link>
            </li>
            <li>
                <HashLink
                    smooth
                    to="/#contact"
                    className="hover:text-white focus:text-white hover:underline hover:underline-offset-4 uppercase"
                >
                    Contact
                </HashLink>
            </li>
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
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
                />
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
                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
                />
            </svg>
            )}
        </button>

        {/* Mobile menu */}
        {/* {isOpen && (
        // <ul className="absolute top-full right-0 mt-2 w-48 bg-neutral-800 rounded-md shadow-lg py-2 flex flex-col space-y-2 text-orange-500 z-50">
        //     {navItems.map((item) => (
        //     <li key={item}>
        //         <a
        //         href={`#${item.toLowerCase()}`}
        //         className="block px-4 py-2 uppercase hover:bg-orange-500 hover:text-white transition rounded"
        //         onClick={() => setIsOpen(false)} // close on click
        //         >
        //         {item}
        //         </a>
        //     </li>
        //     ))}
        // </ul>
        <div>
            
        </div>
        )} */}

        {isOpen && (
        <div className="absolute top-full left-0 w-full h-[calc(100vh-6rem)] bg-neutral-800 z-40 flex flex-col items-center justify-center space-y-6 text-white text-lg uppercase tracking-widest">
            {/* Menu items */}
            <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="hover:text-orange-400"
            >
            Home
            </Link>
            <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="hover:text-orange-400"
            >
            About
            </Link>
            <Link
            to="/blogs"
            onClick={() => setIsOpen(false)}
            className="hover:text-orange-400"
            >
            Blog
            </Link>
            <HashLink
            smooth
            to="/#contact"
            className="hover:text-orange-400 uppercase focus:outline-none"
            >
            Contact
            </HashLink>
        </div>
        )}
        </nav>
    </>
    );
};

export default Header;
