import React, { useState } from "react";
import contactPersonImg from "../assets/image 1137.png";

interface FormData {
  email: string;
  firstName: string;
  lastName: string;
  companyName: string;
  phone: string;
  agreedToTerms: boolean;
}

function Contact() {
  const [formData, setFormData] = useState<FormData>({
    email: "",
    firstName: "",
    lastName: "",
    companyName: "",
    phone: "",
    agreedToTerms: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Handle form submission logic here
  };

  return (
    <div className="min-h-screen mt-14 bg-gray-50 dark:bg-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-16 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* Left Column - Text and Image */}
          <div className="col-span-2">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 leading-tight mb-8">
              See how your videos can make your business{" "}
              <span className="text-[#ff7a5c]">more $$$</span>
            </h1>
            <img
              src={contactPersonImg}
              alt="Business professional"
              className="w-full max-w-md rounded-lg shadow-lg"
            />
          </div>

          {/* Right Column - Form */}
          <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
              Take the Full Media+ Tour
            </h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Email Input */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Business email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#ff7a5c] focus:border-transparent dark:bg-gray-800 dark:text-gray-100"
                  placeholder="johnsmith@hubilo.com"
                  required
                />
              </div>

              {/* First Name & Last Name */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    value={formData.firstName}
                    onChange={(e) =>
                      setFormData({ ...formData, firstName: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#ff7a5c] focus:border-transparent dark:bg-gray-800 dark:text-gray-100"
                    placeholder="John"
                    autoCapitalize="words"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    value={formData.lastName}
                    onChange={(e) =>
                      setFormData({ ...formData, lastName: e.target.value })
                    }
                    className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#ff7a5c] focus:border-transparent dark:bg-gray-800 dark:text-gray-100"
                    placeholder="Smith"
                    autoCapitalize="words"
                    required
                  />
                </div>
              </div>

              {/* Company Name */}
              <div>
                <label
                  htmlFor="companyName"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Company name
                </label>
                <input
                  type="text"
                  id="companyName"
                  value={formData.companyName}
                  onChange={(e) =>
                    setFormData({ ...formData, companyName: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#ff7a5c] focus:border-transparent dark:bg-gray-800 dark:text-gray-100"
                  placeholder="Business Company Name"
                  required
                />
              </div>

              {/* Phone Number */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Phone
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#ff7a5c] focus:border-transparent dark:bg-gray-800 dark:text-gray-100"
                  placeholder="(201) 555-0123"
                  pattern="^\(\d{3}\) \d{3}-\d{4}$"
                  required
                />
              </div>

              {/* Terms & Conditions */}
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="terms"
                  checked={formData.agreedToTerms}
                  onChange={(e) =>
                    setFormData({ ...formData, agreedToTerms: e.target.checked })
                  }
                  className="mt-1 h-4 w-4 text-[#ff7a5c] focus:ring-[#ff7a5c] border-gray-300 dark:border-gray-600 rounded"
                  required
                />
                <label
                  htmlFor="terms"
                  className="ml-2 text-sm text-gray-600 dark:text-gray-300"
                >
                  I agree to Hubilo's{" "}
                  <a href="#" className="text-[#ff7a5c] hover:underline">
                    Terms of Service
                  </a>{" "}
                  and{" "}
                  <a href="#" className="text-[#ff7a5c] hover:underline">
                    Privacy Policy
                  </a>{" "}
                  which includes my consent to process my personal data.
                </label>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#ff7a5c] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#ff6647] transition-colors"
              >
                Get a free demo
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
