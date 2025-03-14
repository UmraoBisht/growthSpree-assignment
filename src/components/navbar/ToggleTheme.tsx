import { Moon, Sun } from "lucide-react";
interface ThemeToggleProps {
    isDark: boolean;
    toggleDarkMode: () => void;
}


export default function ThemeToggle({ isDark, toggleDarkMode }: ThemeToggleProps) {
    return (
        <button onClick={toggleDarkMode} className="p-2 rounded-lg bg-gray-200 dark:bg-gray-800 text-black dark:text-white transition-all">
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
        </button>
    );
}