interface CheckboxFieldProps {
    id: string;
    checked: boolean;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const CheckboxField: React.FC<CheckboxFieldProps> = ({ id, checked, onChange }) => (
    <div className="flex items-start">
        <input
            type="checkbox"
            id={id}
            checked={checked}
            onChange={onChange}
            className="mt-1 h-4 w-4 text-[#ff7a5c] focus:ring-[#ff7a5c] border-gray-300 dark:border-gray-600 rounded"
            required
        />
        <label htmlFor={id} className="ml-2 text-sm text-gray-600 dark:text-gray-300">
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
);