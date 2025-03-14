import { Upload } from "lucide-react";

interface FeatureItemProps {
    text: string;
}

export const FeatureItem: React.FC<FeatureItemProps> = ({ text }) => (
    <div className="flex items-center gap-3 text-white dark:text-gray-100 justify-center md:justify-start">
        <Upload size={20} className="shrink-0" />
        <span>{text}</span>
    </div>
);
