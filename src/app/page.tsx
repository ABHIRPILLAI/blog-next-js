"use client";
import Link from "next/link";

export default function Home() {
  return (
   <>
    <div className="flex flex-col md:flex-row items-center justify-center bg-white text-[#FF4F5A] ml-[50px] pt-[50px]">
      {/* Hero Section */}
      <div className="text-center md:text-left md:mr-16 max-w-[577px]">
        <h1 className="text-8xl font-bold mb-4">Creative Thoughts Agency.</h1>
        <p className="text-lg mb-8 text-gray-600">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero blanditiis
          adipisci minima reicienda is a tandom assumenda dolore.
        </p>
        <div className="flex justify-center md:justify-start">
          <button className="bg-[#FF4F5A] text-white py-2 px-4 rounded-md mr-4">
            Learn More
          </button>
          <button className="bg-[#FF4F5A] text-white py-2 px-4 rounded-md">
            Contact
          </button>
        </div>
      </div>
      {/* Image Section */}
      <div className="relative w-full h-[500px] mt-8 md:mt-0">
        <div className="absolute top-0 left-0 w-full h-full">
          <img
            src="/assets/images/png/blogging-illustration-concept.jpg"
            alt="Creative Thoughts Agency"
            className="object-contain w-full h-full"
          />
        </div>
      </div>
    </div>

    {/* Features Section */}
    <div className="py-16 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold text-[#FF4F5A] mb-8">Why Choose Us?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Innovative Ideas</h3>
          <p className="text-lg text-gray-600">
            We deliver cutting-edge solutions tailored to your business needs and challenges.
          </p>
        </div>
        <div className="p-8 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Expert Team</h3>
          <p className="text-lg text-gray-600">
            Our team consists of highly skilled professionals with years of experience in the industry.
          </p>
        </div>
        <div className="p-8 bg-white rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Result-Oriented</h3>
          <p className="text-lg text-gray-600">
            We focus on delivering measurable results to help your business grow and succeed.
          </p>
        </div>
      </div>
    </div>

    {/* Testimonials Section */}
    <div className="py-16 bg-white text-center">
      <h2 className="text-4xl font-bold text-[#FF4F5A] mb-8">What Our Clients Say</h2>
      <div className="flex justify-center items-center space-x-8">
        <div className="max-w-sm bg-gray-50 p-6 rounded-lg shadow-md">
          <p className="text-lg text-gray-600 mb-4">
           {` "Creative Thoughts Agency helped us redefine our brand identity. Their innovative approach made all the difference!"`}
          </p>
          <p className="text-sm font-semibold text-[#FF4F5A]">John Doe</p>
          <p className="text-sm text-gray-500">CEO, Example Corp</p>
        </div>
        <div className="max-w-sm bg-gray-50 p-6 rounded-lg shadow-md">
          <p className="text-lg text-gray-600 mb-4">
           { "We saw an incredible boost in engagement after collaborating with Creative Thoughts. Highly recommend!"}
          </p>
          <p className="text-sm font-semibold text-[#FF4F5A]">Jane Smith</p>
          <p className="text-sm text-gray-500">Marketing Director, BrandX</p>
        </div>
      </div>
    </div>

    {/* Call to Action Section */}
    <div className="bg-[#FF4F5A] text-white py-16 text-center">
      <h2 className="text-3xl font-extrabold mb-4">Ready to Work with Us?</h2>
      <p className="text-lg mb-8">
        Let’s create something amazing together. Get in touch today to learn more about how we can help your business grow.
      </p>
      <Link href="/contact-us"
              className="bg-white text-[#FF4F5A] py-3 px-8 rounded-md text-lg font-semibold hover:bg-[#FF4F5A] hover:text-white transition duration-300"
      >Contact Us</Link>
    </div></>
  );
}
