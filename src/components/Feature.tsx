import {
    Library,
    Wand2,
    Palette,
    Play,
    LineChart,
    Rocket,
  } from "lucide-react";
  import FeatureCard from "./FeatureCard";
  
  import mediaOffering from "../assets/Media+ offerings.png";
  
  function Feature() {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-orange-500 font-medium mb-2">Explore</p>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
              Media+ Features
            </h1>
          </div>
  
          <div className="relative">
            {/* Hero Section */}
            <div className="rounded-3xl p-8 mb-12 overflow-hidden">
              <img src={mediaOffering} alt="Media+ Offerings" className="w-full" />
            </div>
  
            {/* Features Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-8 -mt-32">
              <FeatureCard
                icon={Library}
                title="Media Library"
                features={[
                  "25 video uploads included, 1 Media site with options to add more",
                  "Upload videos directly from your computer",
                  "Import past event recordings in a few clicks",
                  "Effortlessly set up new events or import details",
                ]}
                dotColor="blue"
              />
  
              <FeatureCard
                icon={Wand2}
                title="Automated process"
                features={[
                  "AI-generated metadata",
                  "AI-generated thumbnails, transcripts & speaker bios",
                  "AI-generated tags by category & audience",
                  "Auto-transfer videos from huddle webinars & digital events to Media+",
                ]}
                dotColor="pink"
              />
  
              <FeatureCard
                icon={Palette}
                title="Branding & Personalization"
                features={[
                  "Use your logo and accent color, choose light or dark themes",
                  "Create a unique media site URL with your own domain",
                  "Use preference forms to deliver tailored content to your audience",
                ]}
                dotColor="red"
              />
  
              <FeatureCard
                icon={Play}
                title="Video player"
                features={[
                  "Top video quality with descriptions, speaker info, resources, and recommendations",
                  "Integrated CTAs for better engagement",
                  "Ask questions and share content easily",
                  "Navigate through video chapters seamlessly",
                ]}
                dotColor="orange"
              />
  
              <FeatureCard
                icon={LineChart}
                title="Deep analytics"
                features={[
                  "Comprehensive analytics on your media engagement",
                  "Video level analytics",
                  "Audience level analytics",
                ]}
                dotColor="amber"
              />
  
              <FeatureCard
                icon={Rocket}
                title="Boost your pipeline"
                features={[
                  "CTAs linked to MAP/CRM",
                  "Gate your content with forms",
                  "Capture pipeline and engagement data via CRM integrations",
                ]}
                dotColor="yellow"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default Feature;
  