const Header = () => {
    return (
        <>
            <nav className="bg-neutral-800 flex justify-between px-6 py-3">
                <img src="https://images.squarespace-cdn.com/content/v1/5c6fd1c7c2ff616d47ed3809/1550839443584-XL6BMJZ93MCMRQX2BPGP/Orestis-Georgiou-logo-web-white.png" className="h-20 w-auto ml-10" />
                <ul className="flex space-x-20 items-center text-orange-500 mr-20 ">
                    <li><a href="#home" className="hover:text-white hover:underline-offset-2 decoration-2 decoration-white uppercase text-sm">Home</a></li>
                    <li><a href="#about" className="hover:text-white hover:underline-offset-2 decoration-2 decoration-white uppercase text-sm">About</a></li>
                    <li><a href="#publications" className="hover:text-white hover:underline-offset-2 decoration-2 decoration-white uppercase text-sm">Publications</a></li>
                    <li><a href="#blog" className="hover:text-white hover:underline-offset-2 decoration-2 decoration-white uppercase text-sm">Blog</a></li>
                    <li><a href="#contact" className="hover:text-white hover:underline-offset-2 decoration-2 decoration-white uppercase text-sm">Contact</a></li>
                </ul>
            </nav>
        </>
    )
}

export default Header;