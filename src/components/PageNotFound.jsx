import { Link } from "react-router-dom";
import Error from "../assets/Oops! 404 Error with a broken robot-rafiki.png"

const PageNotFound = () => {
    return (
        <>
            <main className="text-center h-screen w-screen bg-neutral-800">
                <img
                    src={Error}
                    className="lg:h-200 lg:w-200 sm: mx-auto sm:my-auto"
                />
                <Link
                    to="/"
                    className="px-12 py-6 text-xl bg-orange-500 text-white rounded hover:bg-orange-600 transition duration-300"
                >
                    Go Back Home
                </Link>
            </main>
        </>
    )
}

export default PageNotFound

