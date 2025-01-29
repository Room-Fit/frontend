import { cn } from "@/shared/lib";

export interface BackDropImageProps extends React.ComponentProps<"img"> {
    width: SizeProp;
    height: SizeProp;
    direction?: "col" | "col-reverse" | "row" | "row-reverse";
    children?: React.ReactNode;
}

export const BackDropImage = ({ width, height, children, ...props }: BackDropImageProps) => {
    return (
        <div className="relative" style={{ width: width, height: height }}>
            <img
                {...props}
                className={cn(props.className, "block absolute inset-0 w-full h-full object-cover")}
            />
            <div className="absolute inset-0 z-50 w-full h-full gradient-col">{children}</div>
        </div>
    );
};
