import NavLink from "./NavLink";

interface MobileMenuProps {
    isOpen: boolean;
    toggleMenu?: () => void;
    toggleDarkMode: () => void;
    isDark: boolean;
}

export default function MobileMenu({ isOpen, toggleDarkMode, isDark }: MobileMenuProps) {
    if (!isOpen) return null;
    return (
        <div className="md:hidden bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-2xl shadow-lg p-6 mt-4">
            <div className="flex flex-col gap-4">
                {["Product", "Customers", "Resources", "About us"].map((item) => (
                    <NavLink key={item} label={item} />
                ))}
                <a href="#" className="text-[#4A4A4A] dark:text-gray-300 hover:text-[#1A1A1A] dark:hover:text-white text-[16px] font-normal transition-colors duration-200">
                    Plans
                </a>
            </div>
            <div className="mt-6 flex flex-col gap-4">
                <button className="text-[#E97B5F] dark:text-[#F89F85] hover:text-[#D66D53] text-[16px] font-medium transition-colors duration-200">
                    Login
                </button>
                <button className="bg-[#E97B5F] hover:bg-[#D66D53] text-white px-6 py-3 rounded-lg text-[16px] font-medium shadow-[0_2px_4px_rgba(233,123,95,0.3)] hover:shadow-[0_4px_8px_rgba(233,123,95,0.4)] transition-all duration-200">
                    Request a Demo
                </button>
            </div>
            <button onClick={toggleDarkMode} className="mt-4 p-2 w-full flex justify-center items-center rounded-lg bg-gray-200 dark:bg-gray-800 text-black dark:text-white transition-all">
                {isDark ? "☀️ Light Mode" : "🌙 Dark Mode"}
            </button>
        </div>
    );
}
