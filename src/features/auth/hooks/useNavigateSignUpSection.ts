import { useFlow } from "@/apps/stackflow";

export const useNavigateSignUpSection = () => {
    const { push } = useFlow();

    const toHomePage = () => {
        push("HomePage", {});
    };

    const toSignUpInfoSection = () => {
        push("SignUpPage", { section: 2 });
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
