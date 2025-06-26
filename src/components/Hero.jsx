const Hero = () => {
    return (
        <>
            <main className="bg-neutral-800 flex h-screen">
                <div className="flex flex-col w-1/2 justify-center z-20 ml-12 ">
                    <h1 className=" text-white text-2xl font-normal tracking-widest mb-6">ORESTIS GEORGIOU</h1>
                   
                     <div className="bg-orange-400 h-1 "></div>
                      <h1 className="text-8xl font-bold text-white leading-tight text-right">
                            RESEARCHER.
                            <br />
                            INVENTOR.
                            <br />
                            AUTHOR.
                         </h1>

                </div>
                   

                <div className="w-1/2 z-10 absolute right-0">
                <img src="https://images.squarespace-cdn.com/content/v1/5c6fd1c7c2ff616d47ed3809/c404d93c-aa04-4838-ab6d-2af4a3b8c153/orestis-georgiou.jpg" className="object-cover w-full " />
                </div>
          
            </main>
        </>
    )
}

export default Hero

/* 
DO NOT USE CHAT GPT FINAL WARNING  */







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
