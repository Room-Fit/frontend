import path from "path";
import { defineConfig } from "vite";
import { compression } from "vite-plugin-compression2"
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
    resolve: {
        alias: { "@": path.resolve(__dirname, "./src") },
    },
    plugins: [react(), compression({
        algorithm: "brotliCompress",
    })],
    define: {
        global: "window",
    },
});
