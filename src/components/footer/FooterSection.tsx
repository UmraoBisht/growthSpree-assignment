interface FooterSectionProps {
    title: string;
    links: string[];
}

export const FooterSection: React.FC<FooterSectionProps> = ({ title, links }) => (
    <div className="text-center sm:text-left">
        <h3 className="text-gray-900 dark:text-white font-medium mb-4">{title}</h3>
        <ul className="space-y-3 text-gray-600 dark:text-gray-400">
            {links.map((link, i) => (
                <li key={i} className="hover:text-gray-900 dark:hover:text-gray-200 cursor-pointer">
                    {link}
                </li>
            ))}
        </ul>
    </div>
);
