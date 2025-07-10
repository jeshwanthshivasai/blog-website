// // BlogDetailPage.jsx
// import { Link } from "react-router-dom";
// import RecentBlogCard from "../components/RecentBlogCard";
// import Header from "../components/Header";
// import Footer from "../components/Footer";

// const BlogDetailPage = () => {
//     return (
//         <main className="bg-white text-black">
//             <Header />

//             <section className="max-w-4xl mx-auto px-6 py-16">
//                 <h1 className="text-5xl font-bold mb-4">Air Pollution</h1>
//                 <p className="text-gray-600 mb-8">Published by <span className="font-semibold">Potharaju Hari Prasad</span> on <span className="font-medium">November 27, 2024</span></p>

//                 <img 
//                     src="https://images.unsplash.com/photo-1576257185660-27b18e63d0f6" 
//                     alt="Air Pollution" 
//                     className="rounded-lg w-full mb-10"
//                 />

//                 <div className="prose prose-lg max-w-none">
//                     <p>Sometimes an issue can have severe impact on us, yet we remain indifferent to it. It wasn’t until my brother bought an air purifier for our home that I realized how indifferent I had been to the problem of air pollution in our country.</p>
//                     <p>Just a few days back, Delhi’s 24 hour average Air Quality Index (AQI) touched 494 and PM2.5 levels soared to 430µg/m³. This is nearly 30 times the WHO-prescribed limit for safe Human exposure...</p>
//                     <p>Moreover, AQI readings may understate the severity of pollution... accurate descriptors like ‘Toxic,’ ‘Hazardous,’ and ‘Unbreathable’ are necessary to highlight the seriousness of the situation.</p>
//                     <p>... India figures among top 50 most polluted cities in the world. Air pollution is responsible for over 2.1 million premature deaths in India in 2021.</p>
//                     <p>The way ahead includes... stronger public transportation, industrial emission control, EV incentives, behavioral change, and local body empowerment...</p>
//                     <p className="font-semibold text-lg text-black">Clean air must become a national and political priority.</p>
//                 </div>
//             </section>

//             {/* Recent Posts */}
//             <section className="bg-neutral-100 py-12">
//                 <div className="max-w-7xl mx-auto px-6">
//                     <h2 className="text-3xl font-bold mb-8">Recent Posts</h2>
//                     <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
//                         <RecentBlogCard />
//                         <RecentBlogCard />
//                         <RecentBlogCard />
//                     </div>
//                 </div>
//             </section>

//             <Footer />
//         </main>
//     );
// };

// export default BlogDetailPage;


// BlogDetail.jsx
// import { useParams } from "react-router-dom";
// import Header from "../components/Header";
// import Footer from "../components/Footer";
// import RecentBlogCard from "../components/RecentBlogCard";

// const blogData = {
//   "air-pollution": {
//     title: "Air Pollution",
//     author: "Potharaju Hari Prasad",
//     date: "November 27, 2024",
//     image:
//       "https://images.unsplash.com/photo-1602727751184-d7b7d0cd9d8d?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//     excerpt:
//       "Sometimes an issue can have severe impact on us, yet we remain indifferent to it...",
//     content: `Sometimes an issue can have severe impact on us, yet we remain indifferent to it. It wasn’t until my brother bought an air purifier for our home that I realized how indifferent I had been to the problem of air pollution in our country.

// Just a few days back, Delhi’s 24 hour average Air Quality Index (AQI) touched 494 and PM2.5 levels soared to 430µg/m³. This is nearly 30 times the WHO-prescribed limit for safe human exposure. According to Berkeley Earth, inhaling air with PM2.5 load of 22µg/m³ for a day is equivalent to smoking one cigarette. By this yardstick, breathing Delhi’s air on its most polluted days has same effect on health as smoking 20 cigarettes per day!

// Moreover, AQI readings may understate the severity of pollution... (rest of blog)`
//   },
//   // Add more blogs here
// };

// const BlogDetail = () => {
//   const { slug } = useParams();
//   const blog = blogData[slug];

//   if (!blog) return <div className="text-white text-center py-20">Blog not found.</div>;

//   return (
//     <main className="bg-neutral-800 text-white min-h-screen">
//       <Header />
//       <section className="max-w-4xl mx-auto px-4 sm:px-8 lg:px-0 py-16">
//         <h1 className="text-4xl font-bold mb-2 text-white">{blog.title}</h1>
//         <p className="text-gray-400 mb-6">
//           Published by <span className="font-semibold text-white">{blog.author}</span> on {blog.date}
//         </p>
//         <img
//           src={blog.image}
//           alt={blog.title}
//           className="w-full rounded-lg object-cover mb-10"
//         />
//         <article className="prose prose-lg text-white prose-invert">
//           {blog.content.split("\n\n").map((para, i) => (
//             <p key={i}>{para}</p>
//           ))}
//         </article>
//       </section>

//       <section className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 py-12 border-t border-neutral-700">
//         <h2 className="text-2xl font-semibold mb-6">Recent Posts</h2>
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           <RecentBlogCard
//             title="Air Pollution"
//             date="November 27, 2024"
//             image={blog.image}
//             excerpt={blog.excerpt}
//             slug="air-pollution"
//           />
//           {/* Add more cards for other posts */}
//         </div>
//       </section>

//       <Footer />
//     </main>
//   );
// };

// export default BlogDetail;


import { useParams } from "react-router-dom";
import blogData from "../data/blogData";
import RecentBlogCard from "../components/RecentBlogCard";
import Header from "../components/Header";
import Footer from "../components/Footer";

const BlogDetailPage = () => {
    const { slug } = useParams();
    const blog = blogData.find((b) => b.slug === slug);

    if (!blog) return <p className="text-white">Blog not found</p>;

    return (
        <main className="bg-neutral-800 text-white min-h-screen">
            <Header />

            <section className="max-w-5xl mx-auto px-6 py-20">
                <h1 className="text-5xl font-bold text-orange-500 mb-4">{blog.title}</h1>
                <p className="text-lg text-gray-400 mb-2">
                    Published by <span className="font-medium text-white">{blog.author}</span> on{" "}
                    <span>{blog.date}</span>
                </p>

                <img src={blog.image} alt={blog.title} className="w-full rounded-lg mt-6 mb-10" />

                <div className="text-lg font-light leading-loose whitespace-pre-line">
                    {blog.content}
                </div>
            </section>

            {/* Recent posts */}
            <section className="max-w-5xl mx-auto px-6 pb-20">
                <h2 className="text-3xl font-bold mb-6">Recent Posts</h2>
                <div className="grid md:grid-cols-3 gap-6">
                    {blogData
                        .filter((b) => b.slug !== slug)
                        .slice(0, 3)
                        .map((recentBlog) => (
                            <RecentBlogCard key={recentBlog.slug} blog={recentBlog} />
                        ))}
                </div>
            </section>

            <Footer />
        </main>
    );
};

export default BlogDetailPage;
