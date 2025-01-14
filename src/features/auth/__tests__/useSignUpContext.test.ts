import {
    signUpContextReducer,
    SignUpRequestContextActionType,
} from "@/features/auth/hooks/useSignUpContext";
import { SignUpRequestBody } from "@/features/auth/service/signUp";

describe("useSignUpContext()", () => {
    const baseState: SignUpRequestBody = {
        email: "",
        password: "",
        nickname: "",
        birth: "",
        studentId: "",
        department: "",
        gender: "",
    };

    test("기본 정보 (이메일, 비밀번호) 상태가 업데이트 됩니다", () => {
        const payload = {
            email: "test@gmail.com",
            password: "test1234",
        };

        const updatedState = signUpContextReducer(baseState, {
            type: SignUpRequestContextActionType.SET_BASIC_INFO,
            payload,
        });

        expect(updatedState).toEqual({
            ...baseState,
            email: payload.email,
            password: payload.password,
        });
    });

    test("추가 정보 (생년월일, 학번, 단과대, 성별) 상태가 업데이트 됩니다", () => {
        const payload = {
            birth: "1998",
            studentId: "2018",
            department: "컴퓨터공학과",
            gender: "남자",
        };

        const updatedState = signUpContextReducer(baseState, {
            type: SignUpRequestContextActionType.SET_ADDITIONAL_INFO,
            payload,
        });

        expect(updatedState).toEqual({
            ...baseState,
            birth: payload.birth,
            studentId: payload.studentId,
            department: payload.department,
            gender: payload.gender,
        });
    });
});
