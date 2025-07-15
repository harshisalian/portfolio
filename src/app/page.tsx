import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col gap-16 py-12">
      {/* Home Section */}
      <section id="home" className="flex flex-col items-center gap-4">
        <h1 className="text-4xl font-bold pixel-font text-yellow-400 mb-2">Hi, I&apos;m Harshitha Salian</h1>
        <p className="text-lg text-gray-300 max-w-xl text-center">Third-year Computer Science Engineering student at Shree Devi Institute of Technology, passionate about coding, technology, and real-world projects. Always curious and open to new opportunities for growth.</p>
      </section>

      {/* About Section */}
      <section id="about" className="flex flex-col items-center gap-4">
        <h2 className="text-2xl font-bold pixel-font text-blue-400 mb-2">About Me</h2>
        <p className="text-lg text-gray-300 max-w-2xl text-center">
          I am a third-year Computer Science Engineering student at Shree Devi Institute of Technology, Mangaluru. My journey in technology began with a curiosity for how things work, which soon turned into a passion for coding and building real-world solutions. I am constantly learning new programming languages, algorithms, and software development practices. I thrive in collaborative environments, enjoy participating in hackathons, and love sharing knowledge with peers. My goal is to leverage my skills to solve meaningful problems and contribute to the tech community. I am open to new opportunities, eager to volunteer for science and technology causes, and always ready to take on new challenges.
        </p>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="flex flex-col items-center gap-4">
        <h2 className="text-2xl font-bold pixel-font text-green-400 mb-2">Certifications</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Example certificate cards, replace src with your actual certificate images */}
          <div className="flex flex-col items-center bg-[#181e34] border border-[#232b45] rounded-lg p-4 shadow-lg pixel-card w-64">
            <Image src="/cert1.jpg" alt="Deloitte Australia - Cyber Job Simulation" width={200} height={120} className="rounded mb-2" />
            <span className="text-yellow-300 font-bold text-center">Deloitte Australia - Cyber Job Simulation</span>
            <span className="text-gray-400 text-xs text-center">Issued Jun 2025</span>
          </div>
          <div className="flex flex-col items-center bg-[#181e34] border border-[#232b45] rounded-lg p-4 shadow-lg pixel-card w-64">
            <Image src="/cert2.jpg" alt="AI Tools and ChatGPT Workshop - Be10x" width={200} height={120} className="rounded mb-2" />
            <span className="text-yellow-300 font-bold text-center">AI Tools and ChatGPT Workshop - Be10x</span>
            <span className="text-gray-400 text-xs text-center">Issued 2025</span>
          </div>
          <div className="flex flex-col items-center bg-[#181e34] border border-[#232b45] rounded-lg p-4 shadow-lg pixel-card w-64">
            <Image src="/cert3.jpg" alt="JavaScript Course - Infosys Springboard" width={200} height={120} className="rounded mb-2" />
            <span className="text-yellow-300 font-bold text-center">JavaScript Course - Infosys Springboard</span>
            <span className="text-gray-400 text-xs text-center">Issued 2025</span>
          </div>
          <div className="flex flex-col items-center bg-[#181e34] border border-[#232b45] rounded-lg p-4 shadow-lg pixel-card w-64">
            <Image src="/cert4.jpg" alt="CSS3 Course - Infosys Springboard" width={200} height={120} className="rounded mb-2" />
            <span className="text-yellow-300 font-bold text-center">CSS3 Course - Infosys Springboard</span>
            <span className="text-gray-400 text-xs text-center">Issued 2025</span>
          </div>
          <div className="flex flex-col items-center bg-[#181e34] border border-[#232b45] rounded-lg p-4 shadow-lg pixel-card w-64">
            <Image src="/cert5.jpg" alt="HTML5 – The Language - Infosys" width={200} height={120} className="rounded mb-2" />
            <span className="text-yellow-300 font-bold text-center">HTML5 – The Language - Infosys</span>
            <span className="text-gray-400 text-xs text-center">Issued 2025</span>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold pixel-font text-pink-400 mb-2">Projects</h2>
        <div className="flex items-center justify-center h-32">
          <span className="text-lg text-gray-400 italic">Coming Soon...</span>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="flex flex-col gap-6">
        <h2 className="text-2xl font-bold pixel-font text-green-400 mb-2">Blog</h2>
        <div className="flex items-center justify-center h-32">
          <span className="text-lg text-gray-400 italic">Coming Soon...</span>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="flex flex-col items-center gap-4">
        <h2 className="text-2xl font-bold pixel-font text-purple-400 mb-2">Contact</h2>
        <div className="flex flex-col items-center gap-2">
          {/* Small image near contact info */}
          <Image src="/call.jpg" alt="Contact" width={48} height={48} className="rounded-full animate-bounce" />
          <form className="flex flex-col gap-4 w-full max-w-2xl bg-[#181e34] border border-[#232b45] rounded-lg p-6 shadow-lg">
            <input type="text" placeholder="Your Name" className="bg-[#101624] border border-[#232b45] rounded px-3 py-2 text-white focus:outline-none" />
            <input type="email" placeholder="Your Email" className="bg-[#101624] border border-[#232b45] rounded px-3 py-2 text-white focus:outline-none" />
            <textarea placeholder="Your Message" className="bg-[#101624] border border-[#232b45] rounded px-3 py-2 text-white focus:outline-none" rows={4} />
            <button type="submit" className="bg-yellow-400 text-[#101624] font-bold rounded px-4 py-2 hover:bg-yellow-300 transition">Send</button>
          </form>
          <a href="/resume.pdf" download className="mt-2 text-yellow-300 underline hover:text-yellow-400">Download Resume</a>
        </div>
      </section>
    </div>
  );
}
