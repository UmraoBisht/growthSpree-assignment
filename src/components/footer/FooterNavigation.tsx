import { FooterSection } from "./FooterSection";

export const FooterNavigation = () => {
    const sections = [
      {
        title: "Product",
        links: [
          "Webinar+",
          "Media+",
          "Generate Interest ✨",
          "Capture Intent 🎯",
          "Prove Impact 🔥",
          "Repurpose Content 🎨",
        ],
      },
      {
        title: "Who are you",
        links: [
          "Demand Gen Marketer",
          "Content Marketer",
          "Event Marketer",
          "Field Marketer",
          "Marketing Op",
          "CMO",
        ],
      },
      {
        title: "Resources",
        links: [
          "People who love us",
          "People who hate us",
          "Our Webinars",
          "Our Thoughts",
          "Help!",
        ],
      },
      {
        title: "About Us",
        links: [
          "Mission + Values",
          "The Head Honchos",
          "The Gossip",
          "Our Contact Deets",
          "Join the team!",
        ],
      },
    ];
  
    return (
      <div className="border dark:border-gray-700 rounded-3xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-6 md:p-12">
          {sections.map((section, index) => (
            <FooterSection key={index} title={section.title} links={section.links} />
          ))}
        </div>
      </div>
    );
  };