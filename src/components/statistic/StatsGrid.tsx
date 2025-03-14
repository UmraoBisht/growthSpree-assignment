import StatCard from "./StatCard";

interface StatItem {
    number: string;
    title: string;
    description: string;
}

interface StatsGridProps {
    stats: StatItem[];
}

export const StatsGrid: React.FC<StatsGridProps> = ({ stats }) => (
    <div className="grid md:grid-cols-3 gap-6 place-items-center">
        {stats.map((stat, index) => (
            <StatCard key={index} number={stat.number} title={stat.title} description={stat.description} />
        ))}
    </div>
);
