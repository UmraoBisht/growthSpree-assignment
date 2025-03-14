import {
    Library,
    Wand2,
    Palette,
    Play,
    LineChart,
    Rocket,
} from "lucide-react";

interface FeatureItem {
    icon: React.ElementType;
    title: string;
    features: string[];
    dotColor: string;
}

export const featureList: FeatureItem[] = [
    {
        icon: Library,
        title: "Media Library",
        features: [
            "25 video uploads included, 1 Media site with options to add more",
            "Upload videos directly from your computer",
            "Import past event recordings in a few clicks",
            "Effortlessly set up new events or import details",
        ],
        dotColor: "blue",
    },
    {
        icon: Wand2,
        title: "Automated process",
        features: [
            "AI-generated metadata",
            "AI-generated thumbnails, transcripts & speaker bios",
            "AI-generated tags by category & audience",
            "Auto-transfer videos from huddle webinars & digital events to Media+",
        ],
        dotColor: "pink",
    },
    {
        icon: Palette,
        title: "Branding & Personalization",
        features: [
            "Use your logo and accent color, choose light or dark themes",
            "Create a unique media site URL with your own domain",
            "Use preference forms to deliver tailored content to your audience",
        ],
        dotColor: "red",
    },
    {
        icon: Play,
        title: "Video player",
        features: [
            "Top video quality with descriptions, speaker info, resources, and recommendations",
            "Integrated CTAs for better engagement",
            "Ask questions and share content easily",
            "Navigate through video chapters seamlessly",
        ],
        dotColor: "orange",
    },
    {
        icon: LineChart,
        title: "Deep analytics",
        features: [
            "Comprehensive analytics on your media engagement",
            "Video level analytics",
            "Audience level analytics",
        ],
        dotColor: "amber",
    },
    {
        icon: Rocket,
        title: "Boost your pipeline",
        features: [
            "CTAs linked to MAP/CRM",
            "Gate your content with forms",
            "Capture pipeline and engagement data via CRM integrations",
        ],
        dotColor: "yellow",
    },
];
