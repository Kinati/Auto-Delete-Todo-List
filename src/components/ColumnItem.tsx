import type { Item } from "../types";
import { useAutoReturn } from "../hooks/useAutoReturn";

export interface ColumnItemProps {
  key?: string;
  item: Item;
  onItemClick: (item: Item) => void;
  itemClass: string;
  autoReturn?: boolean;
}

export function ColumnItem({
  item,
  onItemClick,
  itemClass,
  autoReturn,
}: ColumnItemProps) {
  useAutoReturn(item, onItemClick, !!autoReturn);

  return (
    <button
      onClick={() => onItemClick(item)}
      className={`w-full py-2 px-4 text-center bg-white border border-gray-200 transition-colors hover:bg-gray-50 active:bg-gray-100 cursor-pointer font-medium ${itemClass}`}
    >
      {item.name}
    </button>
  );
}
