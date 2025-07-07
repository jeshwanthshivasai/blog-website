// const Hero = () => {
//     return (
//         <>
//             <main className="relative bg-neutral-800 text-white overflow-hidden px-4 py-10 sm:px-6 lg:px-20">
//                 <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
//                     {/* Left Section */}
//                     <div className="z-10 flex-1 space-y-10">
//                         <div>
//                             <p className="text-2xl sm:text-3xl lg:text-4xl font-bold leading-relaxed">HARI PRASAD</p>
//                             <div className="h-2 sm:w-7xl mt-10 bg-orange-500 ml-2 lg:ml-0"></div>
//                         </div>

//                         <div className="text-4xl sm:text-7xl lg:text-8xl font-extrabold text-right lg:text-left">
//                             <ul className="space-y-2">
//                                 <li>RESEARCHER.</li>
//                                 <li>INVENTOR.</li>
//                                 <li>AUTHOR.</li>
//                             </ul>
//                         </div>

//                         {/* Right Section - Image */}
//                         <div className="relative -z-1 flex justify-end">
//                             <img
//                                 className="w-full max-w-lg object-cover rounded-lg"
//                                 src="https://images.squarespace-cdn.com/content/v1/5c6fd1c7c2ff616d47ed3809/c404d93c-aa04-4838-ab6d-2af4a3b8c153/orestis-georgiou.jpg"
//                                 alt="Hari Prasad"
//                             />
//                             <p className="text-lg lg:text-xl font-light leading-relaxed mb-6">
//                                 <span className="text-3xl sm:text-4xl text-orange-500 font-extrabold block mb-4">Hello there,</span>
//                                 I am Hari Prasad from Telangana state, India. Completed my graduation from IIT Bombay in Electrical engineering in 2018. Currently working as R&D Engineer at Daikin Industries Ltd in Osaka, Japan.
//                             </p>
//                         </div>
//                     </div>
//                 </div>
//             </main>
//         </>
//     )
// }


// export default Hero


const Hero = () => {
    return (
        <main className="bg-neutral-800 text-white py-20 px-6">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-10">
                {/* Left - Image */}
                <div className="w-full lg:w-1/2">
                    <img
                        src="https://images.squarespace-cdn.com/content/v1/5c6fd1c7c2ff616d47ed3809/c404d93c-aa04-4838-ab6d-2af4a3b8c153/orestis-georgiou.jpg"
                        alt="Hari Prasad"
                        className="w-full h-auto object-cover rounded-lg"
                    />
                </div>

                {/* Right - Text */}
                <div className="w-full lg:w-1/2 space-y-6">
                    <div>
                        <p className="text-2xl sm:text-3xl lg:text-4xl font-bold">HARI PRASAD</p>
                        <div className="h-1 w-21 bg-orange-500 mt-6 mb-6" />
                    </div>

                    <div className="text-4xl sm:text-6xl lg:text-7xl lg:mb-30 sm:mb-10 font-extrabold space-y-2">
                        <p>RESEARCHER.</p>
                        <p>INVENTOR.</p>
                        <p>AUTHOR.</p>
                        <div className="h-1 lg:w-150 sm:w-50 bg-orange-500 mt-6 mb-6" />
                    </div>

                    <div>
                        <p className="text-3xl sm:text-4xl text-orange-500 font-extrabold mb-3">Hello there,</p>
                        <p className="text-lg lg:text-xl font-light leading-relaxed">
                            I am Hari Prasad from Telangana state, India. Completed my graduation from IIT Bombay in Electrical engineering in 2018. Currently working as R&D Engineer at Daikin Industries Ltd in Osaka, Japan.
                        </p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Hero;
