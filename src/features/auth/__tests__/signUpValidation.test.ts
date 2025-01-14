import { ZodError } from "zod";

import { SignUpInfoSchema, SignUpVerifySchema } from "@/features/auth/service/signUp";
import { zodFailureCase, zodSuccessCase } from "@/shared/utils/zodSchemaTest";

describe("SignUpRequestSchema validation 테스트", () => {
    describe("이메일 필드 테스트", () => {
        const defaultField = {
            password: "qwer1234",
        };

        /**
         * @description 이메일 필드의 유효성 실패 케이스
         */
        test.each([[""], ["admin"]])("이메일: %s 유효성 검사", (email) => {
            const signUpRequest = { ...defaultField, email };

            const resultWithThrow = () => SignUpVerifySchema.parse(signUpRequest);

            zodFailureCase(resultWithThrow, ZodError, "올바른 이메일 형식이 아닙니다.");
        });

        /**
         * @description 이메일 필드의 유효성 성공 케이스
         */
        test.each([["test@knu.ac.kr"], ["user@example.com"]])("유효한 이메일: %s", (email) => {
            const signUpRequest = { ...defaultField, email };

            const result = SignUpVerifySchema.parse(signUpRequest);

            zodSuccessCase(result, signUpRequest);
        });
    });

    describe("비밀번호 필드 테스트", () => {
        const defaultField = {
            email: "test@knu.ac.kr",
        };

        /**
         * @description 비밀번호 필드의 유효성 실패 케이스
         */
        test.each([[""], ["qwer"], ["1234"], ["qwer1234"]])(
            "비밀번호: %s 유효성 검사",
            (password) => {
                const signUpRequest = { ...defaultField, password };

                const resultWithThrow = () => SignUpVerifySchema.parse(signUpRequest);

                zodFailureCase(resultWithThrow, ZodError, "비밀번호는 8자리 이상이어야 합니다.");
            },
        );

        /**
         * @description 비밀번호 필드의 유효성 성공 케이스
         */
        test.each([["qwer1234qwer"], ["qwer1234qwer1234!@"]])("유효한 비밀번호: %s", (password) => {
            const signUpRequest = { ...defaultField, password };

            const result = SignUpVerifySchema.parse(signUpRequest);

            zodSuccessCase(result, signUpRequest);
        });
    });

    describe("닉네임 필드 테스트", () => {
        const defaultField = {
            birth: "2021-01-01",
            studentId: "2021123456",
            department: "컴퓨터공학과",
            gender: "남자",
        };

        /**
         * @description 닉네임 필드의 유효성 실패 케이스
         */
        test.each([[""], ["a"]])("닉네임: %s 유효성 검사", (nickname) => {
            const signUpRequest = { ...defaultField, nickname };

            const resultWithThrow = () => SignUpInfoSchema.parse(signUpRequest);

            zodFailureCase(resultWithThrow, ZodError, "닉네임은 두자리 이상 이어야 합니다.");
        });

        /**
         * @description 닉네임 필드의 유효성 성공 케이스
         */
        test.each([["nickname"], ["nickname1234"]])("유효한 닉네임: %s", (nickname) => {
            const signUpRequest = { ...defaultField, nickname };

            const result = SignUpInfoSchema.parse(signUpRequest);

            zodSuccessCase(result, signUpRequest);
        });
    });

    describe("생년월일 필드 테스트", () => {
        const defaultField = {
            nickname: "nickname",
            studentId: "2021123456",
            department: "컴퓨터공학과",
            gender: "남자",
        };

        /**
         * @description 생년월일 필드의 유효성 성공 케이스
         */
        test.each([["2021-01-01"], ["2021-12-31"]])("유효한 생년월일: %s", (birth) => {
            const signUpRequest = { ...defaultField, birth };

            const result = SignUpInfoSchema.parse(signUpRequest);

            zodSuccessCase(result, signUpRequest);
        });
    });
});
