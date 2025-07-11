import { priceFilter, checkboxColors } from "../Const";
import CustomCheckbox from "../CustomCheckbox";
import SectionTitle from "./SectionTitle";
import { FiSearch } from "react-icons/fi";

type PriceFilterProps = {
  selectedPrices: [number, number][];
  onChange: (updated: [number, number][]) => void;
};

export const PriceFilter: React.FC<PriceFilterProps> = ({ selectedPrices, onChange }) => {
  const togglePrice = (range: [number, number]) => {
    const exists = selectedPrices.some(([min, max]) => min === range[0] && max === range[1]);
    const updated = exists ? selectedPrices.filter(([min, max]) => min !== range[0] || max !== range[1]) : [...selectedPrices, range];
    onChange(updated);
  };
  return (
    <div>
      <SectionTitle>Product Filter</SectionTitle>
      <ul className="space-y-3 text-[#989BB5] text-center font-lato text-[16px] font-normal leading-[30px]">
        {priceFilter.map((item, index) => (
          <li key={index}>
            <label className="flex items-center gap-2 cursor-pointer">
              <CustomCheckbox
                id={`price-${index}`}
                checked={selectedPrices.some(([min, max]) => min === item.min && max === item.max)}
                onChange={() => togglePrice([item.min, item.max])}
                bgColorUnchecked={checkboxColors.category.unchecked}
                bgColorChecked={checkboxColors.category.checked}
              />
              <span>{item.label}</span>
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
