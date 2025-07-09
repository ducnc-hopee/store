import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { FOOTER_ITEM } from "@/consts/footerItems";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <section className="bg-off-white h-[479px]">
      <div className="flex pt-[95px] pl-[310px]">
        <div className="flex flex-col mr-[71px] w-[401px]">
          <h1 className="text-[38px] font-bold text-black">Hekto</h1>
          <div className="flex w-full h-[44px] max-w-sm overflow-hidden rounded-[3px] border-3 border-transparent bg-white shadow-none">
            <Input
              type="email"
              placeholder="Enter Email Address"
              className="flex-1 border-none shadow-none pl-[20px] pt-[11px] focus:outline-none rounded-none text-gray text-[16px] w-[305px]"
            />
            <Button className="rounded-[3px] w-[135px] h-[39px] bg-pink text-white px-[39px] pb-[9px] hover:bg-pink-600 font-[500px]">Sign Up</Button>
          </div>
          <div className="text-[16px] text-gray mt-[25px] w-[401px]">
            <p className="mb-[10px]">Contact Info</p>
            <p className="whitespace-nowrap">17 Princess Road, London, Greater London NW1 8JR, UK</p>
          </div>
        </div>
        <div className="flex gap-[60px]">
          {FOOTER_ITEM.map((section) => (
            <div key={section.title} className="mr-[28px]">
              <h3 className="font-semibold text-black text-[22px] mb-[42px]">{section.title}</h3>
              <ul className="space-y-[21px]">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link to={link.url} className="hover:text-pink hover:underline transition-colors text-gray text-[16px]">
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Footer;
