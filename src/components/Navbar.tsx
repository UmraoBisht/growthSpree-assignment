import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="px-6 sm:px-8 py-5 sticky bg-transparent top-0 z-50">
            <div className="flex items-center justify-between bg-transparent backdrop-blur-lg border py-2.5 px-4 sm:px-6 rounded-3xl">
                {/* Logo */}
                <div className="text-2xl font-semibold">[]</div>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-10">
                    <div className="flex items-center gap-6">
                        {["Product", "Customers", "Resources", "About us"].map((item) => (
                            <button key={item} className="group flex items-center gap-1.5 text-[#4A4A4A] hover:text-[#1A1A1A] text-[15px] font-normal transition-colors duration-200">
                                {item}
                                <ChevronDown className="w-[18px] h-[18px] text-[#757575] group-hover:text-[#1A1A1A] transition-colors duration-200" />
                            </button>
                        ))}
                        <a href="#" className="text-[#4A4A4A] hover:text-[#1A1A1A] text-[15px] font-normal transition-colors duration-200">
                            Plans
                        </a>
                    </div>

                    {/* Auth Buttons */}
                    <div className="flex items-center gap-5">
                        <button className="text-[#E97B5F] hover:text-[#D66D53] text-[15px] font-medium transition-colors duration-200">
                            Login
                        </button>
                        <button className="bg-[#E97B5F] hover:bg-[#D66D53] text-white px-[22px] py-[10px] rounded-[10px] text-[15px] font-medium shadow-[0_2px_4px_rgba(233,123,95,0.3)] hover:shadow-[0_4px_8px_rgba(233,123,95,0.4)] transition-all duration-200">
                            Request a Demo
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button onClick={toggleMenu} className="md:hidden text-[#1A1A1A]">
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-white border rounded-2xl shadow-lg p-6 mt-4">
                    <div className="flex flex-col gap-4">
                        {["Product", "Customers", "Resources", "About us"].map((item) => (
                            <button key={item} className="flex justify-between items-center text-[#4A4A4A] hover:text-[#1A1A1A] text-[16px] font-normal transition-colors duration-200">
                                {item} <ChevronDown className="w-5 h-5 text-[#757575]" />
                            </button>
                        ))}
                        <a href="#" className="text-[#4A4A4A] hover:text-[#1A1A1A] text-[16px] font-normal transition-colors duration-200">
                            Plans
                        </a>
                    </div>

                    <div className="mt-6 flex flex-col gap-4">
                        <button className="text-[#E97B5F] hover:text-[#D66D53] text-[16px] font-medium transition-colors duration-200">
                            Login
                        </button>
                        <button className="bg-[#E97B5F] hover:bg-[#D66D53] text-white px-6 py-3 rounded-lg text-[16px] font-medium shadow-[0_2px_4px_rgba(233,123,95,0.3)] hover:shadow-[0_4px_8px_rgba(233,123,95,0.4)] transition-all duration-200">
                            Request a Demo
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;
