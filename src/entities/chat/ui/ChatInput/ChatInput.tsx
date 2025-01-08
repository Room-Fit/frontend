import { Send } from "lucide-react";

import { Button, Input } from "@/shared/ui";

interface ChatInputProps extends React.ComponentProps<"input"> {
    children?: React.ReactNode;
}
export const ChatInput = ({ ...props }: ChatInputProps) => {
    return (
        <div className="fixed bottom-0 flex w-full gap-2 px-5 py-2 bg-white h-fit">
            <Input
                {...props}
                className="text-sm focus:outline-none focus-visible:outline-none focus-visible:border-0 h-9 rounded-xl bg-dark-100 focus-visible:ring-0 focus:ring-0 focus-visible:ring-offset-0"
            />
            <Button className="p-0 h-9 rounded-xl aspect-square">
                <Send strokeWidth={1.4} />
            </Button>
        </div>
    );
};
