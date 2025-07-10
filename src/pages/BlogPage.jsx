// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import BlogCard from "../components/BlogCard";

// const BlogPage = () => {
//     return (
//         <main className="bg-neutral-800 text-white min-h-screen">
//             <Header />
//             <section className="relative max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start px-4 sm:px-8 lg:px-16 py-16">
//                 {/* Left Text */}
//                 <div className="relative z-10 w-full lg:w-1/2">
//                     <div className="text-left">
//                         <h1 className="lg:text-6xl sm:text-9xl font-extrabold leading-tight mb-6">BLOG.</h1>
//                         <div className="h-2 bg-orange-500 absolute top-30 left-0 z-[-1] lg:w-xl md:w-full sm:w-full" />
//                         <div className="flex items-center gap-5 mt-22">
//                             <div className="w-16 h-16 bg-orange-500 rounded-md flex items-center justify-center">
//                                 <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
//                                 </svg>
//                             </div>
//                             <span className="text-lg">Scroll down</span>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Right Image */}
//                 <div className="w-full lg:w-full mt-10 lg:mt-0">
//                     <img
//                         src="https://images.squarespace-cdn.com/content/v1/5c6fd1c7c2ff616d47ed3809/c404d93c-aa04-4838-ab6d-2af4a3b8c153/orestis-georgiou.jpg"
//                         alt="Hero"
//                         className="w-full h-auto object-cover rounded-lg"
//                     />
//                 </div>
//             </section>

//             {/* Blog Title */}
//             <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
//                 <h2 className="text-3xl font-bold uppercase tracking-wide mb-4">My Own Writings</h2>
//                 <div className="h-1 w-40 bg-orange-500 mb-10" />
//             </section>

//             {/* Blog Cards */}
//             <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 space-y-10 pb-20">
//                 <BlogCard />
//                 <BlogCard />
//                 <BlogCard />
//             </section>

//             <Footer />
//         </main>
//     );
// };

// export default BlogPage;

import Header from "../components/Header";
import Footer from "../components/Footer";
import BlogCard from "../components/BlogCard";

const BlogPage = () => {
const blogs = [
{
slug: "air-pollution",
title: "Air Pollution",
author: "Potharaju Hari Prasad",
excerpt:
"Sometimes an issue can have severe impact on us, yet we remain indifferent to it. It wasn’t until my brother bought an air purifier for our home that I realized how indifferent I had been to the problem of air pollution in our country...",
image:
"https://images.unsplash.com/photo-1602727751184-d7b7d0cd9d8d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
},
// Add more blog objects here as needed
];
return (
    <main className="bg-neutral-800 text-white min-h-screen">
        <Header />

        <section className="relative max-w-7xl mx-auto flex flex-col lg:flex-row justify-between items-start px-4 sm:px-8 lg:px-16 py-16">
            {/* Left Text */}
            <div className="relative z-10 w-full lg:w-1/2">
                <div className="text-left">
                    <h1 className="lg:text-6xl sm:text-9xl font-extrabold leading-tight mb-6">BLOG.</h1>
                    <div className="h-2 bg-orange-500 absolute top-30 left-0 z-[-1] lg:w-xl md:w-full sm:w-full" />
                    <div className="flex items-center gap-5 mt-22">
                        <div className="w-16 h-16 bg-orange-500 rounded-md flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </div>
                        <span className="text-lg">Scroll down</span>
                    </div>
                </div>
            </div>

            {/* Right Image */}
            <div className="w-full lg:w-full mt-10 lg:mt-0">
                <img
                    src="https://images.squarespace-cdn.com/content/v1/5c6fd1c7c2ff616d47ed3809/c404d93c-aa04-4838-ab6d-2af4a3b8c153/orestis-georgiou.jpg"
                    alt="Hero"
                    className="w-full h-auto object-cover rounded-lg"
                />
            </div>
        </section>

        {/* Blog Title */}
        <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16">
            <h2 className="text-3xl font-bold uppercase tracking-wide mb-4">My Own Writings</h2>
            <div className="h-1 w-40 bg-orange-500 mb-10" />
        </section>

        {/* Blog Cards */}
        <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 space-y-10 pb-20">
            {blogs.map((blog) => (
                <BlogCard key={blog.slug} blog={blog} />
            ))}
        </section>

        <Footer />
    </main>
);

};

export default BlogPage;
