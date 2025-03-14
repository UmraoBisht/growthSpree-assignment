import { motion } from "framer-motion";
import { data } from "./data";

export const FeatureImage: React.FC<{ selected: number }> = ({ selected }) => (
    <div className="rounded-xl p-6 md:p-10 relative h-[450px] flex items-center justify-center bg-gray-100 dark:bg-gray-800">
        <motion.img
            key={selected}
            src={data[selected].image}
            alt="Selected"
            className="w-full h-auto max-w-md object-cover rounded-lg shadow-lg absolute"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.5 }}
        />
    </div>
);