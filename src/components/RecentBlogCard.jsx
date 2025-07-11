// import { Link } from "react-router-dom";

// const RecentBlogCard = ({ title, image, author, date, excerpt, link }) => {
//     return (
//         <>
//             <div className="bg-white text-neutral-800 rounded-xl shadow-md overflow-hidden flex flex-col">
//                 <img
//                     src={image}
//                     alt={title}
//                     className="w-full h-64 object-cover"
//                 />
//                 <div className="p-5 flex flex-col justify-between h-full">
//                     <div>
//                         <h3 className="text-xl font-semibold mb-2 leading-snug line-clamp-2">
//                             {title}
//                         </h3>
//                         <p className="text-sm text-neutral-800 mb-3">
//                             Published by <span className="font-semibold">{author}</span> on {date}
//                         </p>
//                         <p className="text-sm text-neutral-800 line-clamp-3">
//                             {excerpt}
//                         </p>
//                     </div>
//                     <div className="mt-4">
//                         <Link to={link} className="text-orange-500 text-sm font-medium inline-flex items-center hover:underline">
//                             Continue reading
//                             <span className="ml-1">&rarr;</span>
//                         </Link>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// };

// export default RecentBlogCard;

import { Link } from "react-router-dom";

const RecentBlogCard = ({ blog }) => {
    return (
        <div className="bg-white text-neutral-800 rounded-xl shadow-md overflow-hidden flex flex-col">
            <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-54 object-cover"
            />
            <div className="p-5 flex flex-col justify-between h-full">
                <div>
                    <h3 className="text-xl font-semibold mb-2 leading-snug line-clamp-2">
                        {blog.title}
                    </h3>
                    <p className="text-sm text-neutral-800 mb-3">
                        Published by <span className="font-semibold">{blog.author}</span> on {blog.date}
                    </p>
                    <hr className="my-5 border border-gray-300" />
                    <p className="text-sm text-neutral-800 line-clamp-3">
                        {blog.excerpt}
                    </p>
                </div>
                <div className="mt-4">
                    <Link to={`/blogs/${blog.slug}`} className="text-orange-500 text-sm font-medium inline-flex items-center hover:underline">
                        Continue reading
                        <span className="ml-1">&rarr;</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RecentBlogCard;
