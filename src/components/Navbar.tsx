import { ChevronDown, Menu, Moon, Sun, X } from "lucide-react";
import { useEffect, useState } from "react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const storedTheme = localStorage.getItem("theme");

        if (storedTheme === "dark" || (!storedTheme && isDarkMode)) {
            document.documentElement.classList.add("dark");
            setIsDark(true);
        } else {
            document.documentElement.classList.remove("dark");
            setIsDark(false);
        }
    }, []);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const toggleDarkMode = () => {
        if (isDark) {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        } else {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
        setIsDark(!isDark);
    };

    return (
        <nav className="px-6 sm:px-8 py-5 fixed w-full bg-transparent top-0 z-50">
            <div className="flex items-center justify-between bg-transparent backdrop-blur-3xl border py-2.5 px-4 sm:px-6 rounded-3xl dark:border-gray-700">
                <div className="text-2xl font-semibold text-black dark:text-white">[]</div>

                <div className="hidden md:flex items-center gap-10">
                    <div className="flex items-center gap-6">
                        {["Product", "Customers", "Resources", "About us"].map((item) => (
                            <button key={item} className="group flex items-center gap-1.5 text-[#4A4A4A] dark:text-gray-300 hover:text-[#1A1A1A] dark:hover:text-white text-[15px] font-normal transition-colors duration-200">
                                {item}
                                <ChevronDown className="w-[18px] h-[18px] text-[#757575] dark:text-gray-400 group-hover:text-[#1A1A1A] dark:group-hover:text-white transition-colors duration-200" />
                            </button>
                        ))}
                        <a href="#" className="text-[#4A4A4A] dark:text-gray-300 hover:text-[#1A1A1A] dark:hover:text-white text-[15px] font-normal transition-colors duration-200">
                            Plans
                        </a>
                    </div>

                    <button onClick={toggleDarkMode} className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-black dark:text-white transition-all">
                        {isDark ? <Sun size={18} /> : <Moon size={18} />}
                    </button>

                    <div className="flex items-center gap-5">
                        <button className="text-[#E97B5F] dark:text-[#F89F85] hover:text-[#D66D53] text-[15px] font-medium transition-colors duration-200">
                            Login
                        </button>
                        <button className="bg-[#E97B5F] hover:bg-[#D66D53] text-white px-[22px] py-[10px] rounded-[10px] text-[15px] font-medium shadow-[0_2px_4px_rgba(233,123,95,0.3)] hover:shadow-[0_4px_8px_rgba(233,123,95,0.4)] transition-all duration-200">
                            Request a Demo
                        </button>
                    </div>
                </div>

                <button onClick={toggleMenu} className="md:hidden text-[#1A1A1A] dark:text-white">
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {isOpen && (
                <div className="md:hidden bg-white dark:bg-gray-900 border dark:border-gray-700 rounded-2xl shadow-lg p-6 mt-4">
                    <div className="flex flex-col gap-4">
                        {["Product", "Customers", "Resources", "About us"].map((item) => (
                            <button key={item} className="flex justify-between items-center text-[#4A4A4A] dark:text-gray-300 hover:text-[#1A1A1A] dark:hover:text-white text-[16px] font-normal transition-colors duration-200">
                                {item} <ChevronDown className="w-5 h-5 text-[#757575] dark:text-gray-400" />
                            </button>
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
            )}
        </nav>
    );
}

export default Navbar;
