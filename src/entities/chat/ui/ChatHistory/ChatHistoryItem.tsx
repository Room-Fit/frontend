import { ChatMessageDecorator } from "@/entities/chat/assets/ChatMessageDecorator";
import { TimeStampUtils } from "@/shared/utils/TimeStampUtils";

export interface ChatHistoryItemProps {
    type: "send" | "receive";
    author: string;
    message: string;
    timeStamp: string;
}

export const SenderHistoryItem = ({ message, timeStamp }: Omit<ChatHistoryItemProps, "type">) => {
    return (
        <li className="flex items-end ml-auto mr-0 list-none h-fit">
            <p className="mx-1.5 text-xs text-dark-400 flex-shrink-0">
                {TimeStampUtils.toLocaleTime(timeStamp)}
            </p>
            <p className="bg-[#5DA5FF] rounded-sm py-1 px-3 text-white relative">
                <ChatMessageDecorator className="absolute right-[-8px]" fill="#5DA5FF" />
                {message}
            </p>
        </li>
    );
};

export const ReceiverHistoryItem = ({
    author,
    message,
    timeStamp,
}: Omit<ChatHistoryItemProps, "type">) => {
    return (
        <li className="list-none h-fit">
            <p className="my-1 text-xs font-semibold text-dark-400">{author}</p>
            <div className="flex items-end">
                <p className="relative px-3 py-1 bg-white rounded-sm">
                    <ChatMessageDecorator
                        className="absolute left-[-8px] rotate-180 scale-y-[-1]"
                        fill="#FFF"
                    />
                    <p className="text-[#333333]">{message}</p>
                </p>
                <p className="mx-1.5 text-xs text-dark-400 flex-shrink-0">
                    {TimeStampUtils.toLocaleTime(timeStamp)}
                </p>
            </div>
        </li>
    );
};

export const ChatHistoryItem = ({ type, ...historyItemProps }: ChatHistoryItemProps) => {
    switch (type) {
        case "send":
            return <SenderHistoryItem {...historyItemProps} />;
        case "receive":
            return <ReceiverHistoryItem {...historyItemProps} />;
        default:
            return <SenderHistoryItem {...historyItemProps} />;
    }
};