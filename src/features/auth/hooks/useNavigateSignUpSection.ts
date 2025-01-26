import { toast } from "react-toastify";

import { useFlow } from "@/apps/stackflow";

import { useSignUpStore } from "@/features/auth/store/useSignUpStore";

export const useNavigateSignUpSection = () => {
    const { push } = useFlow();

    const { isEmailVerified, email, password, authToken } = useSignUpStore();

    const toHomePage = () => {
        push("HomePage", {});
    };

    const toSignUpInfoSection = () => {
        if (!isEmailVerified || !email || !authToken) toast.error("이메일 인증을 먼저 해주세요");
        else if (!password) toast.error("비밀번호를 입력해주세요");
        else push("SignUpPage", { section: 2 });
    };

    const toSignUpVerifySection = () => {
        push("SignUpPage", { section: 1 });
    };

    const toSignUpCompleteSection = () => {
        push("MatchListPage", {});
    };

    return {
        toHomePage,
        toSignUpInfoSection,
        toSignUpVerifySection,
        toSignUpCompleteSection,
    };
};
