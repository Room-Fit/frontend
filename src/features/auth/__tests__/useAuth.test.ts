import {
    AuthAction,
    AuthActionType,
    authInitialState,
    authReducer,
} from "@/features/auth/store/useAuth";

describe("useAuth()", () => {
    describe("authReducer", () => {
        const MOCK_ACCESS_TOKEN = "mock-access-token";
        const MOCK_REFRESH_TOKEN = "mock-refresh-token";

        test("로그인시 isAuthenticated 를 true 로 변경하고 accessToken, refreshToken 을 설정한다", () => {
            const state = authInitialState;
            const action: AuthAction = {
                type: AuthActionType.SIGN_IN,
                payload: { accessToken: MOCK_ACCESS_TOKEN, refreshToken: MOCK_REFRESH_TOKEN },
            };

            expect(authReducer(state, action)).toEqual({
                isAuthenticated: true,
                accessToken: MOCK_ACCESS_TOKEN,
                refreshToken: MOCK_REFRESH_TOKEN,
            });
        });

        test("로그아웃시 isAuthenticated 를 false 로 변경하고 accessToken, refreshToken 을 초기화한다", () => {
            const state = authInitialState;
            const action: AuthAction = {
                type: AuthActionType.SIGN_OUT,
            };

            expect(authReducer(state, action)).toEqual({
                isAuthenticated: false,
                accessToken: "",
                refreshToken: "",
            });
        });
    });
});
