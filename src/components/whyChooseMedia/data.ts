import visual1 from "../../assets/Components/Visual 1 Library .png";
import visual2 from "../../assets/Components/Visual.png";
import visual3 from "../../assets/Components/Visual 3.png";
import visual4 from "../../assets/Components/Visual 4.png";

export interface DataItem {
    title: string;
    subtitle: string;
    content: string;
    image: string;
}

export const data: DataItem[] = [
    {
        title: "Curate your video media collection with an AI powered library",
        subtitle: "Streamline your media organization",
        content:
            "Explore our intelligent media library with AI-driven curation and tagging to effortlessly organize your video content.",
        image: visual1,
    },
    {
        title: "Build, Brand & Publish your Media+",
        subtitle: "Your content, your brand",
        content:
            "Publish your on-demand media faster than ever using Media+. Add your custom branding and host all your media on your website or any other custom URL of your choice.",
        image: visual2,
    },
    {
        title: "Gate your media, capture leads & connect your CRM - it's easy",
        subtitle: "Monetize with ease",
        content:
            "Leverage smart gating to capture leads and seamlessly integrate with your CRM, ensuring you never miss an opportunity.",
        image: visual3,
    },
    {
        title: "Track your views - with detailed analytics.",
        subtitle: "Insights that matter",
        content:
            "Monitor your media engagement with robust analytics and detailed view metrics to fine-tune your strategy.",
        image: visual4,
    },
];