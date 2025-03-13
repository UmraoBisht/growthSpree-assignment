import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

interface AccordionFeatureProps {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
}

const AccordionFeature: React.FC<AccordionFeatureProps> = ({
  title,
  children,
  isOpen = false,
}) => {
  const [open, setOpen] = useState(isOpen);

  return (
    <div
      className={`feature-item group relative border-b border-gray-200 dark:border-gray-600 transition-all duration-300 
      ${open ? "pb-6" : "pb-0"}`}
      data-state={open ? "open" : "closed"}
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-6 text-left transition-colors"
        aria-expanded={open}
      >
        <h3 className="text-base sm:text-lg font-medium text-gray-800 dark:text-gray-100">
          {title}
        </h3>
        <div
          className={`ml-4 flex-shrink-0 transition-transform ${
            open ? "rotate-180" : "rotate-0"
          }`}
        >
          {open ? (
            <Minus className="h-5 w-5 text-[#ff7a5c] dark:text-orange-400 transition-all" />
          ) : (
            <Plus className="h-5 w-5 text-[#ff7a5c] dark:text-orange-400 transition-all" />
          )}
        </div>
      </button>

      {open && <div className="animate-fade-in pt-1 text-gray-600 dark:text-gray-300">{children}</div>}
    </div>
  );
};

export default AccordionFeature;
