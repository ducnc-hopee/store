import { useState } from "react";
import { priceFilter, checkboxColors } from "../Const";
import CustomCheckbox from "../CustomCheckbox";
import SectionTitle from "../SectionTitle";
import { FiSearch } from "react-icons/fi";

export const PriceFilter = () => {
  const [checkedPrices, setCheckedPrices] = useState<boolean[]>(priceFilter.map(() => false));

  const toggleBrand = (index: number) => {
    const updated = [...checkedPrices];
    updated[index] = !updated[index];
    setCheckedPrices(updated);
  };

  return (
    <div>
      <SectionTitle>Product Filter</SectionTitle>
      <ul className="space-y-4 text-gray-700">
        {priceFilter.map((priceLabel, index) => (
          <li key={index}>
            <label className="flex items-center gap-2 cursor-pointer">
              <CustomCheckbox
                id={`price-${index}`}
                checked={checkedPrices[index] ?? false}
                onChange={() => toggleBrand(index)}
                bgColorUnchecked={checkboxColors.category.unchecked}
                bgColorChecked={checkboxColors.category.checked}
              />
              <span>{priceLabel}</span>
            </label>
          </li>
        ))}
      </ul>
      {/* search input*/}
      <div className="relative mt-5" style={{ width: "203px", height: "31px" }}>
        <input
          type="text"
          placeholder="$10.00 - 2000$"
          className="w-full h-full px-3 pr-10 border border-gray-300 rounded-[3px] text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <FiSearch className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 text-base pointer-events-none" />
      </div>
    </div>
  );
};
