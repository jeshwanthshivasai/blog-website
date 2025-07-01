const Blogs = () => {
    return (
    <>
        <main className="bg-neutral-800 h-screen flex relative">
            <section className="my-20 mx-3">
                <div>
                    <h1 className="text-5xl text-white font-extrabold text-left ml-20">BLOGS</h1>
                    <div className="h-2 w-250 z-1 mt-5 ml-15 bg-orange-500"></div>
                </div>
                <div className="mt-15 w-6xl ml-20" >
                    <p className="text-white text-2xl font-extralight font-telugu leading-loose ">
                        <span className="font-bold text-8xl">తూ</span>ర్పున తెరిచిన తలపులనుండి తళుకులొలికే తరుణుడి కిరణాల్ని తాకే
                        తరుణంలో,<br/>తళుక్కున <span className="font-bold">ఉత్తరాన</span> ఉన్న గోడ కింద తమ ఉనికిని ఉదయింప
                        జేస్తున్న<br/>ఉత్తుత్త కలుపు మొక్కలకు చరమగీత ఉత్తర్వూలు జారీ
                        చేస్తుండగా,<br/>ఉల్వ చారు వాసనతో నోట్లో ఊరిన ఉదకం, ఉదరాన్ని
                        ఊగిసలాడిస్తున్న సమయాన,<br/>దక్షతతో <span className="font-bold">దక్షిణం</span> నుండి వీస్తున్న నును లేత
                        పవణుడిని తాకి పరవశం పొందే లోపే,<br/>“ఒరేయ్ భైరాగి, <span className="font-bold">పడమటి</span> సంధ్యారాగనికి
                        ఇంకా పదిన్నర గంటల సమయం మాత్రమే ఉంది,<br/>పండగ పూట కూడా ఈ పాడు నిద్ర
                        ఏంటి”,<br/>అంటున్న మా ప్రసవస్థలి (అమ్మ) చేతి స్పర్శతో, నా స్వప్నంలో
                        కోల్పోయిన పిల్లగాలి స్పర్శా పరవశం తిరిగి<br/>పొందాను…
                    </p>
                </div>
                <button className="text-white font-extrabold bg-orange-500 w-40 mt-28 ml-20 rounded-full p-5"><a href="">More Blogs</a></button>
            </section>
            <section className="my-20 mt-35">
                <div>
                    <div className="relative mt-25">
                        <div className="absolute h-2 w-30 ml-80 -top-10 bg-orange-500"></div>
                        <div className="absolute h-2 w-80 mt-23 ml-70 top-6 rotate-90 bg-orange-500"></div>
                        <img src="https://phariprasad6174.wordpress.com/wp-content/uploads/2018/04/2016_12_15_17877_1481802639-_large.jpg" className="h-100 w-100 object-cover"/>
                        <div className="absolute h-2 w-30 -ml-24 top-95 rotate-90 bg-orange-500"></div>
                        <div className="absolute h-2 w-80 mt-63 -ml-10 top-46 bg-orange-500"></div>
                    </div>
                    <h2 className="font-bold text-5xl mt-23 text-white">తల్లి స్పర్శ</h2>
                    <h3 className="text-white text-4xl font-extralight mt-15 text-right">- హరి ప్రసాద్</h3>
                </div>
            </section>
        </main>
    </>
    );
}

export default Blogs;