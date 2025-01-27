import { CardDecorator } from "@/shared/assets/CardDecorator";
import { CardLogo } from "@/shared/assets/CardLogo";
import { cn } from "@/shared/lib";

const cardTheme = {
    blue: {
        primaryColor: "#5DA5FF",
        secondaryColor: "#EFEFEF",
        background: "bg-[linear-gradient(to_bottom,_#5DA5FF_0%,_#0675FF_56%)]",
    },
    gray: {
        primaryColor: "#C9CACA",
        secondaryColor: "#EFEFEF",
        background: "bg-[#EFEFEF]",
    },
    blueTransparent: {
        primaryColor: "#5DA5FF",
        secondaryColor: "#EFEFEF",
        background: "bg-[#5DA5FF66]",
    },
    grayTransparent: {
        primaryColor: "#C9CACA",
        secondaryColor: "#EFEFEF",
        background: "bg-[#C9CACA66]",
    },
};

export interface CardProps extends React.ComponentProps<"div"> {
    className?: string;
    theme?: keyof typeof cardTheme;
    children?: React.ReactNode;
}

export const Card = ({ className, children, theme = "blue", ...rest }: CardProps) => {
    const selectedTheme = cardTheme[theme];

    return (
        <div
            className={cn(
                "relative flex overflow-hidden rounded-lg z-0 hover:cursor-pointer",
                selectedTheme.background,
                className,
            )}
            {...rest}
        >
            <CardLogo
                primaryColor={selectedTheme.primaryColor}
                secondaryColor={selectedTheme.secondaryColor}
                className="absolute right-0 h-[128px] bottom-[-15px]"
            />
            <CardDecorator
                color={selectedTheme.primaryColor}
                className="absolute scale-[2] rotate-[20deg] top-[-120px] left-[-120px]"
            />

            <div className="w-full h-full">{children}</div>
        </div>
    );
};
