import React, { useState } from "react";
import { ContactForm } from "./ContactForm";
import { ContactIntro } from "./ContactIntro";

export interface FormData {
  email: string;
  firstName: string;
  lastName: string;
  companyName: string;
  phone: string;
  agreedToTerms: boolean;
}

const initialFormData: FormData = {
  email: "",
  firstName: "",
  lastName: "",
  companyName: "",
  phone: "",
  agreedToTerms: false,
};

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>(initialFormData);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const { id, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  return (
    <section className="min-h-screen mt-14 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <ContactIntro />
          <ContactForm formData={formData} onChange={handleChange} onSubmit={handleSubmit} />
        </div>
      </div>
    </section>
  );
};









export default Contact;
