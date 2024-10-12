import type { Metadata } from "next";
import { JetBrains_Mono, Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
    weight: ["400", "500", "700"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-roboto",
});

const jetbrainsMono = JetBrains_Mono({
    weight: ["400", "500", "700", "800"],
    subsets: ["latin"],
    display: "swap",
    variable: "--font-jetbrains-mono",
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
        <html lang="en">
            <body className={`${roboto.className} bg-orange-900`}>{children}</body>
        </html>
    );
}

export { roboto, jetbrainsMono };
