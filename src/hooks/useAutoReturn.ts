import { useEffect, useRef } from "react";
import type { Item } from "../types";

export function useAutoReturn(
  item: Item,
  onReturn: (item: Item) => void,
  enabled: boolean = false,
) {
  const onReturnRef = useRef(onReturn);

  useEffect(() => {
    onReturnRef.current = onReturn;
  }, [onReturn]);

  useEffect(() => {
    if (!enabled) return;

    const timer = setTimeout(() => {
      onReturnRef.current(item);
    }, 5000);

    return () => clearTimeout(timer);
  }, [item, enabled]);
}
