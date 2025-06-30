import { useLocation } from "react-router-dom";
import { NavItem } from "@/components/ui/NavItem";
import { routes } from "@/routes/config";

export const Navbar = () => {
  const { pathname } = useLocation();
  return (
    <nav className="flex items-center justify-between">
      <ul className="flex items-center gap-4">
        <li className="text-[16px] font-semibold">
          <NavItem href={routes.home} isActive={pathname === routes.home}>
            Home
          </NavItem>
        </li>
        <li className="text-[16px] font-semibold">
          <NavItem href={routes.product} isActive={pathname === routes.product}>
            Product
          </NavItem>
        </li>
      </ul>
    </nav>
  );
};
