import { AiFillStar, AiOutlineStar,AiOutlineCheck } from "react-icons/ai";
import { brands, ratings, categories, colors} from "./const";

const SectionTitle = ({ children }: { children: React.ReactNode }) => {
  return <h3 className="text-base font-bold pb-3 underline text-[color:var(--color-off-blue)]">{children}</h3>;
};

const SidebarFilter = () => {
  return (
    <aside className=" max-w-xs p-6 border-gray-200 space-y-5">
      {/* Product Brand*/}
      <div>
        <SectionTitle>Product Brand</SectionTitle>
        <ul className="space-y-3 text-gray-700">
          {brands.map((brand, index) => (
            <li key={index}>
              <input type="checkbox" id={`brand-${index}`} />
              <label htmlFor={`brand-${index}`} className="ml-2">
                {brand}
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Rating */}
      <div>
        <SectionTitle>Rating</SectionTitle>
        <ul className="space-y-2">
          {ratings.map((item, index) => (
            <li key={index}>
              <label className="flex items-center gap-2 cursor-pointer">
                {/* Hidden checkbox */}
                <input type="checkbox" className="peer hidden" id={`rating-${index}`} />

                {/* Custom checkbox box that responds to peer */}
                <div className="w-4 h-4 flex items-center justify-center rounded-sm border border-gray-300 bg-[#FFF6DA] peer-checked:bg-[#FFCC2E]">
                    <AiOutlineCheck className="peer-checked:block text-white text-sm" />
                </div>

                {/* Stars */}
                <div className="flex text-yellow-500">
                  {[...Array(item.stars)].map((_, i) => (
                    <AiFillStar key={i} />
                  ))}
                  {[...Array(5 - item.stars)].map((_, i) => (
                    <AiOutlineStar key={i} className="text-gray-300" />
                  ))}
                </div>

                {/* Count (optional) */}
                <span className="text-gray-600 text-sm">({item.count})</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Categories */}
      <div>
        <SectionTitle>Categories</SectionTitle>
        <ul className="space-y-3 text-gray-700">
          {categories.map((category, index)=>(
            <li key={index}>
                <label className="flex items-center gap-2 cursor-pointer">
                    <input type="checkbox" id={`cat-${index}`}  className="w-4 h-4" />
                    <span>{category}</span>
                </label>
            </li>
          ))}
        </ul>
      </div>

      {/* Color Filter */}
      <div>
        <SectionTitle>Filter By Color</SectionTitle>
        <ul className="flex flex-wrap gap-4 text-grey-600 text-sm">
            {colors.map((color,index)=>(
                <li key={index} className="flex items-center gap-2 cursor-pointer">
                    <div 
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: color.hex}}
                    ></div>
                    <span>{color.name}</span>
                </li>
            ))}
        </ul>
      </div>
    </aside>
  );
};

export default SidebarFilter;
