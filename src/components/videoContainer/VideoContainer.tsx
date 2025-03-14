import React from "react";
import { VideoPlayer } from "./VideoPlayer";

const VideoContainer: React.FC = () => {
    return (
        <div className="bg-white dark:bg-[#1E1E1E] py-20 px-4">
            <div className="max-w-6xl mx-auto text-center">
                <p className="text-[#E68967] text-xl mb-4">With Media+</p>
                <h1 className="text-[#333] dark:text-gray-200 text-5xl md:text-6xl font-medium mb-6">
                Create an OTT platform for your media
                </h1>
                <p className="text-gray-600 dark:text-gray-400 text-xl max-w-3xl mx-auto mb-16">
                Let your videos do more than just sit on your website. Curate your video repository in a few easy steps and let it drive organic views and generate leads.
                </p>

                <VideoPlayer />
            </div>
        </div>
    );
};



export default VideoContainer;
