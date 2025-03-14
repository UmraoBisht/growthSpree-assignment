import { useEffect, useState } from "react";
import NavLink from "./NavLink";
import { Menu, X } from "lucide-react";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "./ToggleTheme";

function Navbar() {
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const [isDark, setIsDark] = useState<boolean>(false);

    useEffect(() => {
        const isDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
        const storedTheme = localStorage.getItem("theme");
        const darkModeEnabled = storedTheme === "dark" || (!storedTheme && isDarkMode);
        document.documentElement.classList.toggle("dark", darkModeEnabled);
        setIsDark(darkModeEnabled);
    }, []);

    const toggleMenu = () => setIsOpen(!isOpen);
    const toggleDarkMode = () => {
        const newTheme = isDark ? "light" : "dark";
        document.documentElement.classList.toggle("dark", !isDark);
        localStorage.setItem("theme", newTheme);
        setIsDark(!isDark);
    };

    return (
        <nav className="px-6 sm:px-8 py-5 fixed w-full bg-transparent top-0 z-50">
            <div className="flex items-center justify-between bg-transparent backdrop-blur-3xl border py-2.5 px-4 sm:px-6 rounded-3xl dark:border-gray-700">
                <div className="text-2xl font-semibold text-black dark:text-white">[]</div>
                <div className="hidden md:flex items-center gap-10">
                    <div className="flex items-center gap-6">
                        {["Product", "Customers", "Resources", "About us"].map((item) => (
                            <NavLink key={item} label={item} />
                        ))}
                        <a href="#" className="text-[#4A4A4A] dark:text-gray-300 hover:text-[#1A1A1A] dark:hover:text-white text-[15px] font-normal transition-colors duration-200">
                            Plans
                        </a>
                    </div>
                    <ThemeToggle isDark={isDark} toggleDarkMode={toggleDarkMode} />
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
            <MobileMenu isOpen={isOpen} toggleMenu={toggleMenu} toggleDarkMode={toggleDarkMode} isDark={isDark} />
        </nav>
    );
}

export default Navbar;