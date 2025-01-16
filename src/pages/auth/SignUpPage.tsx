import SignUpInfoSection from "@/pages/auth/SignUpInfoSection";
import SignUpVerifySection from "@/pages/auth/SignUpVerifySection";

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
    return <SignUpSection params={params} />;
};

export default SignUpPage;
