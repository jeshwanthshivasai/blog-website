import { useState } from "react";

const BlogCard = () => {
    const [expanded, setExpanded] = useState(false);

    return (
        <div className="bg-white text-black rounded-xl shadow-lg overflow-hidden">
            <img
                src="https://phariprasad6174.wordpress.com/wp-content/uploads/2018/04/2016_12_15_17877_1481802639-_large.jpg"
                alt="Blog Post"
                className="w-full object-cover lg:h-120 md:h-80 sm:h-40"
            />

            <div className="p-6">
                <div className="mb-5 space-y-3 flex-col" style={{ fontFamily: '"Anek Telugu", sans-serif' }}>
                    <h3 className="text-5xl text-orange-500 font-light leading-tight" >తల్లి స్పర్శ</h3>
                    <p className="text-right text-xl font-normal text-gray-800">- హరి ప్రసాద్</p>
                </div>

                <hr className="my-5 border-t border-gray-300" />

                <p className="text-base font-light font-telugu text-gray-700 leading-loose" style={{ fontFamily: '"Anek Telugu", sans-serif' }}>
                    తూర్పున తెరిచిన తలపులనుండి తళుకులొలికే తరుణుడి కిరణాల్ని తాకే తరుణంలో, తళుక్కున ఉత్తరాన ఉన్న గోడ కింద, తళుక్కున ఉత్తరాన ఉన్న గోడ కింద తమ ఉనికిని ఉదయింప జేస్తున్న ఉత్తుత్త కలుపు మొక్కలకు {expanded &&
                        `తూర్పున తెరిచిన తలపులనుండి తళుకులొలికే తరుణుడి కిరణాల్ని తాకే తరుణంలో,
తళుక్కున ఉత్తరాన ఉన్న గోడ కింద తమ ఉనికిని ఉదయింప జేస్తున్న ఉత్తుత్త కలుపు మొక్కలకు చరమగీత ఉత్తర్వూలు జారీ చేస్తుండగా,
ఉల్వ చారు వాసనతో నోట్లో ఊరిన ఉదకం, ఉదరాన్ని ఊగిసలాడిస్తున్న సమయాన,
దక్షతతో దక్షిణం నుండి వీస్తున్న నును లేత పవణుడిని తాకి పరవశం పొందే లోపే,
“ఒరేయ్ భైరాగి, పడమటి సంధ్యారాగనికి ఇంకా పదిన్నర గంటల సమయం మాత్రమే ఉంది, పండగ పూట కూడా ఈ పాడు నిద్ర ఏంటి”,
అంటున్న మా ప్రసవస్థలి (అమ్మ) చేతి స్పర్శతో, నా స్వప్నంలో కోల్పోయిన పిల్లగాలి స్పర్శా పరవశం తిరిగి పొందాను…`}
                </p>

                <button
                    className="mt-5 text-orange-500 text-sm font-medium focus:outline-none"
                    onClick={() => setExpanded(!expanded)}
                >
                    {expanded ? "Read Less" : "...Read More"}
                </button>
            </div>
        </div>
    );
};

export default BlogCard;
