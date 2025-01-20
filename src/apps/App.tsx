import { Bounce, ToastContainer } from "react-toastify";

import { Stack } from "./stackflow";
import "./styles/tailwind.css";
import { ModalContextProvider } from "@/shared/components/Modal/ModalContextProvider";
import { queryClient } from "@/shared/lib";
import { QueryClientProvider } from "@tanstack/react-query";

export default function App() {
    return (
        <ModalContextProvider>
            <QueryClientProvider client={queryClient}>
                <ToastContainer
                    position="top-right"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="light"
                    transition={Bounce}
                />
                <main className="w-full max-w-[500px] mx-auto h-screen border-[1px]">
                    <Stack />
                </main>
            </QueryClientProvider>
        </ModalContextProvider>
    );
}
