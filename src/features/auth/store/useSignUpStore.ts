import { create } from "zustand";

import { SignUpRequestBody } from "@/features/auth/service/signUp";
import { devtools, redux } from "zustand/middleware";

export type SignUpStoreState = SignUpRequestBody;

export enum SignUpStoreActionType {
    SET_EMAIL = "SET_EMAIL",
    SET_PASSWORD = "SET_PASSWORD",
    SET_AUTH_TOKEN = "SET_AUTH_TOKEN",
    SET_NICKNAME = "SET_NICKNAME",
    SET_BIRTH = "SET_BIRTH",
    SET_STUDENT_ID = "SET_STUDENT_ID",
    SET_COLLEGE = "SET_COLLEGE",
    SET_GENDER = "SET_GENDER",
    COMPLETE = "COMPLETE",
}

export type SignUpStoreAction =
    | { type: SignUpStoreActionType.SET_EMAIL; payload: { email: string } }
    | { type: SignUpStoreActionType.SET_PASSWORD; payload: { password: string } }
    | { type: SignUpStoreActionType.SET_AUTH_TOKEN; payload: { authToken: string } }
    | { type: SignUpStoreActionType.SET_NICKNAME; payload: { nickname: string } }
    | { type: SignUpStoreActionType.SET_BIRTH; payload: { birth: string } }
    | { type: SignUpStoreActionType.SET_STUDENT_ID; payload: { studentId: number } }
    | { type: SignUpStoreActionType.SET_COLLEGE; payload: { college: string } }
    | { type: SignUpStoreActionType.SET_GENDER; payload: { gender: string } }
    | { type: SignUpStoreActionType.COMPLETE };

const initialState: SignUpStoreState = {
    email: "",
    password: "",
    authToken: "",
    nickname: "",
    birth: "",
    studentId: 0,
    college: "",
    gender: "",
};

export const signUpStoreReducer = (
    state: SignUpStoreState,
    action: SignUpStoreAction,
): SignUpStoreState => {
    switch (action.type) {
        case SignUpStoreActionType.SET_EMAIL:
            return { ...state, email: action.payload.email };
        case SignUpStoreActionType.SET_PASSWORD:
            return { ...state, password: action.payload.password };
        case SignUpStoreActionType.SET_AUTH_TOKEN:
            return { ...state, authToken: action.payload.authToken };
        case SignUpStoreActionType.SET_NICKNAME:
            return { ...state, nickname: action.payload.nickname };
        case SignUpStoreActionType.SET_BIRTH:
            return { ...state, birth: action.payload.birth };
        case SignUpStoreActionType.SET_STUDENT_ID:
            return { ...state, studentId: action.payload.studentId };
        case SignUpStoreActionType.SET_COLLEGE:
            return { ...state, college: action.payload.college };
        case SignUpStoreActionType.SET_GENDER:
            return { ...state, gender: action.payload.gender };
        case SignUpStoreActionType.COMPLETE:
            return initialState;
        default:
            return state;
    }
};

export const useSignUpStore = create(devtools(redux(signUpStoreReducer, initialState)));
