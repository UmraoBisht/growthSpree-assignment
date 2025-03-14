
import mediaOffering from "../../assets/Media+ offerings.png";
import FeatureCard from "./FeatureCard";
import { featureList } from "./featureData";
  

  const Feature: React.FC = () => {
    return (
      <section className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-orange-500 font-medium mb-2">Explore</p>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
              Media+ Features
            </h1>
          </div>
  
          {/* Hero Section */}
          <div className="rounded-3xl p-8 mb-12 overflow-hidden">
            <img src={mediaOffering} alt="Media+ Offerings" className="w-full" />
          </div>
  
          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8 -mt-32">
            {featureList.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default Feature;
  