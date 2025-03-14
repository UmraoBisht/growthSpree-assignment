import mediaThumbnail from "../../assets/Components/Media+ Video thumbnail.png";

export default function VideoThumbnail() {
    return (
        <div className="mt-10 sm:mt-14 flex justify-center">
            <div className="bg-gradient-to-b from-[#b2e626] dark:from-[#8dbb20] to-transparent rounded-3xl p-3 sm:p-4 shadow-2xl shadow-[#b3e629] dark:shadow-[#7aa91d] max-w-[90%] sm:max-w-full">
                <img src={mediaThumbnail} alt="Hero" loading="lazy" className="w-full rounded-3xl" />
            </div>
        </div>
    );
}