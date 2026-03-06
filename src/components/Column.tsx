import type { Item } from "../types";
import { ColumnItem } from "./ColumnItem";

interface ColumnProps {
  title: string;
  items: Item[];
  onItemClick: (item: Item) => void;
  headerClass: string;
  itemClass: string;
  autoReturn?: boolean;
  showHeader?: boolean;
}

export function Column({
  title,
  items,
  onItemClick,
  headerClass,
  itemClass,
  autoReturn,
  showHeader = true,
}: ColumnProps) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 bg-white border border-gray-200 flex flex-col">
        {showHeader && (
          <div
            className={`p-2 border-b border-gray-200 text-center font-bold ${headerClass}`}
          >
            {title}
          </div>
        )}
        <div className="p-2 flex flex-col gap-2 overflow-y-auto">
          {items.map((item) => (
            <ColumnItem
              key={item.name}
              item={item}
              onItemClick={onItemClick}
              itemClass={itemClass}
              autoReturn={autoReturn}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
