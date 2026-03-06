import { useState } from "react";
import type { Item } from "../types";
import { INITIAL_DATA } from "../constants";

export const useTodoSorting = () => {
  const [mainList, setMainList] = useState<Item[]>(INITIAL_DATA);
  const [fruitList, setFruitList] = useState<Item[]>([]);
  const [vegetableList, setVegetableList] = useState<Item[]>([]);

  const moveBackToMain = (item: Item) => {
    setFruitList((prev) => prev.filter((i) => i.name !== item.name));
    setVegetableList((prev) => prev.filter((i) => i.name !== item.name));

    setMainList((prev) => {
      if (prev.some((i) => i.name === item.name)) return prev;
      return [...prev, item];
    });
  };

  const moveToCategory = (item: Item) => {
    setMainList((prev) => prev.filter((i) => i.name !== item.name));

    if (item.type === "Fruit") setFruitList((prev) => [...prev, item]);
    if (item.type === "Vegetable") setVegetableList((prev) => [...prev, item]);
  };

  return {
    mainList,
    fruitList,
    vegetableList,
    moveToCategory,
    moveBackToMain,
  };
};
