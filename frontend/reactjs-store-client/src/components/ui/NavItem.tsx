import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

type TNavItemProps = {
  isActive: boolean;
  children: React.ReactNode;
  href: string;
};
export const NavItem: React.FC<TNavItemProps> = ({
  isActive,
  children,
  href,
}) => {
  return (
    <Link
      to={href}
      className={cn("text-off-blue text-[16px] font-semibold hover:underline", {
        "text-pink": isActive,
      })}
    >
      {children}
    </Link>
  );
};
