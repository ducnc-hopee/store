import React from "react";

interface SectionTitleProps{
    children: React.ReactNode;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ children }) => {
    return (
        <h3 className="text-base font-bold pt-4 pb-3 underline text-[color:var(--color-off-blue)]">
            {children}
        </h3>
    );
};

export default SectionTitle 