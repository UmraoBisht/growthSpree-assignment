
import video from "../assets/Components/Media+ Video thumbnail.png";


const VideoContainer = () => {
    return (
        <div className="bg-white py-20 px-4">
            <div className="max-w-6xl mx-auto text-center">
                <p className="text-[#E68967] text-xl mb-4">With Media+</p>
                <h1 className="text-[#333] text-5xl md:text-6xl font-medium mb-6">
                    Create an OTT platform for your media
                </h1>
                <p className="text-gray-600 text-xl max-w-3xl mx-auto mb-16">
                    Let your videos do more than just sit on your website. Curate your video repository in a few easy steps and let it drive organic views and generate leads.
                </p>

                
                <div className="rounded-2xl shadow-2xl overflow-hidden bg-white border border-gray-200">
                    {/* <video>
                        <source src="https://player.vimeo.com/external" type="video/mp4" />
                    </video> */}
                    <img src={video} alt="video-tag" />
                </div>
            </div>
        </div>
    );
};

export default VideoContainer;