import React, { forwardRef } from "react";

import { Send } from "lucide-react";

import { Button, Input } from "@/shared/ui";

interface ChatInputProps extends React.ComponentProps<"input"> {
    children?: React.ReactNode;
    onSendButtonClick?: () => void;
}

export const ChatInput = forwardRef<HTMLInputElement, ChatInputProps>(
    ({ onSendButtonClick, ...props }, ref) => {
        return (
            <div className="fixed bottom-0 flex w-full gap-2 px-5 py-2 bg-white h-fit">
                <Input
                    ref={ref}
                    className="text-sm focus:outline-none focus-visible:outline-none focus-visible:border-0 h-9 rounded-xl bg-dark-100 focus-visible:ring-0 focus:ring-0 focus-visible:ring-offset-0"
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            e.preventDefault();
                            onSendButtonClick?.();
                        }
                    }}
                    {...props}
                />
                <Button
                    className="p-0 h-9 rounded-xl aspect-square"
                    onClick={(e) => {
                        e.preventDefault();
                        onSendButtonClick?.();
                    }}
                >
                    <Send strokeWidth={1.4} />
                </Button>
            </div>
        );
    },
);
