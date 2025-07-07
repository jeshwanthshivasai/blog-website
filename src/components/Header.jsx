import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
    return (
        <>
            <nav 
                className="relative bg-neutral-800 flex justify-between items-center px-6 py-6"
                role="navigation"
                aria-label="Main Navigation"
            >
                <Link to="/" className="ml-10" aria-label="Go to Homepage">
                    <img 
                        src="https://images.squarespace-cdn.com/content/v1/5c6fd1c7c2ff616d47ed3809/1550839443584-XL6BMJZ93MCMRQX2BPGP/Orestis-Georgiou-logo-web-white.png" 
                        className="h-20 w-auto" 
                    />
                </Link>
                <ul className="hidden md:flex space-x-30 items-center text-orange-500 mr-20 text-lg">
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
                        tabIndex={0}
                        role="link"
                        to="/#contact" 
                        className="hover:text-white focus:text-white hover:underline hover:underline-offset-4 uppercase"
                        >
                            Contact
                        </HashLink>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Header;