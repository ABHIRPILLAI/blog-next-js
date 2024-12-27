"use client";
import Blog from "../components/Blog";

const blogData = [
    {
        imageUrl: "/assets/img/news-images/dec-20-news-1.jpg",
        date: "20",
        month: "December",
        title: "Kerala to Launch ‘Year of Investments’ After Global Summit: Minister P. Rajeeve",
        link:''
       },
      {
        imageUrl: "/assets/img/news-images/jan-15-news-1.jpg",
        date: "15",
        month: "January",
        title: "New Infrastructure Projects Announced in Kerala for 2024",
        link:"n"
       },
       {
        imageUrl: "/assets/img/news-images/jan-15-news-1.jpg",
        date: "15",
        month: "January",
        title: "New Infrastructure Projects Announced in Kerala for 2024",
        link:"n"
       },
       {
        imageUrl: "/assets/img/news-images/jan-15-news-1.jpg",
        date: "15",
        month: "January",
        title: "New Infrastructure Projects Announced in Kerala for 2024",
        link:"n"
       },
];

export default function Blogs() {
  return (
  <>
    <div className="relative bg-[#FF4F5A] text-white">
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
      <h1 className="text-4xl font-extrabold sm:text-5xl">Blogs</h1>
      
    </div>
  </div>
    <div className="flex justify-center   gap-2 p-6 max-w-5xl mx-auto">
      {blogData.map((blog, index) => (
        <Blog
        key={index}
        imageUrl={blog.imageUrl}
        date={blog.date}
        month={blog.month}
        title={blog.title}
        link={blog.link}
        />
      ))}
    </div></>
  );
}
