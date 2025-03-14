import { Plus } from "lucide-react";

interface FAQItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onClick: () => void;
}


export const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => (
    <div className="border-b border-gray-200 dark:border-gray-700 py-6 transition-colors">
        <button className="flex w-full items-center justify-between text-left" onClick={onClick}>
            <span className="text-lg font-medium text-gray-900 dark:text-gray-100">{question}</span>
            <Plus className={`h-5 w-5 text-gray-500 dark:text-gray-400 transition-transform ${isOpen ? "rotate-45" : ""}`} />
        </button>
        {isOpen && (
            <div className="mt-3 pr-12">
                <p className="text-gray-600 dark:text-gray-300">{answer}</p>
            </div>
        )}
    </div>
);