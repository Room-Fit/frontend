import { Fragment } from "react/jsx-runtime";

import { RoomFitLogoGray } from "@/shared/assets/RoomFitLogoGray";

export interface ChatRoomListItemProps {
    isNotReadMessageExist: boolean;
    title: string;
    imgSrc?: string;
    lastMessage: string;
    lastMessageTimeStamp: string;
}

export const ChatRoomListItem = ({
    isNotReadMessageExist,
    title,
    imgSrc,
    lastMessage,
    lastMessageTimeStamp,
}: ChatRoomListItemProps) => {
    return (
        <Fragment>
            <li className="flex items-center h-20 gap-4 list-none">
                <div className="relative flex items-center justify-center flex-shrink-0 h-16 rounded-xl bg-dark-100 aspect-square ">
                    {isNotReadMessageExist && (
                        <div className="absolute w-4 h-4 rounded-full bg-primary top-[-5px] right-[-5px]" />
                    )}
                    {imgSrc ? (
                        <img
                            src={imgSrc}
                            alt="채팅방 썸네일"
                            className="w-full h-full rounded-xl"
                        />
                    ) : (
                        <div className="flex items-center justify-center h-full aspect-square">
                            <RoomFitLogoGray />
                        </div>
                    )}
                </div>

                <div className="flex-grow">
                    <h1 className="font-semibold mb-0.5 line-clamp-1">{title}</h1>
                    <div className="h-12 leading-5 text-dark-300 ">
                        <p className="text-sm line-clamp-2">{lastMessage}</p>
                    </div>
                </div>

                <div className="flex items-start justify-end h-full text-sm font-light w-18 text-dark-200">
                    <p>{lastMessageTimeStamp}</p>
                </div>
            </li>
            <div className="border-b border-[#EFEFEF] last:border-none my-3" />
        </Fragment>
    );
};
