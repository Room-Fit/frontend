export interface MenuProps {
    label?: string;
    children?: React.ReactNode;
}

export const Menu = ({ label, children }: MenuProps) => {
    return (
        <article className="flex flex-col gap-4 py-4">
            {label && <h2 className="text-lg font-bold text-primary">{label}</h2>}
            {children}
        </article>
    );
};
