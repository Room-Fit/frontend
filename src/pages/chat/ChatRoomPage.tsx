import { Fragment } from "react/jsx-runtime";

import { Send } from "lucide-react";

import { NavChatTop } from "@/apps/layouts/NavChat";

import { ChatItem } from "@/features/chat/ui/ChatItem";
import { Button } from "@/shared/ui/button";
import { Input } from "@/shared/ui/input";

export default function ChatRoomPage() {
    return (
        <Fragment>
            <NavChatTop title={"채팅방 이름"} currentQuota={0} maxQuota={0} />

            <div className="flex flex-col mt-[60px] pt-2 px-4 gap-2 mb-[64px]">
                {Array.from({ length: 10 }).map(() => {
                    return (
                        <>
                            <ChatItem
                                sender={"홍길동"}
                                time={"08:10"}
                                content={"좀 더 긴 채팅 내용좀 더 긴 채팅 내용좀 더 긴 채팅 내용"}
                                type={"ME"}
                            />

                            <ChatItem
                                sender={"홍길동"}
                                time={"08:10"}
                                content={"좀 더 긴 채팅 내용"}
                                type={"OTHER"}
                            />
                        </>
                    );
                })}
            </div>

            <div className="fixed bottom-0 bg-white shadow-lg w-full h-[60px] flex gap-2 px-2 py-2 items-center">
                <Input className="h-full" />
                <Button className="h-full aspect-square shrink-0">
                    <Send />
                </Button>
            </div>
        </Fragment>
    );
}
