import videoThumbnail from "../../assets/Components/Media+ Video thumbnail.png";


export const VideoPlayer: React.FC = () => {
    return (
        <div className="rounded-2xl shadow-2xl overflow-hidden bg-white dark:bg-[#2A2A2A] border border-gray-200 dark:border-gray-700">
            <img src={videoThumbnail} alt="Video thumbnail" className="w-full h-auto" />
        </div>
    );
};