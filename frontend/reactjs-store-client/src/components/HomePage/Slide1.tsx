import sofaImg from "/images/sofa.png";
import lampImg from "/images/lamp.png";
import { Button } from "../ui/Button";
import { Link } from "react-router-dom";

function Slide1() {
  return (
    <div className="h-[764px] bg-off-white overflow-hidden mb-10">
      <img src={lampImg} alt="Lamp" className="absolute w-[387px] h-[387px] left-[70px] object-contain z-0" />

      <section className="flex items-center z-10">
        <div className="ml-[378px]">
          <p className="text-pink font-bold text-[16px] mb-[12px]">Best Furniture For Your Castle....</p>

          <h1 className="w-[644px] text-[53px] font-bold text-black mb-[12px]">New Furniture Collection Trends in 2020</h1>

          <p className="text-gray font-bold text-base w-[559px] mb-[27px]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.
          </p>

          <Button className="bg-pink text-white hover:bg-pink-600 text-[17px] font-semibold w-[163px] h-[50px] rounded-[2px]">
            <Link to="/product">Shop Now</Link>
          </Button>
        </div>
        <div className="relative w-[706px] h-[689px] shrink-0">
          <div
            className="absolute left-[547px] top-[94px] w-[136px] h-[138px] z-[1000] flex flex-col items-center justify-center text-white font-bold text-[20px] leading-[1] bg-[#00C1FE]"
            style={{
              borderRadius: "37% 63% 53% 47% / 59% 53% 47% 41% ",
            }}
          >
            <h1 className="text-[35px] font-bold">50%</h1>
            <h1 className="text-[35px] font-bold">off</h1>
          </div>

          <div className="absolute top-[39px] left-[55px] w-[651px] h-[651px] rounded-full bg-[rgba(236,210,250,0.35)] z-0" />
          <div className="absolute top-[80px] w-[648px] h-[648px] rounded-full bg-[rgba(236,210,250,0.35)] z-0" />
          <img src={sofaImg} alt="Sofa" className="absolute top-[99px] left-0 w-[629px] h-[629px] max-w-none object-contain z-10" />
        </div>
      </section>
    </div>
  );
}
export default Slide1;
