import { useContext } from "react";

import { produce } from "immer";

import { SignUpRequestContext } from "@/features/auth/context/SignUpRequestContext";
import { SignUpRequestBody } from "@/features/auth/service/signUp";

export enum SignUpRequestContextActionType {
    SET_BASIC_INFO = "SET_BASIC_INFO",
    SET_ADDITIONAL_INFO = "SET_ADDITIONAL_INFO",
}

export type SignUpRequestContextAction =
    | {
          type: SignUpRequestContextActionType.SET_BASIC_INFO;
          payload: { email: string; password: string };
      }
    | {
          type: SignUpRequestContextActionType.SET_ADDITIONAL_INFO;
          payload: { birth: string; studentId: string; department: string; gender: string };
      };

export const signUpContextReducer = (
    state: SignUpRequestBody,
    action: SignUpRequestContextAction,
): SignUpRequestBody => {
    switch (action.type) {
        case SignUpRequestContextActionType.SET_BASIC_INFO:
            return produce(state, (draft) => {
                draft.email = action.payload.email;
                draft.password = action.payload.password;
            });

        case SignUpRequestContextActionType.SET_ADDITIONAL_INFO:
            return produce(state, (draft) => {
                draft.birth = action.payload.birth;
                draft.studentId = action.payload.studentId;
                draft.department = action.payload.department;
                draft.gender = action.payload.gender;
            });

        default:
            return state;
    }
};

export const useSignUpContext = () => {
    const context = useContext(SignUpRequestContext);
    if (!context)
        throw new Error("useSignUpContext 는 SignUpRequestContext 내부에서 사용되어야 합니다.");
    return context;
};
