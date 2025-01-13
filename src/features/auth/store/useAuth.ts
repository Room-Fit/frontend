import { produce } from "immer";
import { create } from "zustand";

import { persist, redux } from "zustand/middleware";

export enum AuthActionType {
    SET_ACCESS_TOKEN = "SET_ACCESS_TOKEN",
    SET_REFRESH_TOKEN = "SET_REFRESH_TOKEN",
}

export type AuthAction =
    | { type: AuthActionType.SET_ACCESS_TOKEN; payload: string }
    | { type: AuthActionType.SET_REFRESH_TOKEN; payload: string };

export interface AuthState {
    isAuthenticated: boolean;
    accessToken: string;
    refreshToken: string;
}

export const authInitialState: AuthState = {
    isAuthenticated: false,
    accessToken: "",
    refreshToken: "",
};

export const authReducer = (state: AuthState, action: AuthAction): AuthState => {
    switch (action.type) {
        case AuthActionType.SET_ACCESS_TOKEN:
            return produce(state, (draft) => {
                draft.isAuthenticated = true;
                draft.accessToken = action.payload;
            });

        case AuthActionType.SET_REFRESH_TOKEN:
            return produce(state, (draft) => {
                draft.refreshToken = action.payload;
            });

        default:
            return state;
    }
};

export const useAuth = create(
    persist(redux(authReducer, authInitialState), {
        name: "auth",
    }),
);
