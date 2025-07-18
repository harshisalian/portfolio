import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from 'next/link';

export const metadata: Metadata = {
  title: "ETALYX - Harshitha Salian",
  description: "Personal portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="pixel-font antialiased bg-[#0a0e1a] text-white min-h-screen"
      >
        {/* Navigation bar styled like the image */}
        <nav className="w-full flex items-center justify-between px-8 py-6 bg-[#0a0e1a] border-b-4 border-[#2a1f3a] shadow-lg min-h-[80px] relative overflow-hidden">
          {/* Pixel art background pattern */}
          <div className="absolute inset-0 opacity-20 pointer-events-none">
            <div className="absolute left-4 top-4 w-2 h-2 bg-purple-400"></div>
            <div className="absolute left-8 top-6 w-1 h-1 bg-purple-300"></div>
            <div className="absolute left-12 top-8 w-2 h-2 bg-purple-400"></div>
            <div className="absolute left-16 top-4 w-1 h-1 bg-purple-300"></div>
            <div className="absolute right-20 top-4 w-2 h-2 bg-purple-400"></div>
            <div className="absolute right-16 top-6 w-1 h-1 bg-purple-300"></div>
            <div className="absolute right-12 top-8 w-2 h-2 bg-purple-400"></div>
            <div className="absolute right-8 top-4 w-1 h-1 bg-purple-300"></div>
            <div className="absolute right-4 top-6 w-2 h-2 bg-purple-400"></div>
          </div>

          {/* Left side - Branding */}
          <div className="flex flex-col items-start z-10">
            <span className="text-3xl font-bold tracking-wider text-white pixel-font">ETALYX</span>
            <span className="text-sm text-gray-300 tracking-wide mt-1">by HARSHITHA SALIAN</span>
          </div>

          {/* Right side - Navigation */}
          <div className="flex items-center gap-8 z-10">
            {/* Navigation Links */}
            <ul className="flex gap-6 text-sm font-mono text-gray-300">
              <li><Link href="/" className="hover:text-white transition-colors duration-200">Home</Link></li>
              <li><Link href="/projects" className="hover:text-white transition-colors duration-200">Projects</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors duration-200">Blog</Link></li>
              <li><Link href="/game" className="hover:text-white transition-colors duration-200">Game?</Link></li>
              <li><Link href="/#contact" className="hover:text-white transition-colors duration-200">Contact</Link></li>
              <li><Link href="/profile" className="hover:text-white transition-colors duration-200">Profile</Link></li>
            </ul>
          </div>
        </nav>

        <main className="w-full px-2">
          {children}
        </main>

        <footer className="w-full bg-[#0a0e1a] border-t-2 border-[#2a1f3a] py-4 mt-8 flex flex-col items-center justify-center text-gray-300 text-sm">
          <span>&copy; {new Date().getFullYear()} Harshitha Salian. All rights reserved.</span>
          <a href="#" className="text-purple-400 underline hover:text-purple-300 mt-1">Terms &amp; Conditions</a>
        </footer>
      </body>
    </html>
  );
}
