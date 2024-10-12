import { Button } from "@/components/ui/button";
import { jetbrainsMono } from "@/app/layout";

export default function Home() {
    return (
        <>
            <h1 className={`${jetbrainsMono.className} text-5xl font-bold`}>
                Mon Portfolio
            </h1>
            <Button>Mon bouton</Button>
        </>
    );
}
