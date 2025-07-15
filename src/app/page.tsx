'use client';

import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  // Typing animation for welcome message
  const welcomeText = "Namaste peoples, welcome to ETALYX world!";
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
    <div className="relative w-full max-w-6xl mx-auto flex flex-col gap-12 pt-8 px-4">
      {/* Pixel Computer and Speech Bubble (top left) */}
      <div className="flex flex-row items-center gap-4 mb-8">
        <Image src="/pixel-computer.png" alt="Pixel Computer" width={80} height={80} />
        <div className="bg-[#232b45] text-white rounded-lg px-6 py-3 pixel-font text-lg shadow-lg border border-[#232b45] whitespace-pre min-w-[320px]">
          {typedText}
          <span className="animate-pulse">|</span>
        </div>
      </div>
      {/* Profile Card at top right below nav, sticky and bouncing, 100px from right */}
      <div className="hidden lg:flex w-full justify-end pointer-events-none" style={{ position: 'sticky', top: '88px', zIndex: 20 }}>
        <div
          className="pointer-events-auto mr-[-294px] bg-[#181e34] border-2 border-[#232b45] rounded-lg p-6 flex flex-col items-center pixel-card shadow-lg mt-2 w-[340px] animate-[bounce_2s_infinite_100ms]"
          style={{ opacity: profileOpacity, transition: 'opacity 0.2s cubic-bezier(0.4,0,0.2,1)' }}
        >
          <Image src="/introduction.png" alt="Avatar" width={96} height={96} className="mb-2" />
          <div className="text-xl font-bold mb-[5px]">Harshitha</div>
          <div className="text-sm text-gray-300 mb-2">ETALYX</div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-2 mb-4">
            <div className="flex items-center gap-2"><Image src="/pixel-xp.png" alt="XP" width={20} height={20} /> <span className="font-bold">50</span> <span className="text-xs text-gray-400">Total XP</span></div>
            <div className="flex items-center gap-2"><Image src="/pixel-rank.png" alt="Rank" width={20} height={20} /> <span className="font-bold">Bronze</span> <span className="text-xs text-gray-400">Rank</span></div>
            <div className="flex items-center gap-2"><Image src="/pixel-badge.png" alt="Badges" width={20} height={20} /> <span className="font-bold">1</span> <span className="text-xs text-gray-400">Badges</span></div>
            <div className="flex items-center gap-2"><Image src="/pixel-streak.png" alt="Streak" width={20} height={20} /> <span className="font-bold">2</span> <span className="text-xs text-gray-400">Day streak</span></div>
          </div>
          <button className="w-full border-2 border-[#bfc9e0] rounded px-4 py-2 mt-2 pixel-font text-lg text-white hover:bg-[#232b45] transition">View profile</button>
        </div>
      </div>
      {/* Main Content */}
      <div className="flex flex-col gap-16 lg:pr-0">
        {/* Home Section with Profile Card */}
        <section id="home" className="flex flex-row items-start gap-8 w-full max-w-4xl mt-[-405px] ml-4">
          <div className="flex flex-col items-start gap-4 flex-1 -ml-[50px]">
            <h1 className="text-4xl font-bold pixel-font text-yellow-400 mb-2 ml-2">HOLA,</h1>
            <div className="text-2xl font-bold pixel-font text-yellow-300 ml-2">This is Harshitha Salian</div>
            <p className="text-base text-gray-300 leading-8 max-w-xl ml-2">
              Third-year Computer Science Engineering student at Shree Devi Institute of Technology, passionate about coding, technology, and real-world projects. Always curious and open to new opportunities for growth.
            </p>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="flex flex-col items-center gap-4 mt-[130px]">
          <div className="flex flex-row items-center bg-[#181e34] border border-[#232b45] rounded-lg p-8 shadow-lg w-[1300px] h-[500px] min-w-[1300px] min-h-[500px] max-w-none max-h-none">
            <div className="flex-shrink-0 flex flex-col items-center justify-center h-full mr-[33px] gap-4">
              <Image src="/jumping.png" alt="Jumping" width={240} height={240} className="mb-2" />

            </div>
            <div className="flex flex-col items-start w-full h-full justify-center">
              <h2 className="text-4xl font-bold pixel-font text-blue-400 mb-2">About Me</h2>
              <p className="text-base text-gray-300 leading-8">
                I am a third-year Computer Science Engineering student at Shree Devi Institute of Technology, Mangaluru. My journey in technology began with a curiosity for how things work, which soon turned into a passion for coding and building real-world solutions. I am constantly learning new programming languages, algorithms, and software development practices. I thrive in collaborative environments, enjoy participating in hackathons, and love sharing knowledge with peers. My goal is to leverage my skills to solve meaningful problems and contribute to the tech community. I am open to new opportunities, eager to volunteer for science and technology causes, and always ready to take on new challenges.
              </p>
            </div>
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="flex flex-col items-center gap-4 mt-[150px]">
          <h2 className="text-2xl font-bold pixel-font text-green-400 mb-2">Certifications</h2>
          <div className="flex flex-row items-center gap-4 mt-[100px]">
            <button onClick={handlePrev} className="text-3xl px-2 py-1 rounded-full bg-[#232b45] text-white hover:bg-green-400 hover:text-[#232b45] transition disabled:opacity-30" disabled={certIndex === 0}>&lt;</button>
            <div className="flex flex-row gap-6 w-[900px] justify-center items-center">
              {showCerts.map((i, idx) => {
                if (i < 0 || i >= certificates.length) {
                  return <div key={i} className="w-64 h-56" />; // empty space for out-of-bounds
                }
                const cert = certificates[i];
                let style = "";
                if (i === certIndex) {
                  style = "brightness-100 scale-125 shadow-2xl z-10";
                } else {
                  style = "brightness-50 scale-100 opacity-60 z-0";
                }
                return (
                  <div
                    key={cert.title}
                    className={`flex flex-col items-center bg-[#181e34] border border-[#232b45] rounded-lg p-8 shadow-lg pixel-card w-96 transition-all duration-300 ${style}`}
                  >
                    <Image src={cert.src} alt={cert.alt} width={320} height={180} className="rounded mb-4" />
                    <div className="h-[50px]" />
                    <span className="text-xl text-yellow-300 font-bold text-center mb-1">{cert.title}</span>
                    <span className="text-base text-gray-400 text-center">{cert.issued}</span>
                  </div>
                );
              })}
            </div>
            <button onClick={handleNext} className="text-3xl px-2 py-1 rounded-full bg-[#232b45] text-white hover:bg-green-400 hover:text-[#232b45] transition disabled:opacity-30" disabled={certIndex === certificates.length - 1}>&gt;</button>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="flex flex-col gap-6 mt-[200px] mb-[100px]">
          <h2 className="text-2xl font-bold pixel-font text-pink-400 mb-2">Projects</h2>
          <div className="flex flex-col items-center justify-center h-32">
            <Image src="/cloud enthusiast.png" alt="Projects Coming Soon" width={80} height={80} className="mb-2" />
            <span className="text-lg text-gray-400 italic">Coming Soon...</span>
          </div>
        </section>

        {/* Blog Section */}
        <section id="blog" className="flex flex-col gap-6">
          <h2 className="text-2xl font-bold pixel-font text-green-400 mb-2">Blog</h2>
          <div className="flex flex-col items-center justify-center h-32">
            <Image src="/blog.png" alt="Blog Coming Soon" width={80} height={80} className="mb-2" />
            <span className="text-lg text-gray-400 italic">Coming Soon...</span>
          </div>
        </section>
      </div>

      {/* Contact Section OUTSIDE main container */}
      <div className="w-full bg-[#101624] py-8 mt-[200px]">
        <section id="contact" className="flex flex-col items-center gap-4 w-full">
          <h2 className="text-2xl font-bold pixel-font text-purple-400 mb-2">Contact</h2>
          <div className="flex flex-row items-center gap-6 w-full px-8">
            <form className="flex flex-col gap-4 w-full bg-[#181e34] border border-[#232b45] rounded-lg p-6 shadow-lg">
              <input type="text" placeholder="Your Name" className="bg-[#101624] border border-[#232b45] rounded px-3 py-2 text-white focus:outline-none" />
              <input type="email" placeholder="Your Email" className="bg-[#101624] border border-[#232b45] rounded px-3 py-2 text-white focus:outline-none" />
              <textarea placeholder="Your Message" className="bg-[#101624] border border-[#232b45] rounded px-3 py-2 text-white focus:outline-none" rows={4} />
              <button type="submit" className="bg-yellow-400 text-[#101624] font-bold rounded px-4 py-2 hover:bg-yellow-300 transition">Send</button>
            </form>
            <div className="flex items-center h-full"><Image src="/call.png" alt="Contact" width={220} height={220} className="rounded-full animate-bounce max-h-[420px] w-auto h-[80%] min-h-[180px]" /></div>
          </div>
          <a href="/resume.pdf" download className="mt-2 text-yellow-300 underline hover:text-yellow-400">Download Resume</a>
        </section>
      </div>
    </div >
  );
}

