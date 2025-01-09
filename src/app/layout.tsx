import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/navbar/Navbar";

export const metadata: Metadata = {
  title: "BlogSpot",
  description: "Creat your blog , read others, find knowloedge",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
      <Navbar /> 
      <div className="container ">
    
      {children}
      </div>
      </body>
    </html>
  );
}
