"use client";
import Image from "next/image";
import { MenuIcon, XIcon } from "lucide-react";
import { useState, useEffect } from "react";
import ProfilPic from "@/assets/images/profile-picture.png";
import { Button } from "@/components/ui/button";
import Nav from "@/components/Nav/Nav";

export default function Header() {
    const [visible, setVisible] = useState(false);
    const [open, setOpen] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 100) {
            setVisible(true);
        } else {
            setVisible(false);
        }
    };

    const handleClick = () => {
        setOpen(!open);
    };

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            <header
                className={`w-full ${
                    visible
                        ? "h-24 fixed z-30 top-0 left-0 bg-slate-950/20 backdrop-blur border-b-slate-950"
                        : "h-0 bg-transparent"
                } transition-all duration-500 ease-in-out`}
            >
                <div className="h-full w-full flex justify-between items-center">
                    <div className="w-1/6 h-fit ml-4 flex justify-center items-center">
                        <a href="/">
                            <Image
                                src={ProfilPic}
                                alt="Profil picture"
                                width={96}
                                className="rounded-full"
                            />
                        </a>
                    </div>
                    <Button
                        variant={"outline"}
                        className=" h-fit mr-4 bg-transparent border-none"
                        onClick={handleClick}
                    >
                        {open ? (
                            <XIcon className="w-6 h-6" />
                        ) : (
                            <MenuIcon className="w-6 h-6" />
                        )}
                        <span className="sr-only">Open menu</span>
                    </Button>
                </div>
            </header>
            <Nav open={open} handleClick={handleClick} />
        </>
    );
}
