import { Minus, Plus } from "lucide-react";
import { motion } from "framer-motion";
import { DataItem } from "./data";

interface AccordionItemProps {
    item: DataItem;
    index: number;
    selected: number;
    setSelected: (index: number) => void;
    isMobile: boolean;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ item, index, selected, setSelected, isMobile }) => (
    <div
        className={`border border-gray-200 dark:border-gray-700 rounded-lg p-6 transition-all duration-300 relative 
            ${!isMobile && selected === index ? "bg-gray-100 dark:bg-gray-800 shadow-md" : "dark:bg-gray-900"}`}
        onClick={() => !isMobile && setSelected(index)}
    >
        <div className="flex justify-between items-center">
            <h3 className="font-semibold text-gray-900 dark:text-gray-200">{item.title}</h3>
            {!isMobile && (
                <button className="text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-300">
                    {selected === index ? <Minus size={20} /> : <Plus size={20} />}
                </button>
            )}
        </div>
        <motion.div
            className="overflow-hidden"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: selected === index || isMobile ? "auto" : 0, opacity: selected === index || isMobile ? 1 : 0 }}
            transition={{ duration: 0.4 }}
        >
            <p className="text-gray-600 dark:text-gray-400 text-sm mt-2">{item.content}</p>
            {isMobile && (
                <motion.img
                    src={item.image}
                    alt="Feature Image"
                    className="w-full h-auto max-w-md object-cover rounded-lg shadow-lg mt-4"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                />
            )}
        </motion.div>
    </div>
);