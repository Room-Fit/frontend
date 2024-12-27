import { Link } from "react-router-dom";

export const NavTop = () => {
    return (
        <nav className="h-[60px] w-full fixed top-0 px-6 bg-white z-10 shadow-md">
            <ul className="flex items-center w-full h-full gap-4">
                <li>
                    <Link to="/match" className="text-lg font-bold text-red-500">
                        룸메이트 찾기
                    </Link>
                </li>
                <li>
                    <Link to="/profile/me" className="text-lg font-bold text-slate-400">
                        내 프로필
                    </Link>
                </li>
            </ul>
        </nav>
    );
};
