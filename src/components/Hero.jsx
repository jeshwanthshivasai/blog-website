const Hero = () => {
    return (
        <>
            <main className="bg-neutral-800 flex text-white">
                <div className="relative inline-block z-1">
                    <div>
                        <p className="mt-35 ml-20 text-3xl">ORESTIS GEORGIOU</p>
                        <div className="h-2 w-6xl mt-10 ml-20 bg-orange-500"></div>
                    </div>
                    <div className="flex justify-end text-9xl mt-10 mr-40">
                        <ul className="space-y-5 text-right font-extrabold">
                            <li>RESEARCHER.</li>
                            <li>INVENTOR.</li>
                            <li>AUTHOR.</li>
                        </ul>
                    </div>
                    <div>
                        <p className="ml-20 mt-60 text-3xl font-extralight text-left z-10 w-7xl pb-50"><span className="text-5xl text-orange-500 font-extrabold mb-50">Hello there,</span><br/><br/>I am Hari Prasad from Telangana state, India. Completed my graduation from IIT Bombay in Electrical engineering in 2018. Currently working as R&D Engineer at Daikin Industries Ltd in Osaka, Japan.</p>
                    </div>
                </div>
                <div className="absolute -z-0  ml-230 h-220">
                    <img src="https://images.squarespace-cdn.com/content/v1/5c6fd1c7c2ff616d47ed3809/c404d93c-aa04-4838-ab6d-2af4a3b8c153/orestis-georgiou.jpg"/>
                </div>
            </main>
        </>
    )
}

export default Hero