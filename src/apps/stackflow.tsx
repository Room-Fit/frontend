import { Fragment } from "react/jsx-runtime";

import { NavBottom } from "@/apps/layouts/NavBottom";

import HomePage from "@/pages/home/HomePage";
import MatchDetailPage from "@/pages/match/MatchDetailPage";
import MatchListPage from "@/pages/match/MatchListPage";

import { AppScreen, AppScreenProps, basicUIPlugin } from "@stackflow/plugin-basic-ui";
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
                MatchListPage: "/match",
                MatchDetailPage: "/match/detail",
            },
            fallbackActivity: () => "HomePage",
        }),
    ],

    activities: {
        HomePage,
        MatchListPage,
        MatchDetailPage,
    },
    initialActivity: () => "HomePage",
});

export const Screen = ({ children, ...appScreenProps }: AppScreenProps) => {
    return (
        <Fragment>
            <AppScreen {...appScreenProps}>
                <div className="screen">{children}</div>
            </AppScreen>
            <NavBottom />
        </Fragment>
    );
};
