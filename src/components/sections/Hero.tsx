import Image from "next/image";
import ProfilePicture from "@/assets/images/profile-picture.png";
import { oswald } from "@/app/layout";

export function Hero() {
    return (
        <section className="min-h-dvh w-full relative bg-[url('/src/assets/images/hero-pic.jpg')] bg-cover bg-center bg-no-repeat bg-fixed">
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
                    <h1 className="text-4xl mb-2">Erwan Soulas</h1>
                    <p className="text-xl italic font-bold">Développeur web</p>
                </div>
            </div>
            <div></div>
        </section>
    );
}
