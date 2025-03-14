import React from "react";
import contactPersonImg from "../../assets/image 1137.png";


export const ContactIntro: React.FC = () => (
    <div className="col-span-2">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-gray-100 leading-tight mb-8">
            See how your videos can make your business{" "}
            <span className="text-[#ff7a5c]">more $$$</span>
        </h1>
        <img
            src={contactPersonImg}
            alt="Business professional"
            className="w-full max-w-md rounded-lg shadow-lg"
        />
    </div>
);