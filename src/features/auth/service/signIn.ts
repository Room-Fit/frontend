export type SignInResponseBody = {
    accessToken: string;
    refreshToken: string;
};
export type SignInRequestBody = {
    email: string;
    password: string;
};
