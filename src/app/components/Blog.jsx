import Link from "next/link";
import { useEffect } from "react";

  

  export default function Blog({ imageUrl, date, month, title, link , posts }) {



   


    return (
      <div className="relative news-card flex min-w-[300px] max-w-[300px] items-end justify-start w-full text-left group rounded-[13px] h-96 dark:bg-gray-500 overflow-hidden">
        {/* Background Image */}
        <div
          className="news-card-image absolute inset-0 bg-cover bg-center  rounded-[13px] transition-transform duration-300 group-hover:scale-[1.10]"
          style={{ backgroundImage: `url(${imageUrl})` }}
        ></div>
  
        {/* Gradient Overlay */}
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-gradient-to-b rounded-b-[13px] dark:via-transparent dark:from-gray-900 dark:to-gray-900"></div>
  
        {/* Header with 'Read More' button and date */}
        <div className="absolute top-0 left-0 right-0 flex items-center justify-between mx-5 mt-3">
          <Link
            rel="noopener noreferrer"
            href={`/blogs/blog-page/?id=${posts}`}
            className="px-3 py-2 text-xs font-semibold uppercase bg-[#FF626A] text-white rounded-[13px] relative z-10"
          >
            Read More
          </Link>
          <div className="flex flex-col justify-start text-center relative z-10">
            <span className="text-3xl font-semibold text-white">{date}</span>
            <span className="uppercase text-white">{month}</span>
          </div>
        </div>
  
        {/* Title */}
        <h2 className="z-10 p-5">
          <Link
            rel="noopener noreferrer"
            href={link}
            className="font-medium text-md hover:underline text-white"
          >
            {title}
          </Link>
        </h2>
  
        {/* Additional Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/50 rounded-b-[13px]"></div>
      </div>
    );
  }
  
  