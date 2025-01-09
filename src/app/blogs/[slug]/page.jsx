"use client";

import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function BlogInnerPage() {
  const [posts, setPosts] = useState([]);
  const [filteredPost, setFilteredPost] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const id = useSearchParams().get("id");

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

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (id && posts.length > 0) {
      const matchingPost = posts.find((post) => post.id === parseInt(id));
      setFilteredPost(matchingPost || null);
    }
  }, [id, posts]);

  if (isLoading) {
    return 
  }

 

  return (
    <>
    {isLoading ? (
      <div>Loading...</div>
    ) : filteredPost ? (
      <>
        <div className="relative bg-[#FF4F5A] text-white">
          <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-extrabold sm:text-5xl">{filteredPost.title}</h1>
          </div>
        </div>
  
        <main className="mt-10 news-card" style={{ transform: "translate(0px, 0px)", opacity: 1 }}>
          <div
            className="mb-4 md:mb-0 w-full max-w-screen-xl mx-auto relative"
            style={{ height: "24em" }}
          >
            <div
              className="absolute left-0 bottom-0 w-full h-full z-10 rounded-lg"
              style={{
                backgroundImage: "linear-gradient(transparent, rgba(0, 0, 0, 0.7))",
              }}
            ></div>
            <img
              src="https://pbwebdev.co.uk/wp-content/uploads/2018/12/blogs.jpg"
              alt={filteredPost.title}
              className="absolute left-0 top-0 w-full h-full z-0 object-cover object-top rounded-lg"
            />
            <div className="p-4 absolute bottom-0 left-0 z-20">
              <div className="px-4 py-1 bg-black text-gray-200 inline-flex items-center justify-center mb-2">
                Published by User {filteredPost.id}
              </div>
              <h2 className="text-[20px] md:text-4xl font-semibold text-gray-100 leading-tight">
                {filteredPost.title}
              </h2>
            </div>
          </div>
  
          <div className="w-[90%] mx-auto flex md:gap-4 xs:gap-2 justify-center items-center pt-4">
            <div className="flex gap-2 items-center">
              <img
                src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                alt="User Profile"
                className="md:w-[2.2rem] md:h-[2.2rem] xs:w-[2rem] xs:h-[2rem] rounded-full"
              />
              <h2 className="text-sm font-semibold">User {filteredPost.id}</h2>
            </div>
            <div className="dark:text-gray-500">|</div>
            <h4 className="text-sm font-semibold text-gray-600 dark:text-gray-400">
              5 MIN READ
            </h4>
          </div>
  
          <div className="px-4 lg:px-0 mt-12 text-gray-700 max-w-screen-xl mx-auto text-lg leading-relaxed">
            <p className="text-base font-normal text-left text-[#3C4242] mb-[20px]">
              {filteredPost.body}
            </p>
          </div>
        </main>
      </>
    ) : (
      <div>No post found.</div>
    )}
  </>
  
  );
}
