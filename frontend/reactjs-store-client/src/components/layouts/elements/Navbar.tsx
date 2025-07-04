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
    <nav className="flex items-center justify-between px-8 py-4 shadow-sm bg-white">
      <div className="flex items-center gap-10">

        <HeaderItem href={routes.home} isActive={pathname === routes.home}>
          <h1 className="font-bold text-3xl text-navy-blue ml-50">Hekto</h1>
        </HeaderItem>

        <ul className="flex items-center gap-6">
          <li>
            <NavItem href={routes.home} isActive={pathname === routes.home}>
              Home
            </NavItem>
          </li>
          <li>
            <NavItem href={routes.product} isActive={pathname === routes.product}>
              Products
            </NavItem>
          </li>
          <li>
            <NavItem href={routes.blog} isActive={pathname === routes.blog}>
              Blog
            </NavItem>
          </li>
          <li>
            <NavItem href={routes.cart} isActive={pathname === routes.cart}>
              Shop
            </NavItem>
          </li>
          <li>
            <NavItem href={routes.contact} isActive={pathname === routes.contact}>
              Contact
            </NavItem>
          </li>
        </ul>
      </div>

      <div className="flex items-center gap-0 overflow-hidden rounded-lg border border-gray-300 mr-[200px]">
        <Input
          type="search"
          placeholder="Search"
          className="w-48 text-sm px-3 py-2 border-none focus:outline-none focus:ring-0 focus:border-none rounded-none"
        />
        <Button className="bg-pink p-2 px-4 rounded-none">
          <Icon icon="uil:search" className="w-5 h-5 text-white" />
        </Button>
      </div>
    </nav>
  );
};
