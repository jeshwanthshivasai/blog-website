// import Form from "./Form";
// import ContactSVG from "../assets/Get-in-touch.svg";

// const FormFooter = () => {
//     return (
//         <>
//             <main id="contact" className="h-screen">
//                 <div className="absolute w-5xl text-orange-500 font-bold">
//                     <img src={ContactSVG} className="w-full h-screen object-cover"/>
//                 </div>
//                 <div className="relative">
//                     <div className="">
//                         <p className="font-extrabold justify-end text-9xl text-white p-10 ml-144">GET IN <span className="text-neutral-800">TOUCH</span></p>
//                         <div className="h-2 w-3xl ml-220 -mt-2 bg-orange-500"></div>
//                     </div>
//                 </div>
//                 <div className="ml-255 mt-15">
//                     <Form/> 
//                 </div>
//             </main>
//         </>
//     )
// }

// export default FormFooter;


// import Form from "./Form";
// import ContactSVG from "../assets/Get-in-touch.svg";

// const FormFooter = () => {
//     return (
//         <main id="contact" className="bg-neutral-800 py-16 sm:mr-3 w-full">
//             <div className="max-w-7xl mx-auto flex lg:flex-row items-center justify-between gap-10">
//                 {/* LEFT: Illustration or Image */}
//                     <div className="w-full lg:w-1/2 flex">
//                         <img
//                             src={ContactSVG}
//                             alt="Illustration"
//                             className="w-full h-160 object-cover rounded-lg hidden lg:block"
//                         />
//                     </div>

//                 {/* RIGHT: Form */}
//                 <div className="w-full lg:w-1/2 h-full">
//                     <div className="flex flex-col h-full justify-between">
//                         {/* Form */}
//                         <Form />
//                     </div>
//                 </div>
//             </div>
//         </main>
//     );
// };

// export default FormFooter;

// import Form from "./Form";
// import ContactSVG from "../assets/Get-in-touch.svg";

// const FormFooter = () => {
//     return (
//         <main id="contact" className="bg-neutral-800 py-16 px-6">
//             <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
                
//                 {/* LEFT: Portrait Image with Rotated Text */}
//                 <div className="w-full lg:w-1/2 relative flex flex-1 ml-5 items-center justify-center">
//                     <div className="relative h-[600px] w-[600px] rounded-lg">
//                         <img
//                             src={ContactSVG}
//                             alt="Illustration"
//                             className="w-full h-full object-cover hidden lg:block"
//                         />
//                     </div>
//                     {/* <Form /> */}
//                 </div>
//                 {/* RIGHT: Form */}
//                 <div className="w-full lg:w-1/2 h-[600px] flex flex-col items-start justify-center relative">
//                     {/* "GET IN TOUCH" - only in mobile */}
//                     <div className="lg:hidden text-white text-4xl sm:text-5xl font-extrabold mb-6 text-left leading-tight w-full">
//                         GET IN <span className="text-orange-500">TOUCH</span>
//                         <div className="h-2 w-29 bg-orange-500 mt-2" />
//                     </div>
//                     <Form/>
//                 </div>
//             </div>
//         </main>
//     );
// };

// export default FormFooter;


import Form from "./Form";
import ContactSVG from "../assets/Get-in-touch.svg";

const FormFooter = () => {
    return (
        <main id="contact" className="bg-neutral-800 py-16 px-6">
            <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">

                {/* LEFT: SVG Illustration - only on Desktop */}
                <div className="w-full lg:w-1/2 hidden lg:flex items-center justify-center">
                    <div className="h-[600px] w-[600px] rounded-lg overflow-hidden">
                        <img
                            src={ContactSVG}
                            alt="Illustration"
                            className="w-full h-full object-contain border-8"
                        />
                    </div>
                </div>

                {/* RIGHT: Form */}
                <div className="w-full h-[600px] flex flex-col items-center border-8 sm:w-screen lg:w-1/2">

                    {/* Only show heading on mobile */}
                    <div className="lg:hidden text-white text-4xl sm:text-5xl font-extrabold text-left leading-tight w-full h-full">
                        GET IN <span className="text-orange-500">TOUCH</span>
                        <div className="h-2 w-29 bg-orange-500 mt-2" />
                    </div>

                    {/* Form Component */}
                    <Form />
                </div>
            </div>
        </main>
    );
};

export default FormFooter;


