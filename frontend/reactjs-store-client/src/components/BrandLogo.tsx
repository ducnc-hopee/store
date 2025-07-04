
import brand from "/images/brand.png";

function BrandLogo() {
  return (
    <div className="flex flex-row items-center justify-center w-full h-[93px] my-20">
      <img src={brand} alt="brands" />
    </div>
  );
}

export default BrandLogo;
