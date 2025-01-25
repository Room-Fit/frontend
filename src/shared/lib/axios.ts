import axios from "axios";

import { useAuth } from "@/features/auth/store/useAuth";

export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL as string;

export const api = axios.create({
    baseURL: API_BASE_URL,
    timeout: 10000,
});

api.interceptors.request.use((config) => {
    const { accessToken } = useAuth.getState();
    config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
});

api.interceptors.response.use((response) => {
    return response;
});
