import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToAnchor = () => {
    const {hash} = useLocation();

    useEffect(() => {
        if(!hash) return;

        const el = document.querySelector(hash);
        if(el) {
            setTimeout(() => {
                el.scrollIntoView({behavior: "smooth"});
            }, 100);
        }
    }, [hash])
    return null;
}

export default ScrollToAnchor;