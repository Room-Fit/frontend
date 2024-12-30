import SignInPage from "@/pages/auth/SignInPage";
import SignUpPage from "@/pages/auth/SignUpPage";
import HomePage from "@/pages/home/HomePage";
import MatchDetailPage from "@/pages/match/MatchDetailPage";
import MatchListPage from "@/pages/match/MatchListPage";

import { basicUIPlugin } from "@stackflow/plugin-basic-ui";
import { historySyncPlugin } from "@stackflow/plugin-history-sync";
import { basicRendererPlugin } from "@stackflow/plugin-renderer-basic";
import { stackflow } from "@stackflow/react";

export const { Stack, useFlow } = stackflow({
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
                MatchDetailPage: "/match/detail",
            },
            fallbackActivity: () => "HomePage",
        }),
    ],

    activities: {
        HomePage,
        SignInPage,
        SignUpPage,
        MatchListPage,
        MatchDetailPage,
    },
    initialActivity: () => "HomePage",
});
