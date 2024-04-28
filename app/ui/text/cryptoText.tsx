import { Texto } from "@/app/lib/definitions";
import { useState } from "react";

interface Props {
    Crittografare: () => Promise<Texto>;
}

export default function CryptoText({ Crittografare }: Props) {
    const [texto, setTexto] = useState<Texto>({
        original_texto: "",
        org_text_length: 0,
        encrypted_texto: "",
        encr_text_length: 0,
        decrypted_texto: "",
        decr_text_length: 0,
    });

    const handleEncryptClick = async () => {
        const data = await Crittografare();
        setTexto(data);
    };

    const generateWordDivs = (decrypted_text: string) => {
        return decrypted_text.split("").map((letter, index) => {
            return (
                <div key={index} className="letter">
                    <div className="letter-content">{letter}</div>
                </div>
            );
        });
    };

    return (
        <div>
            <button onClick={handleEncryptClick}>Encrypt Text</button>
            <div className="word-container">
                {generateWordDivs(texto.decrypted_texto)}
            </div>
        </div>
    );
}
