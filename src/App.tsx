import { useTodoSorting } from "./hooks/useTodoSorting";
import { Column } from "./components/Column";

export default function App() {
  const { mainList, fruitList, vegetableList, moveToCategory, moveBackToMain } =
    useTodoSorting();

  return (
    <div className="min-h-screen bg-white p-4 md:p-8 font-sans">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 h-200">
        <Column
          title="Main List"
          items={mainList}
          onItemClick={moveToCategory}
          headerClass=""
          itemClass=""
          showHeader={false}
        />

        <Column
          title="Fruit"
          items={fruitList}
          onItemClick={moveBackToMain}
          headerClass="bg-gray-100 text-gray-700"
          itemClass=""
          autoReturn
        />

        <Column
          title="Vegetable"
          items={vegetableList}
          onItemClick={moveBackToMain}
          headerClass="bg-gray-100 text-gray-700"
          itemClass=""
          autoReturn
        />
      </div>
    </div>
  );
}
