import Image from "next/image";

export default function Projects() {
  return (
    <div className="flex flex-col gap-6 items-center justify-center min-h-screen bg-[#101624] pt-24">
      <h2 className="text-2xl font-bold pixel-font text-pink-400 mb-2">Projects</h2>
      <div className="flex flex-col items-center justify-center h-32">
        <Image src="/cloud enthusiast.png" alt="Projects Coming Soon" width={80} height={80} className="mb-2" />
        <span className="text-lg text-gray-400 italic">Coming Soon...</span>
      </div>
    </div>
  );
} 