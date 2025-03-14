import React from "react";

import brandLogo from "../assets/image 1139.png";
import brandLogo1 from "../assets/image 1138.png";
import brandLogo2 from "../assets/image 1142.png";
import brandLogo3 from "../assets/Agora logo.png";
import brandLogo4 from "../assets/Frame 1000006879.png";

// Define a type for the brand logos
type BrandLogo = {
  src: string;
  alt: string;
};

// Store brand logos in an array for better readability and maintainability
const brandLogos: BrandLogo[] = [
  { src: brandLogo1, alt: "Brand Logo 1" },
  { src: brandLogo, alt: "Brand Logo 2" },
  { src: brandLogo3, alt: "Brand Logo 3" },
  { src: brandLogo4, alt: "Brand Logo 4" },
  { src: brandLogo2, alt: "Brand Logo 5" },
];

const PerfectedBy: React.FC = () => {
  return (
    <div className="mt-14 flex flex-col items-center bg-[#E4875D] dark:bg-[#7a3e2b] py-12 transition-colors duration-300">
      {/* Title */}
      <h2 className="text-2xl font-bold text-gray-500 dark:text-gray-300 mb-6">
        Perfected by
      </h2>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 w-full max-w-4xl px-6">
        {brandLogos.map((logo, index) => (
          <div key={index} className="flex justify-center">
            <img
              src={logo.src}
              alt={logo.alt}
              className="w-28 sm:w-32 md:w-36 object-contain dark:invert"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PerfectedBy;
