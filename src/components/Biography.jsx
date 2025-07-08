// const Biography = () => {
//     return (
//         <>
//             <main className="relative flex py-5 sm:px-6 lg:px-20 text-white bg-neutral-800 justify-around">
//                 <div className="max-w-7xl flex">
//                     <div className="w-2xl -z-0">
//                         <img src="https://images.squarespace-cdn.com/content/v1/5c6fd1c7c2ff616d47ed3809/466df5e6-c3c4-469d-981e-5183928c5a0d/orestis-georgiou-biography.jpg" className="w-full h-full object-cover"/>
//                     </div>
//                     <div className="absolute w-full h-full">
//                         <h1 className="text-5xl font-extrabold text-right mt-30">BIOGRAPHY</h1>
//                         <div className="h-2 w-4xl mt-5 bg-orange-500"></div>
//                         <p className="p-20 w-4xl text-2xl text-left font-extralight leading-relaxed">Dr Orestis Georgiou is an author of 6 patents, 2 books, and 100+ academic papers that have been published in leading journals and conferences of Mathematics, Physics, Computer Science, Engineering and Medicine. He has also been co-awarded R&D grants in excess of €10 million, including a Marie Curie Individual Fellowship, and is the recipient of the prestigious 2019 IEEE Heinrich Hertz award. Finally, as Head of R&D Partnerships at Ultraleap, he is passionate about haptic technologies, networks, and spatial XR computing and oversees all our external R&D collaboration activities and grant-funded projects.</p>
//                         <button className="text-white font-extrabold bg-orange-500 w-40 mt-5 ml-20 rounded-full p-5"><a href="">About Me</a></button>
//                 </div>
//                 </div>
//             </main>
//         </>
//     )
// }

// export default Biography;

const Biography = () => {
    return (
        <main className="bg-neutral-800 text-white py-10 px-6 sm:mr-3 w-full">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-10">
                {/* Left - Image */}
                <div className="w-full lg:w-1/2">
                    <img
                        src="https://images.squarespace-cdn.com/content/v1/5c6fd1c7c2ff616d47ed3809/466df5e6-c3c4-469d-981e-5183928c5a0d/orestis-georgiou-biography.jpg"
                        alt="Orestis Georgiou"
                        className="w-full h-auto object-cover rounded-lg"
                    />
                </div>

                {/* Right - Text */}
                <div className="w-full lg:w-1/2 my-auto">
                    <h1 className="text-4xl lg:text-5xl font-extrabold text-left">BIOGRAPHY</h1>
                    <div className="h-2 w-20 bg-orange-500 mt-3 mb-6"></div>
                    <p className="text-lg lg:text-xl font-light leading-relaxed mb-6">
                        Dr Orestis Georgiou is an author of 6 patents, 2 books, and 100+ academic papers that have been published in leading journals and conferences of Mathematics, Physics, Computer Science, Engineering and Medicine. He has also been co-awarded R&D grants in excess of €10 million, including a Marie Curie Individual Fellowship, and is the recipient of the prestigious 2019 IEEE Heinrich Hertz award. Finally, as Head of R&D Partnerships at Ultraleap, he is passionate about haptic technologies, networks, and spatial XR computing and oversees all our external R&D collaboration activities and grant-funded projects.
                    </p>
                    <button className="bg-orange-500 text-white font-bold py-3 px-6 rounded-full hover:bg-orange-600 transition duration-300">
                        <a href="/about">About Me</a>
                    </button>
                </div>
            </div>
        </main>
    );
};

export default Biography;
