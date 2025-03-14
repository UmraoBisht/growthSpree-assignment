import { FooterBottom } from "./FooterBottom";
import { FooterContactSection } from "./FooterContactSection";
import { FooterNavigation } from "./FooterNavigation";

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 pb-12">
          <FooterNavigation />
          <FooterContactSection />
        </div>
        <FooterBottom />
      </div>
    </footer>
  );
};


export default Footer;
