import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface AccordionFeatureProps {
  title: string;
  children: React.ReactNode;
  isOpen?: boolean;
}

const AccordionFeature: React.FC<AccordionFeatureProps> = ({
  title,
  children,
  isOpen = false
}) => {
  const [open, setOpen] = useState(isOpen);

  return (
    <div
      className={`feature-item group relative border-b border-gray-200 transition-all duration-300 ${open ? 'pb-6' : 'pb-0'}`}
      data-state={open ? 'open' : 'closed'}
    >
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-6 text-left"
        aria-expanded={open}
      >
        <h3 className="text-base sm:text-lg font-medium text-gray-800">{title}</h3>
        <div className="ml-4 flex-shrink-0">
          {
            open ? (<div className="icon-minus">
              <Minus className="h-5 w-5 text-mediaplus-orange transition-all" />
            </div>) :
              (<div className="icon-plus">
                <Plus className="h-5 w-5 text-mediaplus-orange transition-all" />
              </div>)
          }
        </div>
      </button>

      {open && (
        <div className="animate-fade-in pt-1">
          {children}
        </div>
      )}
    </div>
  );
};

export default AccordionFeature;
