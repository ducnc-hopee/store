import { colors } from "../Const";
import SectionTitle from "./SectionTitle";
import { Categories } from "./Catagories";
import { PriceFilter } from "./PriceFilter";
import { ProductBrands } from "./ProductBrand";
import { Ratings } from "./Ratings";

type SidebarFilterProps = {
  selectedRatings: number[];
  onRatingChange: (updated: number[]) => void;
  selectedPrices: [number, number][];
  onPriceChange: (updated: [number, number][]) => void;
};

const SidebarFilter: React.FC<SidebarFilterProps> = ({ selectedRatings, onRatingChange, selectedPrices, onPriceChange }) => {
  return (
    <aside className="mb-[120px] mr-[70px]space-y-5 bg-white ">
      <ProductBrands />
      <div className="mt-[56px]">
        <Ratings selectedRatings={selectedRatings} onChange={onRatingChange} />
      </div>
      <div className="mb-[40px] mt-[51px]">
        <Categories />
      </div>
      <PriceFilter selectedPrices={selectedPrices} onChange={onPriceChange} />

      {/* Color Filter */}
      <div className="mt-[50px]">
        <SectionTitle>Filter By Color</SectionTitle>
        <ul className="flex flex-wrap gap-2">
          {colors.map((color, index) => (
            <li key={index} className="flex items-center gap-2 w-[80px] h-[30px] cursor-pointer">
              <div className="w-4 h-4 rounded-full" style={{ backgroundColor: color.hex }}></div>
              <span className="text-center font-lato text-[15px] font-normal leading-[30px]" style={{ color: "#7E81A2" }}>
                {color.name}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default SidebarFilter;
