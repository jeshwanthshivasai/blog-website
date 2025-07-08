import Footer from "../components/Footer";
import Header from "../components/Header";

const AboutPage = () => {
    return (
        <>
            <Header/>
                <main id="about" className="bg-neutral-800 px-6 text-white">
                    <section className="relative max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start px-4 sm:px-8 lg:px-16 py-16">
                        {/* Left Text */}
                        <div className="relative z-10 w-full lg:w-1/2">
                            <div className="text-left">
                                <h1 className="lg:text-6xl sm:text-9xl font-extrabold leading-tight mb-6 z-[-1]">ABOUT ME.</h1>
                                <div className="h-2 bg-orange-500 absolute top-30 left-0 z-[-1] lg:w-xl md:w-full sm:w-full" />
                            </div>
                        </div>
                        {/* Right Image */}
                        <div className="w-full lg:w-full mt-10 lg:mt-0">
                            <img
                                src="https://images.squarespace-cdn.com/content/v1/5c6fd1c7c2ff616d47ed3809/c404d93c-aa04-4838-ab6d-2af4a3b8c153/orestis-georgiou.jpg"
                                alt="Hero"
                                className="w-full h-auto object-cover rounded-lg"
                            />
                        </div>
                    </section>
                </main>
            <Footer/>
        </>
    )
}

export default AboutPage;