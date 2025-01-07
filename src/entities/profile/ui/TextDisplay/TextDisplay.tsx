import { cn } from "@/shared/lib";

export interface TextDisplayProps {
    className?: string;
    children?: React.ReactNode;
}

export const TextDisplay = ({ className, children }: TextDisplayProps) => {
    return (
        <div className={cn("px-4 py-2 font-medium rounded-md bg-dark-100", className)}>
            {children}
        </div>
    );
};
