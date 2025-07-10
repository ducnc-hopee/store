import { colors } from "../Const";
import SectionTitle from "./SectionTitle";
import { Categories } from "./Catagories";
import { PriceFilter } from "./PriceFilter";
import { ProductBrands } from "./ProductBrand";
import { Ratings } from "./Ratings";


const SidebarFilter = () => {
  return (
    <aside className="mb-[237px] mr-[70px] space-y-5 bg-white">
      <ProductBrands />
      <Ratings />
      <Categories />
      <PriceFilter />

      {/* Color Filter */}
      <div>
        <SectionTitle>Filter By Color</SectionTitle>
        <ul className="flex flex-wrap gap-3 text-grey-600 text-sm">
          {colors.map((color, index) => (
            <li key={index} className="flex items-center gap-2 cursor-pointer">
              <div className="w-4 h-4 rounded-full" style={{ backgroundColor: color.hex }}></div>
              <span>{color.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
};

export default SidebarFilter;
