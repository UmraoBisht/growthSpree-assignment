import { Linkedin, Facebook, Twitter, Instagram } from "lucide-react";

export const SocialIcons = () => {
  const icons = [Linkedin, Facebook, Twitter, Instagram];

  return (
    <div className="grid grid-cols-4 sm:grid-cols-4 gap-2">
      {icons.map((Icon, i) => (
        <div key={i} className="border dark:border-gray-700 rounded-2xl flex items-center justify-center p-3">
          <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200">
            <Icon className="w-5 h-5" />
          </a>
        </div>
      ))}
    </div>
  );
};