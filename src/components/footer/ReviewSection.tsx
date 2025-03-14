import g2Logo from "../../assets/Frame 1000004479.png";

export const ReviewSection = () => (
    <div className="border dark:border-gray-700 rounded-2xl p-4 flex flex-col items-center">
        <span className="text-sm text-center text-gray-600 dark:text-gray-400 mb-2">
            Read our reviews on G2.com
        </span>
        <img src={g2Logo} alt="G2 Logo" className="h-12 object-center object-fill" />
    </div>
);