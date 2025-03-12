import { useState } from 'react';
import { Plus } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: "How is Media+ beneficial for Marketers?",
    answer: "Media+ helps marketers repurpose content, automate SEO, generate video recommendations, and easily manage thumbnails, URLs, and event listings for better lead generation."
  },
  {
    question: "How does Media+ improve user retention, engagement & help in generating more leads?",
    answer: "Media+ optimizes your content for search engines, curates relevant videos and events for viewers, and allows for lead capture through gated content. It tracks user engagement, providing insights to help you refine your marketing strategies."
  },
  {
    question: "How does Media+ result in better brand visibility?",
    answer: "Media+ improves brand visibility by allowing you to fully customize your media site. You can select the theme, colors, logo placement, and content layout, and host it on your custom domain to ensure your brand is clearly represented."
  },
  {
    question: "How does Media+ simplify video content management?",
    answer: "Media+ automates the process of uploading, formatting, and embedding videos. It handles metadata creation, SEO optimization, and content preparation, eliminating the need for multiple teams to coordinate these tasks."
  },
  {
    question: "How does Media+ use AI to improve content discovery?",
    answer: "Media+ leverages AI to auto-generate titles, descriptions, and tags for your content, helping your audience discover the most relevant videos and enhancing engagement that leads to conversions."
  },
  {
    question: "What kind of analytics does Media+ provide?",
    answer: "Media+ provides comprehensive analytics on video performance, audience engagement, and content effectiveness. These insights help you understand which content resonates with viewers and inform your future content strategies."
  },
  {
    question: "Can Media+ integrate with my existing MAP tools like Hubspot?",
    answer: "Yes! Media+ integrates seamlessly with MAP tools like HubSpot, ensuring smooth synchronization with your existing systems."
  },
  {
    question: "How many videos can I host in one Media+ site?",
    answer: "Our base plan allows you to host up to 25 videos on one Media+ site. If you need more capacity, add-ons are available for additional media sites and videos."
  }
];

function FAQItem({ question, answer, isOpen, onClick }: {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}) {
  return (
    <div className="border-b border-gray-200 py-6">
      <button
        className="flex w-full items-center justify-between text-left"
        onClick={onClick}
      >
        <span className="text-lg font-medium text-gray-900">{question}</span>
        <Plus
          className={`h-5 w-5 text-gray-500 transition-transform ${
            isOpen ? 'rotate-45' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="mt-3 pr-12">
          <p className="text-gray-600">{answer}</p>
        </div>
      )}
    </div>
  );
}

function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-base font-medium text-[#ff7a5c]">
            Our top-list of commonly asked questions
          </p>
          <h2 className="mt-2 text-3xl font-bold text-gray-900">FAQs</h2>
        </div>

        <div className="mt-12">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Faq;