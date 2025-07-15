import Image from "next/image";

export default function Profile() {
  return (
    <div className="min-h-screen bg-[#181e34] text-white flex flex-col items-center pb-16">
      {/* Banner */}
      <div className="w-full h-48 bg-gradient-to-r from-pink-400 via-yellow-300 to-blue-400 flex items-end relative">
        <Image src="/banner.jpg" alt="Banner" fill style={{ objectFit: 'cover', opacity: 0.7 }} className="rounded-b-lg" />
      </div>
      {/* Avatar and Username */}
      <div className="relative w-full flex flex-col items-center -mt-16">
        <div className="w-32 h-32 rounded-full border-4 border-[#232b45] bg-[#232b45] flex items-center justify-center overflow-hidden">
          <Image src="/avatar.jpg" alt="Avatar" width={128} height={128} />
        </div>
        <h1 className="text-3xl font-bold pixel-font mt-2">Harshitha Salian</h1>
        <span className="text-gray-400 font-mono">@harshisalian</span>
        <button className="mt-2 px-4 py-1 bg-[#232b45] border border-yellow-400 rounded-full text-yellow-300 font-bold hover:bg-yellow-400 hover:text-[#232b45] transition">Edit Profile</button>
      </div>
      {/* Main Content */}
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6 mt-8 px-4">
        {/* Left Column */}
        <div className="flex flex-col gap-6">
          {/* Bio */}
          <div className="bg-[#232b45] rounded-lg p-4 pixel-card">
            <h2 className="pixel-font text-lg mb-2">Bio</h2>
            <div className="flex items-center gap-2 mb-2">
              <span className="bg-yellow-400 text-[#232b45] rounded-full px-2 py-1 text-xs font-bold">Lvl 1</span>
              <span className="text-xs text-gray-400">Joined Jun 19, 2025</span>
            </div>
            <p className="text-gray-200 text-sm">You don&apos;t have anything in your bio. Go to account and edit profile to add something cool about yourself.</p>
          </div>
          {/* Skills */}
          <div className="bg-[#232b45] rounded-lg p-4 pixel-card">
            <h2 className="pixel-font text-lg mb-2">Skills</h2>
            <p className="text-gray-400 text-sm">Add skills from account settings.</p>
          </div>
          {/* Pet Café */}
          <div className="bg-[#232b45] rounded-lg p-4 pixel-card flex flex-col items-center">
            <h2 className="pixel-font text-lg mb-2">Pet Café</h2>
            <Image src="/pet-egg.png" alt="Pet Egg" width={64} height={64} />
          </div>
        </div>
        {/* Center Column */}
        <div className="flex flex-col gap-6 col-span-2">
          {/* Pinned Project */}
          <div className="bg-[#232b45] rounded-lg p-4 pixel-card flex flex-col items-center justify-center min-h-[120px] border-dashed border-2 border-gray-400">
            <h2 className="pixel-font text-lg mb-2">Pinned</h2>
            <span className="text-gray-400">Pin a project</span>
          </div>
          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            <div className="bg-[#181e34] rounded-lg p-4 pixel-card flex flex-col items-center">
              <span className="pixel-font text-2xl text-blue-300">5</span>
              <span className="text-xs text-gray-400">EXERCISES</span>
            </div>
            <div className="bg-[#181e34] rounded-lg p-4 pixel-card flex flex-col items-center">
              <span className="pixel-font text-2xl text-pink-300">50</span>
              <span className="text-xs text-gray-400">TOTAL XP</span>
            </div>
            <div className="bg-[#181e34] rounded-lg p-4 pixel-card flex flex-col items-center">
              <span className="pixel-font text-2xl text-yellow-300">1</span>
              <span className="text-xs text-gray-400">COURSE BADGES</span>
            </div>
            <div className="bg-[#181e34] rounded-lg p-4 pixel-card flex flex-col items-center">
              <span className="pixel-font text-2xl text-purple-300">2</span>
              <span className="text-xs text-gray-400">DAILY STREAK</span>
            </div>
          </div>
          {/* Tabs */}
          <div className="bg-[#232b45] rounded-lg p-4 pixel-card mt-2">
            <div className="flex gap-4 mb-4">
              <button className="px-4 py-1 bg-[#181e34] rounded-full text-yellow-300 font-bold">Posts (0)</button>
              <button className="px-4 py-1 bg-[#181e34] rounded-full text-yellow-300 font-bold">Projects (0)</button>
              <button className="px-4 py-1 bg-[#181e34] rounded-full text-yellow-300 font-bold">Certificates</button>
            </div>
            <div className="text-gray-400 text-center">You have not made a post yet.<br />Say hi in the community!</div>
          </div>
        </div>
      </div>
    </div>
  );
} 