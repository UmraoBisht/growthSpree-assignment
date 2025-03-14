interface InputFieldProps {
    label: string;
    id: string;
    type: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    placeholder?: string;
    required?: boolean;
    pattern?: string;
}

export const InputField: React.FC<InputFieldProps> = ({ label, id, type, value, onChange, placeholder, required, pattern }) => (
    <div>
        <label htmlFor={id} className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            {label}
        </label>
        <input
            type={type}
            id={id}
            value={value}
            onChange={onChange}
            className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-[#ff7a5c] focus:border-transparent dark:bg-gray-800 dark:text-gray-100"
            placeholder={placeholder}
            required={required}
            pattern={pattern}
        />
    </div>
);