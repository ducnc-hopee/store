import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/input";
import { FOOTER_ITEM } from "@/consts/footerItems";

const Footer = () => {
  return (
    <section className="bg-off-white py-20 pl-40 h-[479px] mt-20">
      <div className="container px-6 mx-auto">
        <footer className="grid grid-cols-1 gap-y-12 lg:grid-cols-6 lg:gap-x-12">
          <div className="col-span-2 space-y-6">
            <h1 className="text-[38px] font-bold text-black">Hekto</h1>
            <div className="flex w-full max-w-sm overflow-hidden rounded-md border border-gray-300">
              <Input
                type="email"
                placeholder="Enter Email Address"
                className="flex-1 border-none bg-white px-4 py-2 focus:outline-none rounded-none"
              />
              <Button className="rounded-none bg-pink text-white px-5 py-2 hover:bg-pink-600">Sign Up</Button>
            </div>

            <div className="text-muted-foreground text-[15px] text-gray">
              <p className="font-semibold">Contact Info</p>
              <p>17 Princess Road, London, Greater London NW1 8JR, UK</p>
            </div>
          </div>

          {FOOTER_ITEM.map((section) => (
            <div key={section.title} className="space-y-5">
              <h3 className="text-base font-semibold text-black text-[22px]">{section.title}</h3>
              <ul className="space-y-4">
                {section.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <a href={link.url} className="hover:text-pink hover:underline transition-colors text-gray">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </footer>
      </div>
    </section>
  );
};

export default Footer;
