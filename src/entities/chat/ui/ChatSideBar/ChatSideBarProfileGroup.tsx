export interface ChatSideBarProfileGroupProps {
    children?: React.ReactNode;
}

export const ChatSideBarProfileGroup = ({ children }: ChatSideBarProfileGroupProps) => {
    return (
        <div>
            <p className="text-xs font-normal text-dark-300">대화상대</p>
            <ul className="flex flex-col gap-2 my-2">{children}</ul>
        </div>
    );
};
