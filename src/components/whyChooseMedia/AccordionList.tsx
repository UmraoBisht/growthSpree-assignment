import { AccordionItem } from "./AccordionItem";
import { DataItem } from "./data";


interface AccordionListProps {
    data: DataItem[];
    selected: number;
    setSelected: (index: number) => void;
    isMobile: boolean;
}

export const AccordionList: React.FC<AccordionListProps> = ({ data, selected, setSelected, isMobile }) => (
    <div className="space-y-4 w-full">
        {data.map((item, index) => (
            <AccordionItem key={index} item={item} index={index} selected={selected} setSelected={setSelected} isMobile={isMobile} />
        ))}
    </div>
);
