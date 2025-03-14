export const ContactUs = () => (
    <div className="border dark:border-gray-700 rounded-2xl p-6">
        <h3 className="text-gray-900 dark:text-white font-medium mb-4 text-center sm:text-left">
            Contact us
        </h3>
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 text-center sm:text-left">
            See what Webinar+ can do for your business
        </p>
        <div className="relative">
            <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 pr-12 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600"
            />
            <button className="absolute right-2 top-1/2 -translate-y-1/2 bg-gray-900 dark:bg-gray-700 rounded-full p-1">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    </div>
);