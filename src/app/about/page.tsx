"use client"

// import { useState } from "react";
// import List from "../components/List/List"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function About() {
  // const [score, setScore] = useState(0);
  // const increaseScore = () => setScore(score + 1);

  // return (
  //   <div>
       
  //     <List score={score} increaseScore={increaseScore}/>
  //   </div>
  // );

  return(
    <>
 <div className="bg-white text-gray-900">
      {/* Hero Section */}
      <div className="relative bg-[#FF4F5A] text-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-extrabold sm:text-5xl">About Us</h1>
          <p className="mt-4 text-lg">
            Welcome to [Your Blog Name], your go-to destination for insightful, engaging, and inspiring content.
          </p>
        </div>
      </div>

      {/* Content Section */}
      <div className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Our Story</h2>
          <p className="mt-6 text-lg text-gray-600">
            At [Your Blog Name], we started with a simple mission: to share knowledge, spark curiosity, and build a community of passionate readers. From lifestyle tips to in-depth guides, our blog is designed to inform and entertain.
          </p>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
            <div>
              <h3 className="text-4xl font-bold text-[#FF4F5A]">100+</h3>
              <p className="mt-2 text-gray-600">Blogs Published</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-[#FF4F5A]">50K+</h3>
              <p className="mt-2 text-gray-600">Monthly Readers</p>
            </div>
            <div>
              <h3 className="text-4xl font-bold text-[#FF4F5A]">10+</h3>
              <p className="mt-2 text-gray-600">Contributing Authors</p>
            </div>
          </div>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-16 bg-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold text-gray-900">Our Mission</h2>
          <p className="mt-6 text-lg text-gray-600">
            To empower individuals through insightful articles and create a platform for learning, growth, and connection. We aim to become the most trusted source for blogs across diverse categories.
          </p>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-[#FF4F5A] text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold">Follow Us on Social Media</h2>
          <p className="mt-4 text-lg">
            Stay connected and join our community on your favorite platforms!
          </p>
          <div className="mt-6 flex justify-center space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-200"
            >
              <FontAwesomeIcon icon={faFacebook} className="text-4xl" />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-200"
            >
              <FontAwesomeIcon icon={faInstagram} className="text-4xl" />
            </a>
          </div>
        </div>
      </div>
    </div></>
  );
}