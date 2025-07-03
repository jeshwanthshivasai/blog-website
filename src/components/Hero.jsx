const Hero = () => {
    return (
        <>
            <main className="bg-neutral-800 text-white relative overflow-hidden px-4 py-10 sm:px-6 lg:px-20">
                <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center gap-10">
                    {/* Left Section */}
                    <div className="relative z-10 flex-1 space-y-10">
                        <div>
                            <p className="text-2xl sm:text-3xl lg:text-4xl ml-2 lg:ml-0">ORESTIS GEORGIOU</p>
                            <div className="h-1 w-32 sm:w-48 mt-4 bg-orange-500 ml-2 lg:ml-0"></div>
                        </div>

                        <div className="text-4xl sm:text-6xl lg:text-8xl font-extrabold text-right lg:text-left">
                            <ul className="space-y-2">
                                <li>RESEARCHER.</li>
                                <li>INVENTOR.</li>
                                <li>AUTHOR.</li>
                            </ul>
                        </div>

                        <div>
                            <p className="text-base sm:text-lg lg:text-xl font-light leading-relaxed">
                                <span className="text-3xl sm:text-4xl text-orange-500 font-extrabold block mb-4">Hello there,</span>
                                I am Hari Prasad from Telangana state, India. Completed my graduation from IIT Bombay in Electrical engineering in 2018. Currently working as R&D Engineer at Daikin Industries Ltd in Osaka, Japan.
                            </p>
                        </div>
                    </div>

                    {/* Right Section - Image */}
                    <div className="relative z-0 flex-1">
                        <img
                            className="w-full h-auto object-cover rounded-lg shadow-lg"
                            src="https://images.squarespace-cdn.com/content/v1/5c6fd1c7c2ff616d47ed3809/c404d93c-aa04-4838-ab6d-2af4a3b8c153/orestis-georgiou.jpg"
                            alt="Orestis Georgiou"
                        />
                    </div>
                </div>
            </main>
        </>
    )
}




export default Hero