export const FooterBottom = () => (
    <div className="py-6 px-4 flex flex-col gap-4 text-center border dark:border-gray-700 rounded-2xl">
        <p className="text-sm text-gray-600 dark:text-gray-400">
            © {new Date().getFullYear()} Hubilo. All rights reserved
        </p>
        <div className="flex flex-col sm:flex-row sm:justify-center gap-4 text-sm text-gray-600 dark:text-gray-400">
            {["Terms of Use", "Privacy Policy", "Security and Compliance", "Cookie Policy"].map((text, i) => (
                <a key={i} href="#" className="hover:text-gray-900 dark:hover:text-gray-200">
                    {text}
                </a>
            ))}
        </div>
    </div>
);
