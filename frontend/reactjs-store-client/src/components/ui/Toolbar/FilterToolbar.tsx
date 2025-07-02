import React from "react";
import { FaTh, FaList } from "react-icons/fa";

interface FilterToolbarProps {
  sortOptions: string[];
  selectedSort: string;
  onSortChange: (value: string) => void;
  viewType: "grid" | "list";
  onViewChange: (view: "grid" | "list") => void;
}

const FilterToolbar: React.FC<FilterToolbarProps> = ({ sortOptions, selectedSort, onSortChange, viewType, onViewChange }) => {
  return (
    <div className="flex items-center  justify-end gap-4 w-full mb-6 flex-wrap">
      {/* Sort and View */}
      <div className="flex items-center gap-4">
        <label className="text-sm font-medium">Sort By:</label>
        <select value={selectedSort} onChange={(e) => onSortChange(e.target.value)} className="border border-gray-300 rounded-md px-2 py-1 text-sm">
          {sortOptions.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>

        <label className="text-sm font-medium">View:</label>
        <div className="flex gap-2">
          <button onClick={() => onViewChange("grid")} className={`p-2 border rounded-md ${viewType === "grid" ? "bg-gray-200" : "bg-white"}`}>
            <FaTh />
          </button>
          <button onClick={() => onViewChange("list")} className={`p-2 border rounded-md ${viewType === "list" ? "bg-gray-200" : "bg-white"}`}>
            <FaList />
          </button>
        </div>
      </div>

      {/* Search Input */}
      <div className="relative" style={{ width: "162px", height: "30px" }}>
        <input
          type="text"
          className="w-full h-full px-3 pr-10 border border-gray-300 rounded-[3px] text-sm text-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};

export default FilterToolbar;
