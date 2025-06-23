const Hero = () => {
    return (
        <>
            <main className="bg-neutral-800 flex text-white ">
                <div>
                    <div className="relative inline-block ">
                        <p className="mt-35 ml-20 text-2xl underline decoration-orange-500 decoration-[5px] underline-offset-45">ORESTIS GEORGIOU</p>
                    </div>
                    <div className="flex justify-end text-9xl mt-20">
                        <ul>
                            <li className="text-right">RESEARCHER.</li>
                            <li className="text-right mt-5">INVENTOR.</li>
                            <li className="text-right mt-5">AUTHOR.</li>
                        </ul>
                    </div>
                    <div>
                        <p className="ml-20 mt-60 text-3xl text-left">Hello there, I am Hari Prasad from Telangana state, India. Completed my graduation from IIT Bombay in Electrical engineering in 2018.<br/> Currently working as R&D Engineer at Daikin Industries Ltd in Osaka, Japan.</p>
                    </div>
                </div>
                <img src="https://images.squarespace-cdn.com/content/v1/5c6fd1c7c2ff616d47ed3809/c404d93c-aa04-4838-ab6d-2af4a3b8c153/orestis-georgiou.jpg" className="h-220" />
            </main>
        </>
    )
}

export default Hero


// const Hero = () => {
//   return (
//     <main className="flex bg-neutral-800 text-white min-h-screen">
//       {/* Left Section */}
//       <div className="w-1/2 flex flex-col justify-center px-10">
//         {/* Name + underline */}
//         <div className="mb-6">
//           <p className="text-sm tracking-wider">ORESTIS GEORGIOU</p>
//           <div className="w-[300px] h-[3px] bg-orange-500 mt-2" />
//         </div>

//         {/* List */}
//         <ul className="text-5xl font-extrabold space-y-5 text-left">
//           <li>RESEARCHER.</li>
//           <li>INVENTOR.</li>
//           <li>AUTHOR.</li>
//         </ul>

//         {/* Paragraph */}
//         <div className="mt-10 max-w-xl text-base">
//           <p>
//             An experienced researcher, inventor, and author, with a track record at leading R&D teams, writing winning
//             grant proposals, whilst being passionate about deep-tech innovation that leads to impact.
//           </p>
//         </div>
//       </div>

//       {/* Right Section: Image */}
//       <div className="w-1/2 h-full">
//         <img
//           src="https://images.squarespace-cdn.com/content/v1/5c6fd1c7c2ff616d47ed3809/c404d93c-aa04-4838-ab6d-2af4a3b8c153/orestis-georgiou.jpg"
//           alt="Orestis Georgiou"
//           className="w-full h-full object-cover"
//         />
//       </div>
//     </main>
//   );
// };

// export default Hero;
