const Blogs = () => {
    return (
        <>
            <main className="bg-neutral-800 min-h-screen flex flex-col lg:flex-row relative px-4 py-10 gap-10">
                {/* Text Section */}
                <section className="flex-1">
                    <div>
                        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-white font-extrabold mb-2">BLOGS</h1>
                        <div className="h-1 w-24 sm:w-40 bg-orange-500"></div>
                    </div>

                    <div className="mt-8 text-white text-base sm:text-lg lg:text-2xl font-extralight leading-loose" style={{ fontFamily: '"Anek Telugu", sans-serif' }}>
                        <p>
                            <span className="font-bold text-4xl sm:text-6xl lg:text-8xl">తూ</span>ర్పున తెరిచిన తలపులనుండి తళుకులొలికే తరుణుడి కిరణాల్ని తాకే
                            తరుణంలో,<br />తళుక్కున <span className="font-bold">ఉత్తరాన</span> ఉన్న గోడ కింద తమ ఉనికిని ఉదయింప
                            జేస్తున్న<br />ఉత్తుత్త కలుపు మొక్కలకు చరమగీత ఉత్తర్వూలు జారీ
                            చేస్తుండగా,<br />ఉల్వ చారు వాసనతో నోట్లో ఊరిన ఉదకం, ఉదరాన్ని
                            ఊగిసలాడిస్తున్న సమయాన,<br />దక్షతతో <span className="font-bold">దక్షిణం</span> నుండి వీస్తున్న నును లేత
                            పవణుడిని తాకి పరవశం పొందే లోపే,<br />“ఒరేయ్ భైరాగి, <span className="font-bold">పడమటి</span> సంధ్యారాగనికి
                            ఇంకా పదిన్నర గంటల సమయం మాత్రమే ఉంది,<br />పండగ పూట కూడా ఈ పాడు నిద్ర
                            ఏంటి”,<br />అంటున్న మా ప్రసవస్థలి (అమ్మ) చేతి స్పర్శతో, నా స్వప్నంలో
                            కోల్పోయిన పిల్లగాలి స్పర్శా పరవశం తిరిగి<br />పొందాను…
                        </p>
                    </div>

                    <div className="mt-10">
                        <a href="#" className="inline-block bg-orange-500 text-white font-extrabold rounded-full px-6 py-3 hover:bg-orange-600 transition">
                            More Blogs
                        </a>
                    </div>
                </section>

                {/* Image & Title Section */}
                <section className="flex-1 relative">
                    <div className="relative w-full max-w-lg mx-auto">
                        {/* Decorative Orange Bars */}
                        <div className="absolute h-1 w-16 top-0 left-1/2 -translate-x-1/2 bg-orange-500"></div>
                        <div className="absolute h-20 w-1 top-8 left-1/2 -translate-x-1/2 bg-orange-500"></div>

                        <img
                            src="https://phariprasad6174.wordpress.com/wp-content/uploads/2018/04/2016_12_15_17877_1481802639-_large.jpg"
                            alt="Blog Illustration"
                            className="w-full h-auto object-cover rounded-md shadow-md"
                        />

                        <div className="absolute h-1 w-16 bottom-0 left-1/2 -translate-x-1/2 bg-orange-500"></div>
                        <div className="absolute h-20 w-1 bottom-8 left-1/2 -translate-x-1/2 bg-orange-500"></div>
                    </div>

                    <div className="mt-6 text-center">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl text-white font-bold" style={{ fontFamily: '"Anek Telugu", sans-serif' }}>
                            తల్లి స్పర్శ
                        </h2>
                        <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-extralight mt-2" style={{ fontFamily: '"Anek Telugu", sans-serif' }}>
                            - హరి ప్రసాద్
                        </h3>
                    </div>
                </section>
            </main>
        </>
    );
};

export default Blogs;
