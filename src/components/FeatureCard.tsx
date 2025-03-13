import { CheckCircle2 } from "lucide-react";

const colorMap: { [key: string]: string } = {
    blue: "bg-blue-600/80",
    pink: "bg-pink-600/80",
    red: "bg-red-600/80",
    orange: "bg-orange-600/80",
    amber: "bg-amber-600/80",
    yellow: "bg-yellow-600/80",
};

function FeatureCard({ icon: Icon, title, features, dotColor }: {
    icon: React.ElementType,
    title: string,
    features: string[],
    dotColor: string
}) {
    return (
        <div className="rounded-xl p-6 shadow-lg bg-white/80 dark:bg-gray-900 backdrop-blur-md transition-colors">
            <div className="flex items-center gap-2 mb-4 border-b border-gray-200 dark:border-gray-700 pb-4 relative">
                <Icon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
                <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{title}</h3>
                <div className={`h-6 w-6 absolute top-0 left-2 rounded-full ${colorMap[dotColor] || "bg-gray-600/80"}`}></div>
            </div>

            <ul className="space-y-3">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500 dark:text-green-400 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 dark:text-gray-300 text-sm">{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FeatureCard;
