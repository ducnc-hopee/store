import React from "react";
import { Link } from "react-router-dom";
import { cn } from "../../lib/utils";

type TLinkableProps = {
  to: string;
  children: React.ReactNode;
  className?: string;
};

export const Linkable: React.FC<TLinkableProps> = ({ to, children, className }) => {
  return (
    <div className={cn("relative cursor-pointer hover:opacity-80", className)}>
      <Link to={to} className="absolute inset-0" />
      {children}
    </div>
  );
};
