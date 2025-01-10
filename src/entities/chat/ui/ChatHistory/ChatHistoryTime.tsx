import { TimeStampUtils } from "@/shared/utils/TimeStampUtils";

export interface ChatHistoryTimeProps {
    timeStamp: string;
}

export const ChatHistoryTime = ({ timeStamp }: ChatHistoryTimeProps) => {
    return (
        <div className="px-5 py-1 mx-auto my-3 text-xs font-normal text-white rounded-full bg-dark-200 w-fit">
            {TimeStampUtils.toLocaleDate(timeStamp)}
        </div>
    );
};
