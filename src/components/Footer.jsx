// const Footer = () => {
//     return (
//         <>
//             <footer>
//                 <div className="flex">
//                     <ul>
//                         <li>Home</li>
//                         <li>About</li>
//                         <li>Publications</li>
//                         <li>Blog</li>
//                         <li>Contact</li>
//                     </ul>
//                 </div>
//                 &copy; Pothuraju HariPrasad All 
//             </footer>
//         </>
//     )
// }

// export default Footer;


const Footer = () => {
    return (
        <>
            <footer className="bg-neutral-800 text-white py-10">
                <div className="flex flex-col justify-between items-center">
                    <div className="flex space-x-20 mt-5">
                        <ul className="flex space-x-10 text-lg font-light">
                            <a><li className="hover:text-orange-500 hover:underline hover:underline-offset-4 cursor-pointer">Home</li></a>
                            <a><li className="hover:text-orange-500 hover:underline hover:underline-offset-4 cursor-pointer">About</li></a>
                            {/* <a><li className="hover:text-orange-500 cursor-pointer">Publications</li></a> */}
                            <a><li className="hover:text-orange-500 hover:underline hover:underline-offset-4 cursor-pointer">Blog</li></a>
                            <a><li className="hover:text-orange-500 hover:underline hover:underline-offset-4 cursor-pointer">Contact</li></a>
                        </ul>
                        {/* <ul className="flex space-x-10 text-lg font-light">
                            <a><li className="hover:text-orange-500 hover:underline hover:underline-offset-4 cursor-pointer">Home</li></a>
                            <a><li className="hover:text-orange-500 hover:underline hover:underline-offset-4 cursor-pointer">About</li></a>
                            <a><li className="hover:text-orange-500 hover:underline hover:underline-offset-4 cursor-pointer">Blog</li></a>
                            <a><li className="hover:text-orange-500 hover:underline hover:underline-offset-4 cursor-pointer">Contact</li></a>
                        </ul> */}
                    </div>
                    <div>
                        <p className="text-lg text-orange-500 text-center mb-5 mt-10">
                            &copy; {new Date().getFullYear()} <span className="text-white font-bold">Pothuraju Hari Prasad.</span> All rights reserved.
                        </p>
                        <p className="text-sm text-orange-500 text-center mt-10 mb-5">| Designed & Developed | 
                            <span className="text-white">
                            <a href="https://jess-web-dev-portfolio.vercel.app/"> Jeshwanth Shiva Sai</a>
                            </span> |
                        </p>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;