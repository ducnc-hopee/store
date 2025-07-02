import { useState } from "react";
import { categories, checkboxColors } from "../Const"; // adjust the import to your structure
import CustomCheckbox from "../CustomCheckbox";
import SectionTitle from "../SectionTitle";

export const Categories = () => {
  const [checkedCategories, setCheckedCategories] = useState<boolean[]>(categories.map(() => false));

  const toggleCategory = (index: number) => {
    const updated = [...checkedCategories];
    updated[index] = !updated[index];
    setCheckedCategories(updated);
  };

  return (
    <div>
      <SectionTitle>Categories</SectionTitle>
      <ul className="space-y-3 text-gray-700">
        {categories.map((category, index) => (
          <li key={index}>
            <label className="flex items-center gap-2 cursor-pointer">
              <CustomCheckbox
                id={`cat-${index}`}
                checked={checkedCategories[index] ?? false}
                onChange={() => toggleCategory(index)}
                bgColorUnchecked={checkboxColors.category.unchecked}
                bgColorChecked={checkboxColors.category.checked}
              />
              <span>{category}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};
