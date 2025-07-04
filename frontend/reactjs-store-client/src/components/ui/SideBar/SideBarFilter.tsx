import { colors } from "./Const";
import SectionTitle from "./SectionTitle";
import { Categories } from "./components/Catagories";
import { PriceFilter } from "./components/PriceFilter";
import { ProductBrands } from "./components/ProductBrand";
import { Ratings } from "./components/Ratings";


const SidebarFilter = () => {
  return (
    <aside className=" max-w-xs p-6 border-gray-200 space-y-5">
      <Categories />
      <Ratings />
      <ProductBrands />
      <PriceFilter />

      {/* Color Filter */}
      <div>
        <SectionTitle>Filter By Color</SectionTitle>
        <ul className="flex flex-wrap gap-4 text-grey-600 text-sm">
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
