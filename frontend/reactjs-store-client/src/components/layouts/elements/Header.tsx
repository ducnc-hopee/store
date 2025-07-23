import { Button } from "@/components/ui/Button";
import { ChevronDown } from "lucide-react";
import { routes } from "@/routes/config";
import { Link, useLocation } from "react-router-dom";
import { Icon } from "@iconify/react";
import { HeaderItem } from "@/components/ui/HeaderItem";
import { useUserStore } from "@/store/userStore";

function Header() {
  const { pathname } = useLocation();
  const { user } = useUserStore();

  return (
    <div className="text-white">
      <header className="flex items-center justify-between bg-purple h-[44px] pl-[377px]">
        <div>
          <div className="flex items-center text-left h-[44px]">
            <Icon icon="uil:envelope-alt" className="inline-block my-[14px] mr-[10px] w-[16px] h-[16px] item-center" />
            <h1 className="text-[#F1F1F1] text-[16px] w-[171px] mr-[48px] font-semibold">mhhasanul@gmail.com</h1>
            <Icon icon="bx:bx-phone-call" className="inline-block w-[16px] h-[16px] mr-[12px]" />
            <h1 className="text-[16px] text-[#F1F1F1] font-semibold w-[97px] h-[16px] my-[14px]">(12345)67890</h1>
          </div>
        </div>

        <div className="flex mr-[372px]">
          <div className="flex flex-row items-center ">
            <h1 className="text-[16px] font-semibold text-[#F1F1F1] mr-[1px]">English</h1>
            <Icon icon="akar-icons:chevron-down" className="w-[16px] h-[16px] mr-[17px] mb-[4.6px]" />
          </div>
          <div className="flex flex-row items-center ">
            <h1 className="text-[16px] font-semibold text-[#F1F1F1] mr-[1px]">USD</h1>
            <Icon icon="akar-icons:chevron-down" className="w-[16px] h-[16px] mr-[17px] mb-[4.6px]" />
          </div>
          {user ? (
            <div className="flex items-center gap-2 text-white">
              <Link to="/account">{user}</Link>
              <Icon icon="carbon:user" className="inline-block  w-[16px] h-[16px] mb-1 font-bold mr-[16px]" />
            </div>
          ) : (
            <HeaderItem href={routes.account} isActive={pathname === routes.account}>
              <div className="flex flex-row items-center">
                <h1 className={`text-[16px] font-semibold py-[14px] ${pathname === routes.account ? "text-pink" : "text-[#F1F1F1]"}`}>Login</h1>
                <Icon icon="carbon:user" className="inline-block  w-[16px] h-[16px] mb-[16px] mt-[12px] pb-[1px] mr-[16px]" />
              </div>
            </HeaderItem>
          )}

          <HeaderItem href={routes.cart} isActive={pathname === routes.cart}>
            <div className="flex flex-row items-center">
              <h1 className={`text-[16px] font-semibold py-[14px] ${pathname === routes.cart ? "text-pink" : "text-[#F1F1F1]"}`}>Wishlist</h1>
              <Icon icon="uil:heart-alt" className="inline-block  w-[16px] h-[16px] mb-[16px] mt-[12px] pb-[1px] mr-[28.5px]" />
            </div>
          </HeaderItem>

          <HeaderItem href={routes.cart} isActive={pathname === routes.cart}>
            <div className="flex flex-row">
              <Icon
                icon="fluent:cart-24-regular"
                className="inline-block w-[24px] h-[24px] pt-[3.5px] pb-[3px] pl-[2.5px] pr-[4px] mt-[9px] mb-[11px]"
              />
            </div>
          </HeaderItem>
        </div>
      </header>
    </div>
  );
}

export default Header;
