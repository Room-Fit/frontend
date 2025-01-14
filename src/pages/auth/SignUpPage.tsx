import SignUpInfoSection from "@/pages/auth/SignUpInfoSection";
import SignUpVerifySection from "@/pages/auth/SignUpVerifySection";

import { SignUpRequestContextProvider } from "@/features/auth/context/SignUpRequestContextProvider";
import { ActivityComponentType } from "@stackflow/react";

export interface SignUpPageParams {
    section?: number;
}

const SignUpSection = ({ params }: { params: SignUpPageParams }) => {
    switch (params.section) {
        case 1:
            return <SignUpVerifySection />;
        case 2:
            return <SignUpInfoSection />;
        default:
            return <SignUpVerifySection />;
    }
};

const SignUpPage: ActivityComponentType<SignUpPageParams> = ({ params }) => {
    return (
        <SignUpRequestContextProvider>
            <SignUpSection params={params} />
        </SignUpRequestContextProvider>
    );
};

export default SignUpPage;
