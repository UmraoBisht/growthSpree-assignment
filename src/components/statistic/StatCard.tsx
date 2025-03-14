import React from "react";

interface StatCardProps {
  number: string;
  title: string;
  description: string;
}

const StatCard: React.FC<StatCardProps> = ({ number, title, description }) => {
  return (
    <div className="relative bg-gradient-to-b from-[#FFF5F2] to-[#FFFFFF] dark:from-[#222222] dark:to-[#333333] border border-[#FF7F57] dark:border-[#E56A42] border-opacity-20 rounded-2xl p-8 flex flex-col items-center text-center shadow-md max-w-[300px] sm:max-w-[350px] transition-colors duration-300">
      {/* Gradient Number (Adjusting for Dark Mode) */}
      <span className="text-5xl font-bold mb-3 bg-gradient-to-b from-[#E97B5F] to-[#FFC2B2] dark:from-[#FF9F7F] dark:to-[#E97B5F] text-transparent bg-clip-text">
        {number}
      </span>

      {/* Title */}
      <h3 className="text-[#E97B5F] dark:text-[#FF9F7F] font-semibold text-xl leading-tight">
        {title}
      </h3>

      {/* Description */}
      <p className="text-[#4A4A4A] dark:text-gray-300 text-sm mt-2 leading-relaxed max-w-[80%]">
        {description}
      </p>
    </div>
  );
};

export default StatCard;