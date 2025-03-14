import { ChevronDown } from "lucide-react";

interface NavLinkProps {
    label: string;
}

export default function NavLink({ label }: NavLinkProps) {
    return (
        <button className="group flex items-center gap-1.5 text-[#4A4A4A] dark:text-gray-300 hover:text-[#1A1A1A] dark:hover:text-white text-[15px] font-normal transition-colors duration-200">
            {label}
            <ChevronDown className="w-[18px] h-[18px] text-[#757575] dark:text-gray-400 group-hover:text-[#1A1A1A] dark:group-hover:text-white transition-colors duration-200" />
        </button>
    );
}
