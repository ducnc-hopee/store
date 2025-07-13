import React from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

type TNavItemProps = {
  isActive?: boolean;
  children: React.ReactNode;
  href: string;
  className?: string;
};

export const HeaderItem: React.FC<TNavItemProps> = ({
  isActive,
  children,
  href,
  className,
}) => {
  return (
    <Link
      to={href}
      className={cn(
        "text-white text-[16px] font-medium cursor-pointer transition-colors",
        isActive && "text-pink",
        className
      )}
    >
      {children}
    </Link>
  );
};
