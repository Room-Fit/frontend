import { useCallback, useEffect, useMemo, useRef, useState } from "react";

import {
    getPreviousMessageHistory,
    MessageHistoryType,
} from "@/features/chat/hooks/usePreviousMessageHistory";
import { BasePaginationResponse } from "@/shared/types/BaseResponse";

type useInfObserverOptions = {
    rootMargin: string;
    threshold: number;
    room_id: number;
};

export const useInfObserverFetch = <
    // D extends Record<string, unknown>[],
    C extends HTMLElement = HTMLElement,
    T extends HTMLElement = HTMLElement,
>({
    rootMargin = "0px",
    threshold = 0.5,
    room_id,
}: useInfObserverOptions) => {
    const targetRef = useRef<T>(null);
    const scrollContainerRef = useRef<C>(null);
    const intersectionObserverRef = useRef<IntersectionObserver | null>(null);

    const [isPending, setIsPending] = useState<boolean>(false);
    const [isError, setIsError] = useState<boolean>(false);
    const [data, setData] = useState<BasePaginationResponse<MessageHistoryType[]> | null>(null);
    const [error, setError] = useState<Error | null>(null);
    const [hasNext, setHasNext] = useState<boolean>(true);
    const [lastMessageId, setLastMessageId] = useState<number | undefined>(undefined);
    const [initialLoad, setIsInitialLoad] = useState<boolean>(true);
    const [prevScrollHeight, setPrevScrollHeight] = useState<number>(0);
    const [prevScrollTop, setPrevScrollTop] = useState<number>(0);

    const fetchPaginatedData = useCallback(async () => {
        if (isPending || !hasNext || !scrollContainerRef.current) return;

        try {
            setIsPending(true);

            const currentScrollHeight = scrollContainerRef.current.scrollHeight;
            const currentScrollTop = scrollContainerRef.current.scrollTop;
            setPrevScrollHeight(currentScrollHeight);
            setPrevScrollTop(currentScrollTop);

            const response = await getPreviousMessageHistory({
                room_id,
                lastMessageId: data?.data.at(0)?.id,
            });

            if (!response) return;

            setData((prevData) => {
                return {
                    data: prevData ? [...response.data, ...prevData.data] : response.data,
                    meta: response.meta,
                } as BasePaginationResponse<MessageHistoryType[]>;
            });

            setLastMessageId(response.meta.hasNext ? lastMessageId : undefined);
            setHasNext(response.meta.hasNext);
        } catch (error) {
            setIsError(true);
            setError(error as Error);
        } finally {
            setIsPending(false);
        }
    }, [data, isPending, lastMessageId, room_id, hasNext]);

    const observerOptions: IntersectionObserverInit = useMemo(() => {
        return {
            root: scrollContainerRef.current,
            rootMargin,
            threshold,
        };
    }, [rootMargin, threshold]);

    const observerCallback = useCallback(
        (entries: IntersectionObserverEntry[]) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    console.warn("Element 가 화면에 보임!");
                    fetchPaginatedData();
                }
            });
        },
        [fetchPaginatedData],
    );
    useEffect(() => {
        if (!scrollContainerRef.current || !data) return;

        if (initialLoad) {
            scrollContainerRef.current.scrollTop = scrollContainerRef.current.scrollHeight;
            setIsInitialLoad(false);
        } else if (prevScrollHeight && prevScrollTop !== null) {
            const newScrollHeight = scrollContainerRef.current.scrollHeight;
            const scrollHeightDiff = newScrollHeight - prevScrollHeight;

            scrollContainerRef.current.scrollTop = prevScrollTop + scrollHeightDiff;
            setPrevScrollHeight(0);
            setPrevScrollTop(0);
        }
    }, [data]);

    // [2] IntersectionObserver 설정
    useEffect(() => {
        if (!targetRef.current || !scrollContainerRef.current) return;
        const target = targetRef.current;

        intersectionObserverRef.current = new IntersectionObserver(
            observerCallback,
            observerOptions,
        );
        intersectionObserverRef.current.observe(target);

        return () => {
            intersectionObserverRef.current?.unobserve(target);
        };
    }, [observerCallback, observerOptions]);

    return {
        isPending,
        isError,
        data,
        error,
        targetRef,
        scrollContainerRef,
        lastMessageId,
        hasNext,
    };
};
