export interface TextDisplayProps {
    children?: React.ReactNode;
}

export const TextDisplay = ({ children }: TextDisplayProps) => {
    return <div className="px-4 py-2 font-medium rounded-md bg-dark-100">{children}</div>;
};
