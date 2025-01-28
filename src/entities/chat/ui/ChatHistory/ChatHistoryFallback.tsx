import { forwardRef } from "react";

export const ChatHistoryFallback = forwardRef<HTMLDivElement, object>((_, ref) => {
    return (
        <div
            ref={ref}
            className="flex items-center justify-center px-5 mx-auto rounded-md w-fit h-fit bg-dark-200"
        >
            <div className="text-center">로딩중입니다...</div>
        </div>
    );
});
