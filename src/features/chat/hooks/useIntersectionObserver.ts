import { useEffect, useRef } from "react";

import { usePreviousMessageHistory } from "@/features/chat/hooks/usePreviousMessageHistory";

export const useIntersectionObserver = (room_id: number) => {
    const { data, hasNextPage, fetchNextPage, isFetchingNextPage } =
        usePreviousMessageHistory(room_id);

    const locationRef = useRef<HTMLDivElement>(null);

    const hasNextPageRef = useRef(hasNextPage);
    const isFetchingNextPageRef = useRef(isFetchingNextPage);

    useEffect(() => {
        hasNextPageRef.current = hasNextPage;
        isFetchingNextPageRef.current = isFetchingNextPage;
    }, [hasNextPage, isFetchingNextPage]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                const [entry] = entries;
                if (
                    entry.isIntersecting &&
                    hasNextPageRef.current &&
                    !isFetchingNextPageRef.current
                ) {
                    fetchNextPage();
                }
            },
            {
                root: null,
                rootMargin: "100px 0px 0px 0px",
                threshold: 0.1,
            },
        );

        if (locationRef.current) {
            observer.observe(locationRef.current);
        }

        return () => observer.disconnect();
    }, [fetchNextPage]);

    return { locationRef, data, isFetchingNextPage };
};
