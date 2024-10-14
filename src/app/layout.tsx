import type { Metadata } from "next";
import { Oswald, Roboto } from "next/font/google";
import Header from "@/components/Header/Header";
import "./globals.css";

const roboto = Roboto({
    weight: ["400", "500", "700"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-roboto",
});

const oswald = Oswald({
    weight: ["400", "500", "700"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-oswald",
});

export const metadata: Metadata = {
    title: "Mon Portfolio",
    description: "Je suis développeur web et voici mon portfolio",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="scroll-smooth">
            <body
                className={`${roboto.className} bg-gradient-to-br from-slate-950 to-indigo-950 h-screen bg-fixed text-white`}
            >
                <Header />
                {children}
            </body>
        </html>
    );
}

export { roboto, oswald };
