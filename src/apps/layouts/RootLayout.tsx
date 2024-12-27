import { Outlet } from "react-router-dom";
import { Fragment } from "react/jsx-runtime";

import { NavTop } from "./NavBar";

export const RootLayout = () => {
    return (
        <Fragment>
            <NavTop />
            <main
                className="w-full max-w-[600px] mx-auto p-3 mt-[60px]"
                style={{
                    height: "calc(100dvh - 60px)",
                }}
            >
                <Outlet />
            </main>
        </Fragment>
    );
};
