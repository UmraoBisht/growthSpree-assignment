function StatCard({ number, title, description }: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="relative bg-gradient-to-b from-[#FFF5F2] to-[#FFFFFF] border border-[#FF7F57] border-opacity-20 rounded-2xl p-8 flex flex-col items-center text-center shadow-md max-w-[300px] sm:max-w-[350px]">

      {/* Gradient Number */}
      <span
        className="text-5xl font-bold mb-3 bg-gradient-to-b from-[#E97B5F] to-[#FFC2B2] text-transparent bg-clip-text"
      >
        {number}
      </span>

      {/* Title (Two-line Effect) */}
      <h3 className="text-[#E97B5F] font-semibold text-xl leading-tight">
        {title}
      </h3>

      {/* Description */}
      <p className="text-[#4A4A4A] text-sm mt-2 leading-relaxed max-w-[80%]">
        {description}
      </p>
    </div>
  );
}

export default StatCard;
