import { useFlow } from "@/apps/stackflow";

export interface NavTopProps {
    children?: React.ReactNode;
}

export const NavTop = ({ children }: NavTopProps) => {
    const { replace } = useFlow();

    return (
        <nav className="z-50 bg-white sticky top-0 h-[60px] shadow-md flex flex-col justify-center px-4">
            <ul className="flex items-center justify-between">
                <li className="flex items-center gap-2" onClick={() => replace("HomePage", {})}>
                    <img src="/favicon.svg" alt="룸핏" />
                    <h1 className="text-lg font-bold">룸핏</h1>
                </li>

                <li>{children}</li>
            </ul>
        </nav>
    );
};
