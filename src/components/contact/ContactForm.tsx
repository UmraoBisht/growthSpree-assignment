import { CheckboxField } from "./CheckboxField";
import { FormData } from "./Contact";
import { InputField } from "./InputField";

interface ContactFormProps {
    formData: FormData;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: (e: React.FormEvent) => void;
}

export const ContactForm: React.FC<ContactFormProps> = ({ formData, onChange, onSubmit }) => (
    <div className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-6">
            Take the Full Media+ Tour
        </h2>
        <form onSubmit={onSubmit} className="space-y-6">
            <InputField label="Business email" id="email" type="email" value={formData.email} onChange={onChange} placeholder="johnsmith@hubilo.com" required />

            <div className="grid grid-cols-2 gap-4">
                <InputField label="First Name" id="firstName" type="text" value={formData.firstName} onChange={onChange} placeholder="John" required />
                <InputField label="Last Name" id="lastName" type="text" value={formData.lastName} onChange={onChange} placeholder="Smith" required />
            </div>

            <InputField label="Company name" id="companyName" type="text" value={formData.companyName} onChange={onChange} placeholder="Business Company Name" required />

            <InputField label="Phone" id="phone" type="tel" value={formData.phone} onChange={onChange} placeholder="(201) 555-0123" pattern="^\(\d{3}\) \d{3}-\d{4}$" required />

            <CheckboxField id="agreedToTerms" checked={formData.agreedToTerms} onChange={onChange} />

            <button
                type="submit"
                className="w-full bg-[#ff7a5c] text-white py-3 px-6 rounded-lg font-medium hover:bg-[#ff6647] transition-colors"
            >
                Get a free demo
            </button>
        </form>
    </div>
);