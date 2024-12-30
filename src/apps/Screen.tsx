import { NavBottom } from "@/apps/layouts/NavBottom";

import { AppScreen, AppScreenProps } from "@stackflow/plugin-basic-ui";

export const Screen = ({ children, ...appScreenProps }: AppScreenProps) => {
    return (
        <AppScreen {...appScreenProps}>
            <div className="screen">{children}</div>
        </AppScreen>
    );
};

export const BaseScreen = ({ children, ...appScreenProps }: AppScreenProps) => {
    return (
        <Screen {...appScreenProps}>
            <div className="screen">{children}</div>
            <NavBottom />
        </Screen>
    );
};
