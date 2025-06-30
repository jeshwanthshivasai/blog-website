const Biography = () => {
    return (
        <>
            <main className="flex h-screen relative justify-evenly">
                <div className="w-1/2 -z-1">
                    <img src="https://images.squarespace-cdn.com/content/v1/5c6fd1c7c2ff616d47ed3809/466df5e6-c3c4-469d-981e-5183928c5a0d/orestis-georgiou-biography.jpg" className="w-full h-full object-cover"/>
                </div>
                <div className="w-1/2 flex flex-col bg-stone-100">
                    <h1 className="text-5xl text-neutral-800 font-extrabold text-right mr-35 mt-30">BIOGRAPHY</h1>
                    <div className="h-2 w-3xl mt-5 ml-20 bg-orange-500"></div>
                    <p className="p-20 w-4xl text-2xl text-left font-extralight">Dr Orestis Georgiou is an author of 6 patents, 2 books, and 100+ academic papers that have been published in leading journals and conferences of Mathematics, Physics, Computer Science, Engineering and Medicine. He has also been co-awarded R&D grants in excess of €10 million, including a Marie Curie Individual Fellowship, and is the recipient of the prestigious 2019 IEEE Heinrich Hertz award. Finally, as Head of R&D Partnerships at Ultraleap, he is passionate about haptic technologies, networks, and spatial XR computing and oversees all our external R&D collaboration activities and grant-funded projects.</p>
                    <button className="text-white font-extrabold bg-orange-500 w-40 mt-5 ml-20 rounded-full p-5"><a href="">About Me</a></button>
                </div>
            </main>
        </>
    )
}

export default Biography;