const links = [
    { name: "Accueil", href: "/" },
    { name: "À propos", href: "/#about" },
    { name: "Mes Projets", href: "/#projects" },
];

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
                {links.map((link, idx) => {
                    return (
                        <li className="my-10 mx-0" key={idx}>
                            <a
                                className="w-full rounded-sm py-2 px-4 transition-all duration-300 ease-in-out text-slate-50 hover:bg-slate-50/20 hover:text-white hover:cursor-pointer"
                                href={link.href}
                                onClick={handleClick}
                            >
                                {link.name}
                            </a>
                        </li>
                    );
                })}
            </ul>
        </nav>
    );
}
