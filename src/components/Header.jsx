const Header = () => {
    return (
        <>
            <nav 
                className="bg-neutral-800 flex justify-between items-center px-6 py-6"
                role="navigation"
                aria-label="Main Navigation"
            >
                <a href="#home" className="ml-10" aria-label="Go to Homepage">
                    <img 
                        src="https://images.squarespace-cdn.com/content/v1/5c6fd1c7c2ff616d47ed3809/1550839443584-XL6BMJZ93MCMRQX2BPGP/Orestis-Georgiou-logo-web-white.png" 
                        className="h-20 w-auto" 
                    />
                </a>
                <ul className="flex space-x-30 items-center text-orange-500 mr-20 text-lg">
                    <li>
                        <a 
                        href="#home" 
                        className="hover:text-white focus:text-white hover:underline hover:underline-offset-4 uppercase"
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a 
                        href="#about"
                        className="hover:text-white focus:text-white hover:underline hover:underline-offset-4 uppercase"
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a 
                        href="#blog" 
                        className="hover:text-white focus:text-white hover:underline hover:underline-offset-4 uppercase"
                        >
                            Blog
                        </a>
                    </li>
                    <li>
                        <a 
                        href="#contact" 
                        className="hover:text-white focus:text-white hover:underline hover:underline-offset-4 uppercase"
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default Header;