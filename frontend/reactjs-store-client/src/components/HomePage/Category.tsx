import category from "/images/category.png";

function Category() {
  return (
    <div>
      <div className="flex flex-col items-center justify-center px-8 mt-10">
        <div className="absolute w-[180px] h-[180px] rounded-full bg-off-white z-0" />
        <img src={category} alt="Category" className="w-[120px] h-[120px] object-cover z-10" />
      </div>
      <div className="mt-12 mb-5 flex flex-col items-center text-navy-blue">MiniLCWChair</div>
    </div>
  );
}

export default Category;
