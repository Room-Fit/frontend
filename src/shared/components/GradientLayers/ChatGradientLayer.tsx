export interface ChatGradientLayerProps {
    className?: string;
    children?: React.ReactNode;
}

export const ChatGradientLayer = ({ className, children }: ChatGradientLayerProps) => {
    return (
        <div
            className={className}
            style={{
                background:
                    "linear-gradient(to bottom, rgba(93, 165, 255, 0.5) 8%, rgba(6, 117, 255, 1) 58%)",
            }}
        >
            {children}
        </div>
    );
};
