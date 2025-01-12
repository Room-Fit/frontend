export namespace SignIn {
    export type ResponseBody = {
        accessToken: string;
        refreshToken: string;
    };
    export type RequestBody = {
        email: string;
        password: string;
    };
}
