"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";  // Import the Image component from next/image
import styles from "./navbar.module.css";

export default function Navbar() {
    const pathname = usePathname(); // Get the current path

    const navLinks = [
        { name: "Home", path: "/" },
        { name: "About", path: "/about" },
        { name: "Blogs", path: "/blogs" },
        { name: "Admin", path: "/admin" },

        { name: "Contact", path: "/contact-us" },
    ];

    return (
        <nav className={`${styles.background} border-gray-200 py-2.5`}>
            <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
                <Link href="/" className="flex items-center relative h-[50px]">

                    <Image
                        src="/assets/images/png/blog.png"
                        alt=""   
                        fill
                        className="object-contain"
                    />
                    <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                        Landwind
                    </span>
                </Link>
                <div className="flex items-center lg:order-2">
                    <a
                        href="https://themesberg.com/product/tailwind-css/landing-page"
                        className="text-white bg-[#FF4F5A] hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 sm:mr-2 lg:mr-0   focus:outline-none dark:focus:ring-purple-800"
                    >
                        Login
                    </a>
                </div>
                <div
                    className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1"
                    id="mobile-menu-2"
                >
                    <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.path}
                                    className={`block py-2 pl-3 pr-4 ${
                                        pathname === link.path
                                            ? "bg-[#FF4F5A] rounded lg:bg-transparent lg:text-[#FF4F5A]"
                                            : "text-gray-500 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-[#FF4F5A]"
                                    }`}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
