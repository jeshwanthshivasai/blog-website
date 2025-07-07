import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Header = () => {
    return (
        <>
            <nav 
                className="relative bg-neutral-800 flex justify-between items-center px-8 xl:px-12 py-6"
                role="navigation"
                aria-label="Main Navigation"
            >
                <Link to="/" className="ml-12" aria-label="Go to Homepage">
                    <img 
                        src="https://images.squarespace-cdn.com/content/v1/5c6fd1c7c2ff616d47ed3809/1550839443584-XL6BMJZ93MCMRQX2BPGP/Orestis-Georgiou-logo-web-white.png" 
                        alt="hari prasad logo"
                        className="h-16 xl:h-20 w-auto" 
                    />
                </Link>
                <ul className="hidden lg:flex space-x-10 xl:space-x-16 2xl:space-x-20 items-center text-orange-500 text-lg xl:text-xl">
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