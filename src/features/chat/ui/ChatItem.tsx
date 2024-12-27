export interface ChatItemProps {
    type: "ME" | "OTHER";
    sender: string;
    time: string;
    content: string;
}

export const ChatItem = ({ type, sender, time, content }: ChatItemProps) => {
    return (
        <div>
            <div
                className="mb-1 text-gray-700"
                style={{
                    display: type === "ME" ? "none" : "block",
                    fontSize: "0.75rem",
                }}
            >
                {sender}
            </div>
            <div
                className="flex"
                style={{
                    flexDirection: type === "ME" ? "row-reverse" : "row",
                    margin: type === "ME" ? "0px 0px 0px auto" : "0px auto 0px 0px",
                }}
            >
                <div
                    className={`px-6 py-2 rounded-full size-fit `}
                    style={{
                        backgroundColor: type === "ME" ? "#ff0c7eb8" : "#EAEAEA",
                        color: type === "ME" ? "#fff" : "#000",
                    }}
                >
                    {content}
                </div>
                <div className="mx-1.5 mt-auto mb-1 text-xs text-gray-500">{time}</div>
            </div>
        </div>
    );
};
