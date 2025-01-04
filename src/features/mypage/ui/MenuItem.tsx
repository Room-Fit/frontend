export interface MenuItemProps {
    label: string;
    icon?: React.ReactNode;
}

export const MenuItem = ({ label, icon }: MenuItemProps) => {
    return (
        <div className="flex items-center gap-2">
            <span>{icon}</span>
            <span className="font-semibold">{label}</span>
        </div>
    );
};
