import { useCallback, useEffect, useLayoutEffect, useRef } from "react";

export interface UseOnMountAnimationOption {
    initialStyles: React.CSSProperties;
    animationStyles: React.CSSProperties;

    duration: number;
    delay: number;
    timingFunction: string;
}

export const useOnMountAnimation = <Element extends HTMLElement = HTMLDivElement>({
    initialStyles,
    animationStyles,

    duration = 200,
    delay = 0,
    timingFunction = "ease-in-out",
}: UseOnMountAnimationOption) => {
    const ref = useRef<Element>(null);
    const requestAnimationFrameRef = useRef<ReturnType<typeof requestAnimationFrame>>();

    const animation = useCallback(() => {
        const element = ref.current;
        if (!element) throw new Error("[useOnMountAnimation] element 가 존재하지 않습니다.");

        element.style.transition = `all ${duration}ms ${timingFunction} ${delay}ms`;
        for (const [key, value] of Object.entries(animationStyles)) {
            element.style.setProperty(key, value);
        }
    }, [animationStyles, delay, duration, timingFunction]);

    useLayoutEffect(() => {
        const element = ref.current;
        if (!element) return;

        for (const [key, value] of Object.entries(initialStyles)) {
            element.style.setProperty(key, value);
        }
    }, [initialStyles]);

    useEffect(() => {
        requestAnimationFrameRef.current = requestAnimationFrame(animation);

        return () => {
            if (requestAnimationFrameRef.current)
                cancelAnimationFrame(requestAnimationFrameRef.current);
        };
    }, [animation]);

    return { ref };
};
