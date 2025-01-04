import { useLayoutEffect, useRef } from "react";

export const useInitialStyle = <Element extends HTMLElement = HTMLElement>(
    initialStyles: React.CSSProperties,
) => {
    const ref = useRef<Element>(null);

    useLayoutEffect(() => {
        const element = ref.current;
        if (!element) return;

        for (const [key, value] of Object.entries(initialStyles))
            element.style.setProperty(key, value);
    }, [initialStyles]);

    return { ref };
};
