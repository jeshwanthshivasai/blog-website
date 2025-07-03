const Biography = () => {
    return (
        <>
            <main className="flex flex-col lg:flex-row min-h-screen">
                {/* Image Section */}
                <div className="w-full lg:w-1/2 h-80 lg:h-auto">
                    <img
                        src="https://images.squarespace-cdn.com/content/v1/5c6fd1c7c2ff616d47ed3809/466df5e6-c3c4-469d-981e-5183928c5a0d/orestis-georgiou-biography.jpg"
                        className="w-full h-full object-cover"
                        alt="Orestis Georgiou"
                    />
                </div>

                {/* Text Section */}
                <div className="w-full lg:w-1/2 flex flex-col bg-stone-100 px-6 sm:px-10 lg:px-20 py-10 justify-center">
                    <h1 className="text-3xl sm:text-4xl lg:text-5xl text-neutral-800 font-extrabold text-right">
                        BIOGRAPHY
                    </h1>
                    <div className="h-1 w-24 sm:w-32 mt-4 bg-orange-500 self-start lg:self-end"></div>

                    <p className="mt-6 text-base sm:text-lg lg:text-xl font-extralight leading-relaxed text-left">
                        Dr Orestis Georgiou is an author of 6 patents, 2 books, and 100+ academic papers that have been
                        published in leading journals and conferences of Mathematics, Physics, Computer Science,
                        Engineering and Medicine. He has also been co-awarded R&D grants in excess of €10 million,
                        including a Marie Curie Individual Fellowship, and is the recipient of the prestigious 2019 IEEE
                        Heinrich Hertz award. Finally, as Head of R&D Partnerships at Ultraleap, he is passionate about
                        haptic technologies, networks, and spatial XR computing and oversees all our external R&D
                        collaboration activities and grant-funded projects.
                    </p>

                    <div className="mt-6">
                        <a
                            href="#"
                            className="inline-block bg-orange-500 text-white font-extrabold rounded-full px-6 py-3 hover:bg-orange-600 transition"
                        >
                            About Me
                        </a>
                    </div>
                </div>
            </main>
        </>
    );
};

export default Biography;
