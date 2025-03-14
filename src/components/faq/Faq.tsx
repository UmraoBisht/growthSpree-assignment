import { useState } from "react";
import { faqs } from "./faqData";
import { FAQItem } from "./FAQItem";






const Faq: React.FC = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="min-h-screen bg-gray-50 dark:bg-gray-900 py-16 px-4 sm:px-6 lg:px-8 transition-colors">
            <div className="max-w-3xl mx-auto">
                {/* Heading */}
                <div className="text-center mb-12">
                    <p className="text-base font-medium text-[#ff7a5c] dark:text-[#ff9a7d]">
                        Our top-list of commonly asked questions
                    </p>
                    <h2 className="mt-2 text-3xl font-bold text-gray-900 dark:text-gray-100">FAQs</h2>
                </div>

                {/* FAQ List */}
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
        </section>
    );
};

export default Faq;
