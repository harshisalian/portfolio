'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import LEDScroller from "./LEDScroller";
import Link from "next/link";

export default function Home() {
  // Typing animation for welcome message
  const welcomeText = "Let’s connect — and build something cool together!";
  const [typedText, setTypedText] = useState("");
  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setTypedText(welcomeText.slice(0, i + 1));
      i++;
      if (i >= welcomeText.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  // Certificates data
  const certificates = [
    {
      src: "/deloitte.jpg",
      alt: "Deloitte Australia - Cyber Job Simulation",
      title: "Deloitte Australia - Cyber Job Simulation",
      issued: "Issued Jun 2025",
    },
    {
      src: "/be10x.png",
      alt: "AI Tools and ChatGPT Workshop - Be10x",
      title: "AI Tools and ChatGPT Workshop - Be10x",
      issued: "Issued 2025",
    },
    {
      src: "/javascriptinfosys_page-0001.jpg",
      alt: "JavaScript Course - Infosys Springboard",
      title: "JavaScript Course - Infosys Springboard",
      issued: "Issued 2025",
    },
    {
      src: "/cssinfosys_page-0001.jpg",
      alt: "CSS3 Course - Infosys Springboard",
      title: "CSS3 Course - Infosys Springboard",
      issued: "Issued 2025",
    },
    {
      src: "/htmlinfosys_page-0001.jpg",
      alt: "HTML5 – The Language - Infosys",
      title: "HTML5 – The Language - Infosys",
      issued: "Issued 2025",
    },
  ];
  const [certIndex, setCertIndex] = useState(2); // Start with the middle one
  const showCerts = [certIndex - 1, certIndex, certIndex + 1];
  const handlePrev = () => {
    setCertIndex((prev) => (prev > 0 ? prev - 1 : prev));
  };
  const handleNext = () => {
    setCertIndex((prev) => (prev < certificates.length - 1 ? prev + 1 : prev));
  };

  const [profileOpacity, setProfileOpacity] = useState(1);
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      // Fade out from opacity 1 to 0 over 400px scroll
      const opacity = Math.max(0, 1 - scrollY / 400);
      setProfileOpacity(opacity);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full max-w-6xl mx-auto flex flex-col gap-12 pt-8 px-2 sm:px-4">
      {/* Pixel Computer and Speech Bubble (top left) */}
      <div className="flex flex-row items-center gap-2 sm:gap-4 mb-8">
        <Image src="/pixel-computer.png" alt="Pixel Computer" width={60} height={60} className="w-12 h-12 sm:w-20 sm:h-20" />
        <div className="bg-[#232b45] text-white rounded-lg px-3 py-2 sm:px-6 sm:py-3 pixel-font text-base sm:text-lg shadow-lg border border-[#232b45] whitespace-pre min-w-[180px] sm:min-w-[320px]">
          {typedText}
          <span className="animate-pulse">|</span>
        </div>
      </div>
      {/* Profile Card at top right below nav, sticky and bouncing, 100px from right */}
      <div className="hidden lg:flex w-full justify-end pointer-events-none" style={{ position: 'sticky', top: '18px', zIndex: 20 }}>
        <div
          className="pointer-events-auto mr-0 lg:mr-[-294px] bg-[#181e34] border-2 border-[#232b45] rounded-lg p-4 sm:p-6 flex flex-col items-center pixel-card shadow-2xl shadow-[#232b45] mt-[-30px] lg:mt-[-50px] w-[90vw] max-w-xs sm:max-w-sm lg:w-[340px] animate-float-xy"
          style={{ opacity: profileOpacity, transition: 'opacity 0.2s cubic-bezier(0.4,0,0.2,1)' }}
        >
          <Image src="/intro.png" alt="Avatar" width={96} height={96} className="mb-2" />
          <div className="text-xl font-bold mb-[5px]">Harshitha</div>
          <div className="text-sm text-gray-300 mb-2">ETALYX</div>
          <div className="mb-4 text-lg text-pink-400 pixel-font">👾unemployed coder👾</div>
          <Link href="/profile" className="pixel-button">View profile</Link>
        </div>
      </div>
      {/* Main Content */}
      <div className="flex flex-col gap-16 lg:pr-0">
        {/* Home Section with Profile Card */}
        <section id="home" className="flex flex-col sm:flex-row items-start gap-4 sm:gap-8 w-full max-w-4xl mt-[-120px] sm:mt-[-405px] ml-0 sm:ml-4">
          <div className="flex flex-col items-start gap-4 flex-1 ml-0 sm:-ml-[50px]" style={{ marginTop: '60px' }}>
            <h1 className="text-5xl sm:text-8xl font-bold pixel-font" style={{ marginLeft: '0', marginBottom: '10px', color: '#e066ff' }}>HOLA,</h1>
            <div className="text-3xl sm:text-6xl font-bold pixel-font" style={{ marginLeft: '0', marginTop: '5px', marginBottom: '5px', color: '#e066ff' }}>
              <span style={{ display: 'block' }}>This is</span>
              <span style={{ display: 'block', marginTop: '10px', marginBottom: '10px', color: '#e066ff' }}>HARSHITHA SALIAN</span>
            </div>
            <p className="text-base text-gray-300 leading-8 max-w-xl ml-0 sm:ml-2">

            </p>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="flex flex-col items-center gap-4 mt-12 sm:mt-[130px]">
          <div className="flex flex-col sm:flex-row items-center bg-[#181e34] border border-[#232b45] rounded-lg p-4 sm:p-8 shadow-2xl shadow-[#232b45] w-full max-w-full sm:w-[90vw] sm:max-w-none h-auto sm:h-[500px] animate-float-xy" style={{ opacity: 0.95, zIndex: 20 }}>
            <div className="flex-shrink-0 flex flex-col items-center justify-center h-full mr-0 sm:mr-[33px] gap-4 mb-4 sm:mb-0">
              <Image src="/victory.png" alt="Jumping" width={120} height={120} className="mb-2 w-24 h-24 sm:w-60 sm:h-60" />
            </div>
            <div className="flex flex-col items-start w-full h-full justify-center">
              <h2 className="text-2xl sm:text-4xl font-bold pixel-font text-blue-400 mb-2" style={{ marginBottom: '20px' }}>About Me</h2>
              <div className="text-sm sm:text-base text-gray-300 leading-8">
                <div style={{ marginBottom: '10px' }}>Hey, I’m Harshitha Salian</div>
                <div style={{ marginBottom: '10px' }}>Final-year Computer Science & Engineering student @ Shree Devi Institute of Technology</div>
                <div style={{ marginBottom: '10px' }}> Cloud geek in the making — I love diving deep into AWS, Azure, and next-gen scalable systems.</div>
                <div style={{ marginBottom: '10px' }}>Code, debug, deploy, repeat. I’m fluent in problem-solving, quick to learn any stack, and never afraid to break (and fix) things.</div>
                <div style={{ marginBottom: '10px' }}> Mission: Build things that actually work and actually help people.</div>
                <div style={{ marginBottom: '10px' }}>Mantra: Stay curious. Ship fast. Level up. Repeat.</div>
              </div>
            </div>
          </div>
          <div className="mt-4 text-lg sm:text-2xl font-bold pixel-font text-pink-400 text-center">
            Always learning, always building, always leveling up.<br />Let’s make something awesome together!
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="flex flex-col items-center gap-4 mt-16 sm:mt-[150px]">
          <h2 className="text-2xl sm:text-5xl font-extrabold pixel-font text-green-400 mb-2">Certifications</h2>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-8 sm:mt-[100px] w-full">
            <button onClick={handlePrev} className="text-2xl sm:text-3xl px-2 py-1 rounded-full bg-[#232b45] text-white hover:bg-green-400 hover:text-[#232b45] transition disabled:opacity-30" disabled={certIndex === 0}>&lt;</button>
            <div className="flex flex-row gap-2 sm:gap-6 w-full sm:w-[900px] justify-center items-center">
              {showCerts.map((i) => {
                if (i < 0 || i >= certificates.length) {
                  return <div key={i} className="w-24 h-24 sm:w-64 sm:h-56" />; // empty space for out-of-bounds
                }
                const cert = certificates[i];
                let style = "";
                if (i === certIndex) {
                  style = "brightness-100 scale-105 sm:scale-125 shadow-2xl z-10";
                } else {
                  style = "brightness-50 scale-95 sm:scale-100 opacity-60 z-0";
                }
                return (
                  <div
                    key={cert.title}
                    className={`flex flex-col items-center bg-[#181e34] border border-[#232b45] rounded-lg p-2 sm:p-8 shadow-2xl shadow-[#232b45] pixel-card w-32 sm:w-96 transition-all duration-300 ${style}`}
                  >
                    <Image src={cert.src} alt={cert.alt} width={120} height={80} className="rounded mb-2 sm:mb-4 w-full h-auto" />
                    <div className="h-[20px] sm:h-[50px]" />
                    <span className="text-xs sm:text-xl text-yellow-300 font-bold text-center mb-1">{cert.title}</span>
                    <span className="text-xs sm:text-base text-gray-400 text-center">{cert.issued}</span>
                  </div>
                );
              })}
            </div>
            <button onClick={handleNext} className="text-2xl sm:text-3xl px-2 py-1 rounded-full bg-[#232b45] text-white hover:bg-green-400 hover:text-[#232b45] transition disabled:opacity-30" disabled={certIndex === certificates.length - 1}>&gt;</button>
          </div>
        </section>

        {/* Projects Section */}
        {/* Removed Projects section */}

        {/* Blog Section */}
        {/* Removed Blog section */}
      </div>

      {/* Contact Section OUTSIDE main container */}
      <div className="w-full bg-[#101624] py-8 mt-24 sm:mt-[200px] px-2 sm:px-0">
        <section id="contact" className="flex flex-col items-center gap-4 w-full">
          <h2 className="text-lg sm:text-2xl font-bold pixel-font text-purple-400 mb-2">Contact</h2>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full px-0 sm:px-8">
            <form className="flex flex-col gap-4 w-full bg-[#181e34] border border-[#232b45] rounded-lg p-4 sm:p-6 shadow-2xl shadow-[#232b45] animate-float-xy">
              <input type="text" placeholder="Your Name" className="bg-[#101624] border border-[#232b45] rounded px-3 py-2 text-white focus:outline-none" />
              <input type="email" placeholder="Your Email" className="bg-[#101624] border border-[#232b45] rounded px-3 py-2 text-white focus:outline-none" />
              <textarea placeholder="Your Message" className="bg-[#101624] border border-[#232b45] rounded px-3 py-2 text-white focus:outline-none" rows={4} />
              <button type="submit" className="bg-yellow-400 text-[#101624] font-bold rounded px-4 py-2 hover:bg-yellow-300 transition">Send</button>
            </form>
            <div className="flex items-center h-full mt-4 sm:mt-0"><Image src="/call.png" alt="Contact" width={120} height={120} className="rounded-full animate-bounce max-h-[180px] sm:max-h-[420px] w-auto h-[80%] min-h-[80px] sm:min-h-[180px]" /></div>
          </div>
          <a href="/resume.pdf" download className="mt-2 text-yellow-300 underline hover:text-yellow-400">Download Resume</a>
        </section>
      </div>
    </div >
  );
}

