import { CheckCircle2 } from "lucide-react";

function FeatureCard({ icon: Icon, title, features, dotColor }: {
    icon: React.ElementType,
    title: string,
    features: string[],
    dotColor: string
}) {
    return (
        <div className=" rounded-xl p-6 shadow-lg bg-white/80 backdrop-blur-md">
            <div className="flex items-center gap-2 mb-4 border-b border-gray-200 pb-4 relative ">
                <Icon className="w-6 h-6 text-gray-700" />
                <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                <div className={`h-6 w-6 absolute top-0 left-2 bg-${dotColor}-600/80 rounded-full`}></div>
            </div>

            <ul className="space-y-3">
                {features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-600 text-sm">{feature}</span>
                    </li>
                ))}
            </ul>
        </div>
    );
}


export default FeatureCard;