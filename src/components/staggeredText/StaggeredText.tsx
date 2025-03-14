import { TextRow } from "./TextRow";

const StaggeredText: React.FC = () => {
    return (
        <div className="bg-gradient-to-br from-[#E68967] to-[#f4a485] dark:from-[#B55A44] dark:to-[#D6785C] flex items-center justify-center px-4 py-16 mt-14">
            <div className="max-w-7xl w-full space-y-8">
                <TextRow firstText="Your" secondText="Videos" alignment="start" />
                <TextRow firstText="Your" secondText="Brand" />
                <TextRow firstText="Your" secondText="Website" alignment="end" />
            </div>
        </div>
    );
};

export default StaggeredText;