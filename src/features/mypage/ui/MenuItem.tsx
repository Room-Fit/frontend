import React from "react";

export interface MenuItemProps extends React.ComponentProps<"div"> {
    label: string;
    icon?: React.ReactNode;
}

export const MenuItem = ({ label, icon, ...rest }: MenuItemProps) => {
    return (
        <div className="flex items-center gap-2" {...rest}>
            <span>{icon}</span>
            <span className="font-semibold">{label}</span>
        </div>
    );
};
