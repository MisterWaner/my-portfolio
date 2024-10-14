export default function Nav({
    open,
    handleClick,
}: {
    open: boolean;
    handleClick: () => void;
}) {
    return (
        <nav
            className={`fixed z-30 right-0 top-24 w-2/4 h-full bg-slate-950/20 backdrop-blur border-l-slate-950 flex items-center ${
                open ? "translate-x-0" : "translate-x-full"
            } transition-all duration-300 ease-in-out`}
        >
            <ul
                className={` list-none w-full flex flex-col items-center justify-between`}
            >
                <li className="my-10 mx-0">
                    <a
                        className="w-full rounded-sm py-2 px-4 transition-all duration-300 ease-in-out text-slate-50 hover:bg-slate-50/20 hover:text-white hover:cursor-pointer"
                        href="/"
                        onClick={handleClick}
                    >
                        Accueil
                    </a>
                </li>
                <li className="my-10 mx-0">
                    <a
                        className="w-full rounded-sm py-2 px-4 transition-all duration-300 ease-in-out text-slate-50 hover:bg-slate-50/20 hover:text-white hover:cursor-pointer"
                        href="/#about"
                        onClick={handleClick}
                    >
                        À propos
                    </a>
                </li>
                <li className="my-10 mx-0">
                    <a
                        className="w-full rounded-sm py-2 px-4 transition-all duration-300 ease-in-out text-slate-50 hover:bg-slate-50/20 hover:text-white hover:cursor-pointer"
                        href="/#projects"
                        onClick={handleClick}
                    >
                        Mes Projets
                    </a>
                </li>
            </ul>
        </nav>
    );
}
