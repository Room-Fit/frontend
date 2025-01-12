import { createRoot } from "react-dom/client";

import App from "@/apps/App.tsx";

import "@stackflow/plugin-basic-ui/index.css";

async function enableMocking() {
    if (process.env.NODE_ENV === "development" && import.meta.env.VITE_ENABLE_MSW) {
        const { worker } = await import("./__mocks__/browser.ts");
        return worker.start();
    }
    return;
}
enableMocking().then(() => {
    createRoot(document.getElementById("root")!).render(<App />);
});
