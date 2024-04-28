"use client";
import { Crittografare } from "@/app/lib/action";
import CryptoText from "@/app/ui/text/cryptoText";

export default function Home() {
    return (
        <div>
            <CryptoText Crittografare={Crittografare} />
        </div>
    );
}
