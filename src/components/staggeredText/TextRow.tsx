interface TextRowProps {
    firstText: string;
    secondText: string;
    alignment?: "start" | "center" | "end";
  }
  
 export const TextRow: React.FC<TextRowProps> = ({ firstText, secondText, alignment = "center" }) => {
    const justifyClass =
      alignment === "start"
        ? "md:justify-start"
        : alignment === "end"
        ? "md:justify-end"
        : "justify-center";
  
    return (
      <div className={`flex flex-wrap ${justifyClass} items-center gap-2`}>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-transparent text-outline">
          {firstText}
        </h1>
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-medium text-white dark:text-gray-200">
          {secondText}
        </h1>
      </div>
    );
  };