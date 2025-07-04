import { useState } from "react";
import { brands, checkboxColors } from "../Const";
import CustomCheckbox from "../CustomCheckbox";
import SectionTitle from "../SectionTitle";

export const ProductBrands = () => {
  const [checkedBrands, setCheckedBrands] = useState<boolean[]>(brands.map(() => false));

  const toggleBrand = (index: number) => {
    const updated = [...checkedBrands];
    updated[index] = !updated[index];
    setCheckedBrands(updated);
  };

  return (
    <div>
      <SectionTitle>Product Brand</SectionTitle>
      <ul className="space-y-3 text-gray-700">
        {brands.map((brand, index) => (
          <li key={index}>
            <label className="flex items-center gap-2 cursor-pointer">
              <CustomCheckbox
                id={`brand-${index}`}
                checked={checkedBrands[index] ?? false}
                onChange={() => toggleBrand(index)}
                bgColorUnchecked={checkboxColors.brand.unchecked}
                bgColorChecked={checkboxColors.brand.checked}
              />
              <span>{brand}</span>
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
};
