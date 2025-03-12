import brandLogo from "../assets/image 1139.png";
import brandLogo1 from "../assets/image 1138.png";
import brandLogo2 from "../assets/image 1142.png";
import brandLogo3 from "../assets/Agora logo.png";
import brandLogo4 from "../assets/Frame 1000006879.png";

function PerfectedBy() {
  return (
    <div className="mt-14 flex flex-col items-center bg-[#E4875D] py-12">
      <h2 className="text-2xl font-bold text-gray-500 mb-6">Perfected by</h2>

      {/* Responsive Grid Layout */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 w-full max-w-4xl px-6">
        {[brandLogo1, brandLogo, brandLogo3, brandLogo4, brandLogo2].map((logo, index) => (
          <div key={index} className="flex justify-center">
            <img src={logo} alt="Perfected by" className="w-28 sm:w-32 md:w-36 object-contain" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PerfectedBy;
