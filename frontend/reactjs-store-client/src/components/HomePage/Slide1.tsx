import sofaImg from '/images/sofa.png';
import lampImg from '/images/lamp.png';
import { Button } from '../ui/Button';
import { Link } from 'react-router-dom';

function Slide1() {
  return (
    <div className="relative h-[764px] bg-off-white overflow-hidden mb-10">
      <img src={lampImg} alt="Lamp" className="absolute w-[387px] h-[387px] left-[-50px] object-contain z-0" />

      <section className="flex items-center h-full w-full z-10 ml-60">
        <div className="max-w-xl space-y-6">
          <p className="text-pink font-bold text-base">Best Furniture For Your Castle....</p>

          <h1 className="text-[40px] md:text-[48px] font-bold leading-tight text-black">New Furniture Collection Trends in 2020</h1>

          <p className="text-gray font-bold text-sm md:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.
          </p>

          <Button className="bg-pink text-white hover:bg-pink-600 transition-all px-6 py-3 text-base font-medium"><Link to="/product">Shop Now</Link></Button>
        </div>
        <div className="relative w-[654px] h-[654px] shrink-0 left-10">
          <div className="absolute left-[500px] w-[136px] h-[138px] rounded-[28%_72%_49%_51%/64%_38%_62%_36%] bg-[#00C1FE] z-[1000] flex items-center justify-center text-white font-bold text-[32px] pl-9">
            <h1>50% OFF</h1>
          </div>
          <div className="absolute top-[-20px] left-[20px] w-[638px] h-[638px] rounded-full bg-[rgba(236,210,250,0.35)] z-0" />
          <div className="absolute top-[30px] left-[-30px] w-[638px] h-[638px] rounded-full bg-[rgba(236,210,250,0.35)] z-0" />
          <img src={sofaImg} alt="Sofa" className="absolute top-0 left-0 w-[654px] h-[654px] max-w-none object-contain z-10" />
        </div>
      </section>
      </div>
)
}
export default Slide1;