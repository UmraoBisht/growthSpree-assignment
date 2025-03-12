const StaggeredText = () => {
  return (
    <div className="bg-gradient-to-br from-[#E68967] to-[#f4a485] flex items-center justify-center px-4 py-16 mt-14">
      <div className="max-w-7xl w-full">
        <div className="space-y-8">
          {/* First Row */}
          <div className="flex flex-wrap justify-center md:justify-start items-center gap-2">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-transparent text-outline">Your</h1>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-white">Videos</h1>
          </div>

          {/* Second Row */}
          <div className="flex flex-wrap justify-center items-center gap-2">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-transparent text-outline">Your</h1>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-white">Brand</h1>
          </div>

          {/* Third Row */}
          <div className="flex flex-wrap justify-center md:justify-end items-center gap-2">
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-transparent text-outline">Your</h1>
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-white">Website</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaggeredText;
