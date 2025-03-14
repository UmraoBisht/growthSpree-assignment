import { CheckCircle2 } from "lucide-react";

export const FeatureItem: React.FC<{ text: string }> = ({ text }) => (
    <li className="flex items-start gap-2">
        <CheckCircle2 className="w-5 h-5 text-green-500 dark:text-green-400 flex-shrink-0 mt-0.5" />
        <span className="text-gray-600 dark:text-gray-300 text-sm">{text}</span>
    </li>
);