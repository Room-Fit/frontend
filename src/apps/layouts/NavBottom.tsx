import { navBottom } from "@/apps/constants/nav";

export const NavBottom = () => {
    return (
        <nav className="w-full max-w-[500px] h-[70px] sticky bottom-0 z-30 bg-white shadow-2xl shadow-black">
            <ul className="flex justify-around w-full h-full gap-4 px-2 bg-white ">
                {navBottom.map((item, index) => {
                    return (
                        <li className="flex items-center h-full" key={index}>
                            <button className="flex flex-col items-center">
                                <item.icon size={25} />
                                <p className="text-sm">{item.label}</p>
                            </button>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
};
