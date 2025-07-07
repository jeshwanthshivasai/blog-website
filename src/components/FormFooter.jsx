// import Footer from "./Footer";
import Form from "./Form";

const FormFooter = () => {
    return (
        <>
            <main id="contact" className="relative min-h-screen">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <img 
                        src="https://images.squarespace-cdn.com/content/v1/5c6fd1c7c2ff616d47ed3809/e685c138-9453-4e90-a5f0-3343d143a4e9/b-222.jpg" 
                        alt="background"
                        className="w-full h-full object-cover" 
                    />
                </div>

                {/* Content */}
                <div className="relative z-10 px-6 sm:px-12 lg:px-32 pt-20 pb-10">
                    {/* Heading */}
                    <div className="mb-10">
                        <h1 className="text-5xl sm:text-7xl lg:text-9xl font-extrabold text-white leading-tight">
                            GET IN <span className="text-neutral-800">TOUCH</span>
                        </h1>
                        <div className="h-2 w-24 sm:w-48 lg:w-72 bg-orange-500 mt-4"></div>
                    </div>

                    {/* Form */}
                    <div className="max-w-4xl">
                        <Form />
                    </div>
                </div>

                {/* Optional Footer component if needed */}
                {/* <Footer /> */}
            </main>
        </>
    );
};

export default FormFooter;
