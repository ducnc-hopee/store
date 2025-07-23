import { useLocation } from "react-router-dom";
import { NavItem } from "@/components/ui/NavItem";
import { routes } from "@/routes/config";
import { HeaderItem } from "@/components/ui/HeaderItem";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/Button";
import { Icon } from "@iconify/react";

export const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <nav className="flex items-left justify-between px-[371px] bg-white h-[40px] mt-[19px] mb-[22px]">
      <div className="flex items-center">
        <HeaderItem href={routes.home} isActive={pathname === routes.home}>
          <h1 className="font-bold text-[34px] text-navy-blue py-[3px] mr-[88px]">Hekto</h1>
        </HeaderItem>

        <ul className="flex items-center gap-[35px]">
          <li>
            <NavItem href={routes.home} isActive={pathname === routes.home}>
              <div className="flex flex-row">
                <p className="text-[16px] ">Home</p>
                <Icon icon="akar-icons:chevron-down" className="inline-block w-[12px] h-[11.5px] my-[4px] ml-[2px]" />
              </div>
            </NavItem>
          </li>
          <li>
            <NavItem href={routes.home} isActive={pathname === routes.home}>
              <p className="text-[16px] font-normal">Pages</p>
            </NavItem>
          </li>
          <li>
            <NavItem href={routes.product} isActive={pathname === routes.product}>
              <p className="text-[16px] font-normal">Products</p>
            </NavItem>
          </li>
          <li>
            <NavItem href={routes.blog} isActive={pathname === routes.blog}>
              <p className="text-[16px] font-normal">Blog</p>
            </NavItem>
          </li>
          <li>
            <NavItem href={routes.product} isActive={pathname === routes.product}>
              <p className="text-[16px] font-normal ">Shop</p>
            </NavItem>
          </li>
          <li>
            <NavItem href={routes.contact} isActive={pathname === routes.contact}>
              <p className="text-[16px] font-normal ">Contact</p>
            </NavItem>
          </li>
        </ul>
      </div>
      <div className="flex flex-row w-[317px]">
        <div className="flex items-center gap-0 overflow-hidden border-2 border-[#E7E6EF]">
          <Input type="search" className="w-[266px] border-none focus:outline-none focus:ring-0 focus:border-none rounded-none" />
        </div>
        <Button className="bg-pink w-[51px] h-[40px] rounded-none flex items-center justify-center p-0">
          <Icon icon="uil:search" className="text-white w-[28px] h-[28px] text-[28px]" />
        </Button>
      </div>
    </nav>
  );
};
