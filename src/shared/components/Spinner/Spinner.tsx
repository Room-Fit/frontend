import { forwardRef } from "react";

export interface SpinnerProps {
    width: number;
    height: number;
    borderWidth: number;
    styles?: React.CSSProperties;
}

export const Spinner = forwardRef<HTMLSpanElement, SpinnerProps>(
    ({ width, height, borderWidth, styles }, ref) => {
        return (
            <span
                ref={ref}
                className={`
                inline-block 
                border-white 
                border-b-transparent 
                rounded-full 
                animate-spin
            `}
                style={{
                    width: `${width}px`,
                    height: `${height}px`,
                    borderWidth: `${borderWidth}px`,
                    ...styles,
                }}
            />
        );
    },
);
