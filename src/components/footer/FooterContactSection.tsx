import { ContactUs } from "./ContactUs";
import { ReviewSection } from "./ReviewSection";
import { SocialIcons } from "./SocialIcons";

export const FooterContactSection = () => (
  <div className="flex flex-col gap-4">
    <ContactUs />
    <ReviewSection />
    <SocialIcons />
  </div>
);