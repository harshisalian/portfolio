import Image from "next/image";

export default function Blog() {
  return (
    <div className="flex flex-col gap-8 items-center justify-center min-h-screen bg-transparent pt-24">
      <h2 className="text-4xl font-extrabold pixel-font text-green-400 drop-shadow-lg mb-2 animate-pulse tracking-widest" style={{ textShadow: '0 0 12px #22d3ee, 0 0 24px #22d3ee' }}>Blog</h2>
      <div className="flex flex-col items-center justify-center gap-4 bg-[#181e34cc] border-4 border-[#22d3ee] rounded-2xl shadow-2xl shadow-[#232b45] px-12 py-10 animate-float">
        <Image src="/blog.png" alt="Blog Coming Soon" width={200} height={200} className="mb-2" style={{ filter: 'drop-shadow(0 0 24px #22d3ee)' }} />
        <span className="text-2xl font-bold text-pink-400 pixel-font animate-pulse mb-2">Coming Soon...</span>
        <span className="text-base text-gray-300 text-center max-w-md mt-2">Stay tuned for stories, tutorials, and tech adventures!<br />Exciting content is on its way 🚀</span>
      </div>
    </div>
  );
} 