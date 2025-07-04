import React from "react";

interface CircleIconButtonProps {
  children: React.ReactNode; // Icon or SVG element
  onClick?: () => void;
  size?: string; // Tailwind size like "w-7 h-7" or custom e.g., "w-[31px] h-[31px]"
  bgColor?: string; // background color
  hoverColor?: string; // background on hover
  textColor?: string; // icon color
  shadow?: string; // optional box-shadow
}

const CircleIconButton: React.FC<CircleIconButtonProps> = ({
  children,
  onClick,
  size = "w-[31px] h-[31px]",
  bgColor = "bg-white",
  hoverColor = "hover:bg-[#f1f1f1]",
  textColor = "text-[#535399]",
  shadow = "shadow-[0_0_8px_#0000000D]",
}) => {
  return (
    <div
      onClick={onClick}
      className={`rounded-full flex items-center justify-center cursor-pointer transition ${size} ${bgColor} ${hoverColor} ${textColor} ${shadow}`}
    >
      {children}
    </div>
  );
};

export default CircleIconButton;