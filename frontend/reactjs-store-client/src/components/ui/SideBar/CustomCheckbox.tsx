import React from "react";
import { AiOutlineCheck } from "react-icons/ai";

interface CustomCheckboxProps {
  id: string;
  checked: boolean;
  onChange: () => void;
  bgColorUnchecked: string;
  bgColorChecked: string;
}

const CustomCheckbox: React.FC<CustomCheckboxProps> = ({ id, checked, onChange, bgColorUnchecked, bgColorChecked }) => {
  return (
    <label htmlFor={id} className="flex item-center gap-2' cursor-pointer">
      {/* Hidden native checkbox*/}
      <input id={id} type="checkbox" checked={checked} onChange={onChange} className="peer hidden" />
      {/* Custom checkbox box*/}
      <div
        className={`w-4 h-4 flex items-center justify-center rounded-sm border border-gray-300 transition-colors duration-200`}
        style={{
          backgroundColor: checked ? bgColorChecked : bgColorUnchecked,
        }}
      >
        <AiOutlineCheck className={`text-white text-sm ${checked ? "block" : "hidden"}`} />
      </div>
    </label>
  );
};

export default CustomCheckbox;
