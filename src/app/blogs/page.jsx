"use client";

import { useState, useEffect } from "react";
import Blog from "../components/Blog";
import ClientSideTest from "../components/ClientSideTest";

const Blogs = () => {
  const [posts, setPosts] = useState([]); // State for fetched posts
  const [error, setError] = useState(null); // State for errors
  const [isLoading, setIsLoading] = useState(false); // State for loading

  // Fetch Data
  const fetchData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");

      if (!response.ok) {
        throw new Error("Something went wrong");
      }

      const data = await response.json();
      setPosts(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  // Use Effect to Fetch Data on Mount
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="relative bg-[#FF4F5A] text-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl">Blogs</h1>
          <ClientSideTest />
        </div>
      </div>

      {/* Loading and Error Handling */}
      <div className="flex justify-center gap-2 p-6 max-w-5xl mx-auto">
        {isLoading && <p>Loading...</p>}
        {error && <p className="text-red-500">Error: {error}</p>}
        {!isLoading && !error && posts.length === 0 && (
          <p>No blogs available at the moment.</p>
        )}
      </div>

      {/* Blog Cards */}
      <div className="flex flex-wrap justify-center gap-6 p-6 max-w-5xl mx-auto">
        {posts.map((blog, index) => (
          <Blog
            key={index}
            imageUrl={"https://pbwebdev.co.uk/wp-content/uploads/2018/12/blogs.jpg"} // Replace with actual image URL if available
            date={"01"} // Replace with actual date if available
            month={"January"} // Replace with actual month if available
            title={blog.title || "Untitled Blog"} // Blog title
            link={`${blog.id}`} 
            posts={blog.id}// Replace with actual link if available
          />
        ))}
      </div>
    </>
  );
};

export default Blogs;
