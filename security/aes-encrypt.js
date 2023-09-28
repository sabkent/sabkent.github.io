//Web Crypto API
let config = {
    name: 'AES-GCM',
    length: 128
};

let keyUsages = ['encrypt', 'decrypt'];

let key = await crypto.subtle.generateKey(config, false, keyUsages);

let iv = new Uint8Array(12);

await crypto.getRandomValues(iv);

let te = new TextEncoder();
let ad = te.encode("some associated data");
let plaintext = te.encode("hello world");

let param = {
    name: 'AES-GCM',
    iv: iv,
    additionalData: ad
};

let cipherText = await crypto.subtle.encrypt(param, key, plaintext);

let result = await crypto.subtle.decrypt(param, key, cipherText);

new TextDecoder("utf-8").decode(result);