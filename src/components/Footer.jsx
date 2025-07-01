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
            <footer className="bg-neutral-800 text-white py-10 px-20">
                <div className="flex flex-col justify-between items-center">
                    {/* Navigation Links */}
                    <ul className="space-y-5 text-lg font-light">
                        <li className="hover:text-orange-500 cursor-pointer">Home</li>
                        <li className="hover:text-orange-500 cursor-pointer">About</li>
                        {/* <li className="hover:text-orange-500 cursor-pointer">Publications</li> */}
                        <li className="hover:text-orange-500 cursor-pointer">Blog</li>
                        <li className="hover:text-orange-500 cursor-pointer">Contact</li>
                    </ul>

                    {/* Copyright */}
                    <p className="mt-10 text-sm text-gray-400 text-center">
                        &copy; {new Date().getFullYear()} Pothuraju Hari Prasad. All rights reserved.
                    </p>
                </div>
            </footer>
        </>
    );
};

export default Footer;