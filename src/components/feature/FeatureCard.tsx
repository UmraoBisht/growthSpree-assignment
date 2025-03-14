import { FeatureItem } from "./FeatureItem";

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  features: string[];
  dotColor: string;
}

const colorMap: Record<string, string> = {
  blue: "bg-blue-600/80",
  pink: "bg-pink-600/80",
  red: "bg-red-600/80",
  orange: "bg-orange-600/80",
  amber: "bg-amber-600/80",
  yellow: "bg-yellow-600/80",
};

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, features, dotColor }) => {
  return (
    <div className="rounded-xl p-6 shadow-lg bg-white/80 dark:bg-gray-900 backdrop-blur-md transition-colors">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4 border-b border-gray-200 dark:border-gray-700 pb-4 relative">
        <Icon className="w-6 h-6 text-gray-700 dark:text-gray-300" />
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">{title}</h3>
        <div className={`h-6 w-6 absolute top-0 left-2 rounded-full ${colorMap[dotColor] ?? "bg-gray-600/80"}`} />
      </div>

      {/* Features List */}
      <ul className="space-y-3">
        {features.map((feature, index) => (
          <FeatureItem key={index} text={feature} />
        ))}
      </ul>
    </div>
  );
};



export default FeatureCard;
