import { Link } from "react-router-dom"
import { HashLink } from "react-router-hash-link";

const Footer = () => {
    return (
        <>
            <footer className="bg-neutral-800 text-white py-10">
                <div className="flex flex-col justify-between items-center">
                    <div className="flex space-x-20 mt-5">
                        <ul className="flex space-x-10 text-lg font-light">
                        <li>
                            <Link
                                className="hover:text-orange-500 hover:underline hover:underline-offset-4 cursor-pointer"
                                to="/"
                                >
                                    Home
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="hover:text-orange-500 hover:underline hover:underline-offset-4 cursor-pointer"
                                to="/about"
                                >
                                    About
                            </Link>
                        </li>
                        <li>
                            <Link
                                className="hover:text-orange-500 hover:underline hover:underline-offset-4 cursor-pointer"
                                to="/blogs"
                                >
                                    Blog
                            </Link>
                        </li>
                        <li>
                            <HashLink 
                                className="hover:text-orange-500 hover:underline hover:underline-offset-4 cursor-pointer"
                                smooth
                                to="/#contact"
                                >
                                    Contact
                            </HashLink>
                        </li>
                        </ul>
                    </div>
                    <div>
                        <p className="text-lg text-orange-500 text-center mb-5 mt-10">
                            &copy; {new Date().getFullYear()} <span className="text-white font-bold">Potharaju Hari Prasad.</span> All rights reserved.
                        </p>
                        <p className="text-sm text-white text-center mt-10 mb-5">
                            <span className="text-orange-500 text-lg">| </span>Designed & Developed 
                            <span className="text-orange-500 text-lg"> | </span> 
                            <span className="text-white">
                                <a href="https://jess-web-dev-portfolio.vercel.app/">Jeshwanth Shiva Sai</a>
                            </span> 
                            <span className="text-orange-500 text-lg"> |</span>
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;