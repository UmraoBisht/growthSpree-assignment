import StatCard from "./StatCard";

function Stat() {
    return (
        <div className="min-h-screen bg-white py-16 px-4">
            <div className="max-w-4xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-[#FF7F57] text-sm font-medium">
                        Elevate your video strategy
                    </span>
                    <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-3">
                        Seamless Video Management
                    </h1>
                    <p className="text-gray-600">
                        Transform how you engage with your audience using Media+
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6">
                    <StatCard
                        number="2.5X"
                        title="Lead Generation"
                        description="Boost watch time and drive more leads"
                    />
                    <StatCard
                        number="3X"
                        title="Publish Content Faster with AI"
                        description="Take route to get more views"
                    />
                    <StatCard
                        number="30min"
                        title="Setup"
                        description="Set up your video CMS in less than 30 minutes"
                    />
                </div>

                <div className="text-center mt-12">
                    <button className="bg-[#FF7F57] text-white px-6 py-3 rounded-full hover:bg-[#ff6a3d] transition-colors">
                        Request Demo
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Stat;