import SignInPage from "@/pages/auth/SignInPage";

import { authService } from "@/features/auth/service";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";

jest.mock("@/features/auth/service", () => ({
    authService: {
        signIn: jest.fn(),
    },
}));

jest.mock("@/apps/stackflow", () => ({
    useFlow: () => ({
        pop: jest.fn(),
        replace: jest.fn(),
    }),
}));

describe("로그인 통합 테스트", () => {
    beforeEach(() => {
        localStorage.clear();
        jest.clearAllMocks();
    });

    const mockAuthResponse = {
        accessToken: "mock-access-token",
        refreshToken: "mock-refresh-token",
    };

    test("로그인 성공시 access/refresh 토큰을 zustand/persist를 통해 localStorage에 저장합니다", async () => {
        const mockLoginRequest = {
            email: "admin@knu.ac.kr",
            password: "admin",
        };
        (authService.signIn as jest.Mock).mockResolvedValueOnce(mockAuthResponse);

        render(<SignInPage />);

        const emailInput = screen.getByLabelText("아이디 (이메일)");
        const passwordInput = screen.getByLabelText("비밀번호");
        const loginButton = screen.getByTestId("btn-login");

        fireEvent.change(emailInput, { target: { value: mockLoginRequest.email } });
        fireEvent.change(passwordInput, { target: { value: mockLoginRequest.password } });
        fireEvent.click(loginButton);

        await waitFor(() => {
            expect(authService.signIn).toHaveBeenCalledWith(mockLoginRequest);
            const auth = JSON.parse(localStorage.getItem("auth") as string);
            expect(auth).not.toBeNull();
            expect(auth).toHaveProperty("state");
            expect(auth).toHaveProperty("version");
        });
    });

    test("로그인 실패시 access/refresh 토큰을 저장하지 않습니다 ", async () => {
        const mockLoginRequest = {
            email: "user@knu.ac.kr",
            password: "admin",
        };
        (authService.signIn as jest.Mock).mockResolvedValueOnce(mockAuthResponse);

        render(<SignInPage />);

        const emailInput = screen.getByLabelText("아이디 (이메일)");
        const passwordInput = screen.getByLabelText("비밀번호");
        const loginButton = screen.getByTestId("btn-login");

        fireEvent.change(emailInput, { target: { value: mockLoginRequest.email } });
        fireEvent.change(passwordInput, { target: { value: mockLoginRequest.password } });
        fireEvent.click(loginButton);

        await waitFor(() => {
            expect(authService.signIn).toHaveBeenCalledWith(mockLoginRequest);

            const auth = JSON.parse(localStorage.getItem("auth") as string);
            expect(auth).toBeNull();
        });
    });
});
