import SignInPage from "@/pages/auth/SignInPage";
import SignUpPage from "@/pages/auth/SignUpPage";
import ChatRoomPage from "@/pages/chat/ChatRoomPage";
import HomePage from "@/pages/home/HomePage";
import CreateMatchPage from "@/pages/match/CreateMatchPage";
import MatchDetailPage from "@/pages/match/MatchDetailPage";
import MatchListPage from "@/pages/match/MatchListPage";
import MyPage from "@/pages/mypage/MyPage";
import ProfileDetailPage from "@/pages/profile/ProfileDetailPage";

import { basicUIPlugin } from "@stackflow/plugin-basic-ui";
import { historySyncPlugin } from "@stackflow/plugin-history-sync";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import { stackflow } from "@stackflow/react";

const stackflowApp = stackflow({
    transitionDuration: 250,
    plugins: [
        basicRendererPlugin(),
        basicUIPlugin({
            theme: "cupertino",
        }),
        historySyncPlugin({
            routes: {
                HomePage: "/",

                SignInPage: "/auth/signin",
                SignUpPage: "/auth/signup",

                MatchListPage: "/match",
                CreateMatchPage: "/match/new",
                MatchDetailPage: "/match/detail",

                ChatRoomPage: "/chat",

                MyPage: "/mypage",
                ProfileDetailPage: "/profile/detail",
            },
            fallbackActivity: () => "HomePage",
        }),
    ],

    activities: {
        HomePage,

        SignInPage,
        SignUpPage,

        MatchListPage,
        CreateMatchPage,
        MatchDetailPage,

        ChatRoomPage,

        MyPage,
        ProfileDetailPage,
    },
    initialActivity: () => "HomePage",
});

export const { Stack, useFlow } = stackflowApp;
export type ActivityName = keyof typeof stackflowApp.activities;
