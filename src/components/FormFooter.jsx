import Footer from "./Footer";
import Form from "./Form";

const FormFooter = () => {
    return (
        <>
            <main id="contact" className="h-screen">
                <div className="absolute w-5xl text-orange-500 font-bold">
                    <img src="https://images.squarespace-cdn.com/content/v1/5c6fd1c7c2ff616d47ed3809/e685c138-9453-4e90-a5f0-3343d143a4e9/b-222.jpg" className="w-full h-screen object-cover"/>
                </div>
                <div className="relative">
                    <div className="">
                        <p className="font-extrabold justify-end text-9xl text-white p-10 ml-144">GET IN <span className="text-neutral-800">TOUCH</span></p>
                        <div className="h-2 w-3xl ml-220 -mt-2 bg-orange-500"></div>
                    </div>
                </div>
                <div className="ml-255 mt-15">
                    <Form/> 
                </div>
            </main>
        </>
    )
}

export default FormFooter;