import Image from "next/image";

export default function Profile() {
  return (
    <div className="min-h-screen w-full flex flex-col items-center justify-start bg-transparent px-2 pt-12">
      <div className="w-full max-w-6xl flex flex-col md:flex-row gap-8 items-start">
        {/* Left: Profile Card */}
        <div className="md:w-1/3 w-full max-w-lg flex flex-col items-center bg-[#181e34] border border-[#232b45] rounded-2xl shadow-2xl shadow-[#232b45] p-8 animate-float" style={{ width: 'calc(100% + 50px)', minHeight: '450px' }}>
          <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-[#232b45] mb-4">
            <Image src="/harshie.jpg" alt="Profile" width={300} height={300} className="object-cover w-full h-full" />
          </div>
          <h1 className="text-3xl font-bold text-white mb-1">Harshitha</h1>
          <div className="text-gray-400 text-xs mb-1">harshisalian · she/her</div>
          <div className="w-full flex flex-col gap-4 mb-4 mt-2">
            <div className="text-xl font-bold text-white mb-2">LANGUAGES</div>
            <div className="text-xs text-gray-400 mb-1 ml-1">languages that I speak</div>
            <ul className="list-disc list-inside text-gray-300 text-[0.5rem] ml-4">
              <li>Tulu</li>
              <li>Kannada</li>
              <li>English</li>
              <li>Hindi</li>
            </ul>
            <div className="text-xs text-gray-400 mb-1 ml-1">languages that I code</div>
            <ul className="list-disc list-inside text-gray-300 text-[0.5rem] ml-4">
              <li>Java</li>
              <li>Python</li>
              <li>TypeScript</li>
            </ul>
          </div>
          {/* Social Icons at the bottom of the card */}
          <div className="flex flex-row gap-6 mt-6 mb-2">
            <a href="https://www.linkedin.com/in/harshitha-salian-36a923253/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="4" fill="#0A66C2" />
                <path d="M7.5 8.5C8.32843 8.5 9 7.82843 9 7C9 6.17157 8.32843 5.5 7.5 5.5C6.67157 5.5 6 6.17157 6 7C6 7.82843 6.67157 8.5 7.5 8.5Z" fill="white" />
                <path d="M6.75 10H8.25V18H6.75V10Z" fill="white" />
                <path d="M10.75 10H12.25V11.1C12.25 11.1 12.75 10 14.25 10C15.75 10 16.25 11.1 16.25 12.5V18H14.75V13C14.75 12.45 14.3 12 13.75 12C13.2 12 12.75 12.45 12.75 13V18H11.25V10H10.75Z" fill="white" />
              </svg>
            </a>
            <a href="mailto:harshisalian3003@gmail.com" target="_blank" rel="noopener noreferrer" title="Gmail">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="4" fill="#fff" />
                <path d="M3 7.5V16.5C3 17.3284 3.67157 18 4.5 18H19.5C20.3284 18 21 17.3284 21 16.5V7.5C21 6.67157 20.3284 6 19.5 6H4.5C3.67157 6 3 6.67157 3 7.5Z" fill="#EA4335" />
                <path d="M3 7.5L12 13.5L21 7.5" stroke="#34A853" strokeWidth="2" />
              </svg>
            </a>
            <a href="https://www.instagram.com/harshiee.salian/" target="_blank" rel="noopener noreferrer" title="Instagram">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="4" fill="#fff" />
                <radialGradient id="ig-gradient" cx="0.5" cy="0.5" r="0.5">
                  <stop offset="0%" stopColor="#f9ce34" />
                  <stop offset="50%" stopColor="#ee2a7b" />
                  <stop offset="100%" stopColor="#6228d7" />
                </radialGradient>
                <rect width="24" height="24" rx="4" fill="url(#ig-gradient)" />
                <circle cx="12" cy="12" r="5" stroke="white" strokeWidth="2" />
                <circle cx="18" cy="6" r="1" fill="white" />
              </svg>
            </a>
            <a href="https://github.com/harshisalian" target="_blank" rel="noopener noreferrer" title="GitHub">
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="24" height="24" rx="4" fill="#181717" />
                <path d="M12 2C6.48 2 2 6.58 2 12.26C2 16.62 4.87 20.26 8.84 21.5C9.34 21.58 9.5 21.3 9.5 21.06C9.5 20.85 9.49 20.3 9.49 19.61C7 20.09 6.35 18.73 6.13 18.18C6.02 17.91 5.5 17.03 5.09 16.81C4.75 16.63 4.22 16.13 5.08 16.12C5.9 16.11 6.5 16.89 6.68 17.16C7.64 18.7 9.13 18.26 9.72 18.01C9.8 17.36 10.05 16.92 10.33 16.7C8.28 16.48 6.08 15.77 6.08 12.5C6.08 11.53 6.43 10.74 7.01 10.12C6.91 9.9 6.6 8.93 7.11 7.67C7.11 7.67 7.86 7.43 9.5 8.57C10.2 8.37 10.97 8.27 11.74 8.27C12.51 8.27 13.28 8.37 13.98 8.57C15.62 7.43 16.37 7.67 16.37 7.67C16.88 8.93 16.57 9.9 16.47 10.12C17.05 10.74 17.4 11.53 17.4 12.5C17.4 15.78 15.19 16.48 13.14 16.7C13.5 16.98 13.81 17.54 13.81 18.36C13.81 19.44 13.8 20.67 13.8 21.06C13.8 21.3 13.96 21.59 14.46 21.5C18.43 20.26 21.3 16.62 21.3 12.26C21.3 6.58 16.82 2 12 2Z" fill="white" />
              </svg>
            </a>
          </div>
        </div>
        {/* Right: Repos and Contributions */}
        <div className="md:w-2/3 w-full flex flex-col gap-8">
          {/* Who am I section (replaces Popular repositories) */}
          <div className="bg-[#181e34] border border-[#232b45] rounded-2xl shadow-2xl shadow-[#232b45] p-6 max-w-2xl w-full flex flex-col items-start justify-center animate-float" style={{ minHeight: '270px', width: 'calc(100% + 50px)' }}>
            <div className="flex flex-row items-center gap-3 mb-2">
              {/* Example SVG icon, replace with your own if needed */}
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C7 2 2 7 2 12s5 10 10 10 10-5 10-10S17 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" fill="#b91c1c" />
                <path d="M15 9c0-1.66-1.34-3-3-3S9 7.34 9 9c0 1.31.84 2.42 2 2.83V17h2v-5.17c1.16-.41 2-1.52 2-2.83z" fill="#b91c1c" />
              </svg>
              <span className="text-3xl font-bold text-white">who am I?</span>
            </div>
            <div className="text-gray-300 text-sm ml-1">
              Founder of Etalyx. Artist by hobby, but let's be real—my true passion is coding. I treat bugs like mini-bosses, and yes, I actually get excited about fixing them. Coding isn’t just work, it’s my favorite flavor of chaos. If you want someone who can turn coffee into code and memes into motivation, you’re in the right place. Let’s build something that’ll make our future selves say, “Wow, we really did that?”
            </div>
          </div>
          {/* Education / Experience section (replaces contributions grid) */}
          <div className="bg-[#181e34] border border-[#232b45] rounded-2xl shadow-2xl shadow-[#232b45] p-6 max-w-2xl w-full flex flex-col items-start justify-center relative overflow-hidden animate-float" style={{ minHeight: '370px', width: 'calc(100% + 50px)' }}>
            <h2 className="text-2xl font-bold text-white mb-4">education / experience</h2>
            <ul className="space-y-6">
              <li className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-red-500 inline-block"></span>
                <div>
                  <span className="font-mono text-sm text-white">2008 - 2017</span><br />
                  <span className="text-gray-300 text-xs">Art school</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-red-500 inline-block"></span>
                <div>
                  <span className="font-mono text-sm text-white">2017 - 2021</span><br />
                  <span className="text-gray-300 text-xs">Art college in Graphic Design</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-red-500 inline-block"></span>
                <div>
                  <span className="font-mono text-sm text-white">2019 - ...</span><br />
                  <span className="text-gray-300 text-xs">Freelancing / creating and drawing characters / locations / illustrations</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-red-500 inline-block"></span>
                <div>
                  <span className="font-mono text-sm text-white">2021 - 2022</span><br />
                  <span className="text-gray-300 text-xs">The online school XYZ at Concept Art</span>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 w-2 h-2 rounded-full bg-red-500 inline-block"></span>
                <div>
                  <span className="font-mono text-sm text-white">2021 - 2022</span><br />
                  <span className="text-gray-300 text-xs">Working at Targem Games studio: creating concepts of military equipment / 3D modeling / drawing loading screens</span>
                </div>
              </li>
            </ul>
            {/* Decorative SVG or image can be added here if needed */}
          </div>
        </div>
      </div>
    </div>
  );
} 