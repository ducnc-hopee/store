import category from "/images/category.png";

function Category() {
  return (
    <div className="w-[256px] h-[303px] flex flex-col items-center">
      <div className="relative flex items-center justify-center w-[256px] h-[236px]">
        <div className="absolute w-[256px] h-[236px] rounded-[50%/50%] bg-[#F6F7FB] z-0" />
        <img src={category} alt="Category" className="w-[150px] h-[137px] object-cover z-10" />
      </div>
      <div className="mt-[23.71px] mb-[23.5px] text-navy-blue text-[20px] z-20">MiniLCWChair</div>
    </div>
  );
}

export default Category;
