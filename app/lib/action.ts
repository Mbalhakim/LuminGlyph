import { Texto } from '@/app/lib/definitions';
import { AES, enc  } from 'crypto-js';

export async function Crittografare(): Promise<Texto> {

    let original_texto: string = 'Stop trying to control everything and just let go. Let go!';
    let  org_text_length:number  = original_texto.length;

    let encrypted_texto: string;
    let encr_text_length:number;

    let decrypted_texto: string;
    let decr_text_length:number ;

    encrypted_texto = encryptTexto(original_texto);
    encr_text_length = encrypted_texto.length;


    decrypted_texto = decryptTexto(encrypted_texto);
    decr_text_length = decrypted_texto.length;

    console.log(original_texto, ' ', org_text_length);
    console.log(encrypted_texto, ' ', encr_text_length);
    console.log(decrypted_texto , ' ',decr_text_length );

    return {
        decr_text_length,
        decrypted_texto,
        encr_text_length,
        encrypted_texto,
        org_text_length,
        original_texto
    };
}

export function encryptTexto(original_texto: string): string {
    return AES.encrypt(original_texto, 'so').toString();
}

export function decryptTexto(encrypted_texto: string): string {
    return AES.decrypt(encrypted_texto, 'so').toString(enc.Utf8);
}
