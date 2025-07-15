import Footer from "../components/Footer";
import Header from "../components/Header";

import Curious from "../assets/Curious-bro.png"

const AboutPage = () => {
    return (
        <>
            <Header/>
                <main id="about" className="bg-neutral-800 px-6 text-white">
                    {/* <section className="relative max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start px-4 sm:px-8 lg:px-16 py-16 z-50"> */}
                        {/* Left Text */}
                        {/* <div className="relative z-10 w-full lg:w-1/2">
                            <div className="text-left">
                                <h1 className="lg:text-6xl text-5xl font-extrabold leading-tight mb-6 z-[-1]">ABOUT ME.</h1>
                                <div className="h-2 bg-orange-500 absolute top-30 left-0 z-[-1] sm:w-full lg:w-xl md:w-full " />
                            </div>
                            <p className="z-50 max-w-xl text-lg lg:text-xl font-light leading-relaxed mt-20">
                                Dr Orestis Georgiou is an author of 6 patents, 2 books, and 100+ academic papers that have been published in leading journals and conferences of Mathematics, Physics, Computer Science, Engineering and Medicine. He has also been co-awarded R&D grants in excess of €10 million, including a Marie Curie Individual Fellowship, and is the recipient of the prestigious 2019 IEEE Heinrich Hertz award. Finally, as Head of R&D Partnerships at Ultraleap, he is passionate about haptic technologies, networks, and spatial XR computing and oversees all our external R&D collaboration activities and grant-funded projects.
                            </p>
                        </div> */}
                        {/* Right Image */}
                        {/* <div className="w-full lg:w-full mt-10 lg:mt-0 -z-0">
                            <img
                                src="https://images.squarespace-cdn.com/content/v1/5c6fd1c7c2ff616d47ed3809/c404d93c-aa04-4838-ab6d-2af4a3b8c153/orestis-georgiou.jpg"
                                alt="Hero"
                                className="w-full h-auto object-cover rounded-lg"
                            />
                        </div>
                    </section> */}
                    <section className="max-w-7xl relative mx-auto flex flex-col lg:flex-row justify-between items-start lg:px-16 py-16">
                        {/* Left Text */}
                        <div className="w-full lg:w-1/2">
                            
                            {/* Heading and Line */}
                            <div className="w-full">
                            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
                                ABOUT ME.
                            </h1>
                            <div className="h-2 w-47 lg:w-3xl absolute bg-orange-500 lg:mt-5" />
                            </div>

                            {/* Paragraph that matches line width */}
                            <p className="text-base sm:text-lg lg:text-xl font-light leading-relaxed lg:w-139 mt-15 lg:mt-20">
                            Dr Orestis Georgiou is an author of 6 patents, 2 books, and 100+ academic papers that have been published in leading journals and conferences of Mathematics, Physics, Computer Science, Engineering and Medicine. He has also been co-awarded R&D grants in excess of €10 million, including a Marie Curie Individual Fellowship, and is the recipient of the prestigious 2019 IEEE Heinrich Hertz award. Finally, as Head of R&D Partnerships at Ultraleap, he is passionate about haptic technologies, networks, and spatial XR computing and oversees all our external R&D collaboration activities.
                            </p>
                        </div>

                        {/* Right Image */}
                        <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
                            <img
                            src="https://images.squarespace-cdn.com/content/v1/5c6fd1c7c2ff616d47ed3809/7c2c77a2-076f-44d7-8974-bb287c6a3c54/Orestis+Georgiou%2C+R%26D+management+expert%2C+in+a+professional+setting"
                            alt="Hero"
                            className="w-full h-auto object-cover rounded-lg"
                            />
                        </div>
                    </section>

                    <section className="max-w-7xl mx-auto mb-20 sm:px-8 lg:px-16 lg:py-16">
                        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-10">
                            {/* Left - Image */}
                            <div className="w-full lg:w-1/2 sm:flex-1">
                                <img
                                    src="https://images.squarespace-cdn.com/content/v1/5c6fd1c7c2ff616d47ed3809/a25a7f64-7cdb-484e-a23b-c1cdd79c6fd9/orestis-georgiou-office.jpg"
                                    alt="Orestis Georgiou"
                                    className="w-full h-auto object-cover rounded-lg"
                                />
                            </div>

                            {/* Right - Text */}
                            <div className="w-full lg:w-1/2">
                                <h1 className="text-4xl lg:text-5xl font-extrabold text-left">MY BACKGROUND.</h1>
                                {/* <div className="h-2 w-20 bg-orange-500 mt-3 mb-6"></div> */}
                                <div className="h-2 w-80 mt-4 lg:w-18 bg-orange-500 lg:mt-5" />
                                <p className="text-base sm:text-lg lg:text-xl font-light leading-relaxed mb-6 mt-10 lg:mt-10">
                                    Dr Orestis Georgiou is an author of 6 patents, 2 books, and 100+ academic papers that have been published in leading journals and conferences of Mathematics, Physics, Computer Science, Engineering and Medicine. He has also been co-awarded R&D grants in excess of €10 million, including a Marie Curie Individual Fellowship, and is the recipient of the prestigious 2019 IEEE Heinrich Hertz award. Finally, as Head of R&D Partnerships at Ultraleap, he is passionate about haptic technologies, networks, and spatial XR computing and oversees all our external R&D collaboration activities and grant-funded projects.
                                </p>
                            </div>
                        </div>
                    </section>

                    {/* <section className="relative max-w-7xl flex">
                        <img
                            src={Curious}
                            alt="Orestis Georgiou"
                            className="w-150 ml-300"
                        />
                        <div className="absolute text-left">
                            <p className="text-7xl max-w-250 text-white font-extralight mt-5 mb-15">
                                “I would rather have questions that can't be answered than answers that can't be questioned.”
                            </p>
                            <p className="text-7xl text-orange-500 font-extrabold">-RICHARD FEYNMAN</p>
                        </div>
                    </section> */}

                    <section className=" max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between sm:px-8 lg:px-15 gap-10">
                        {/* Quote text on the left */}
                        <div className="w-full lg:w-1/2">
                            <p className="text-4xl sm:text-4xl lg:text-7xl font-light text-white mb-8">
                                “I would rather have questions that can't be answered than answers that can't be questioned.”
                            </p>
                            <p className="text-4xl sm:text-3xl lg:text-5xl text-orange-500 font-extrabold">
                                -RICHARD FEYNMAN
                            </p>
                        </div>

                        {/* Illustration on the right */}
                        <div className="w-full lg:w-1/2 flex justify-end">
                            <img
                                src={Curious}
                                alt="Curious Illustration"
                                className="w-full max-w-xl h-auto object-contain"
                            />
                        </div>
                    </section>

                </main>
            <Footer/>
        </>
    )
}

export default AboutPage;