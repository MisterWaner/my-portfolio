import Image from "next/image";
import ProfilePicture from "@/assets/images/profile-picture.png";
import { oswald } from "@/app/layout";

export default function Hero() {
    return (
        <section className="min-h-dvh w-full relative bg-hero bg-cover bg-center bg-no-repeat bg-fixed">
            <div className="w-full h-full flex flex-col items-center justify-center absolute">
                <div className="w-full flex justify-center items-center">
                    <Image
                        src={ProfilePicture}
                        alt="Profile picture"
                        width={450}
                        className="rounded-full"
                    />
                </div>
                <div
                    className={`${oswald.className} flex flex-col items-center justify-center mt-10`}
                >
                    <h1 className="text-5xl mb-2">Erwan Soulas</h1>
                    <p className="text-2xl italic font-bold">Développeur web</p>
                </div>
            </div>
            <div className="flex flex-col justify-start items-center w-full absolute bottom-4 animate-bounce">
                <a href="/#about" className="p-4 w-16">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 512 512"
                        fill="#f8fafc"
                        className="w-full cursor-pointer hover:fill-slate-400"
                    >
                        <path d="M256 0a256 256 0 1 0 0 512A256 256 0 1 0 256 0zM127 281c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l71 71L232 136c0-13.3 10.7-24 24-24s24 10.7 24 24l0 182.1 71-71c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9L273 393c-9.4 9.4-24.6 9.4-33.9 0L127 281z" />
                    </svg>
                </a>
            </div>
        </section>
    );
}
