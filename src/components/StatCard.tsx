
function StatCard({ number, title, description }: { 
  number: string; 
  title: string; 
  description: string;
}) {
  return (
    <div className="bg-[#FFF5F2] rounded-lg p-8 flex flex-col items-center text-center">
      <span className="text-[#FF7F57] text-4xl font-bold mb-3">{number}</span>
      <h3 className="text-gray-800 font-medium mb-2">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  );
}


export default StatCard;