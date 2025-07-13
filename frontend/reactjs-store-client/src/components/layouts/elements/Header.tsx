import { Button } from "@/components/ui/Button";
import { ChevronDown } from "lucide-react";
import { routes } from "@/routes/config";
import { useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
import { HeaderItem } from "@/components/ui/HeaderItem";

function Header() {
  const { pathname } = useLocation();

  return (
    <div className="text-white">
      <header className="flex items-center justify-between bg-purple shadow-md w-full h-[44px] px-8">
        <div>
          <div className="flex gap-4 ml-50 text-sm">
            <h1>
              <Icon icon="uil:envelope-alt" className="inline-block mr-1" />
              mhhasanul@gmail.com
            </h1>
            <h1>
              <Icon icon="bx:bx-phone-call" className="inline-block mr-1" /> (12345)67890
            </h1>
          </div>
        </div>

        <div className="flex items-center gap-4 mr-50 text-sm">
          <Button variant="ghost" className="text-white gap-1 cursor-pointer">
            English <ChevronDown className="h-4 w-4" />
          </Button>
          <Button variant="ghost" className="text-white gap-1 cursor-pointer">
            USD <ChevronDown className="h-4 w-4" />
          </Button>

          <HeaderItem href={routes.account} isActive={pathname === routes.account}>
            Login <Icon icon="carbon:user" className="inline-block  w-[16px] h-[16px] ml-1 mb-1 font-bold" />
          </HeaderItem>

          <HeaderItem href={routes.cart} isActive={pathname === routes.cart}>
            Wishlist <Icon icon="uil:heart-alt" className="inline-block ml-1 mb-1  w-[16px] h-[16px]" />
          </HeaderItem>

          <HeaderItem href={routes.cart} isActive={pathname === routes.cart}>
            <Icon icon="fluent:cart-24-regular" className="inline-block w-[24px] h-[24px] ml-1" />
          </HeaderItem>
        </div>
      </header>
    </div>
  );
}

export default Header;
