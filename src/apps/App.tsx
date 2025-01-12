import { Stack } from "./stackflow";
import "./styles/tailwind.css";
import { queryClient } from "@/shared/lib";
import { QueryClientProvider } from "@tanstack/react-query";

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <main className="w-full max-w-[500px] mx-auto h-screen border-[1px]">
                <Stack />
            </main>
        </QueryClientProvider>
    );
}
