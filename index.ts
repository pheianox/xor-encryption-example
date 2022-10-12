const MESSAGE = "Salam, necəsüz?"
const KEY = "123"

log("➡️ Encryption ➡️")
const encryptedMessage = encrypt(MESSAGE, KEY)
log(`✉️ ${MESSAGE} → 🗝️${KEY} → ${encryptedMessage}`)


log("➡️ Decryption ➡️")
const customKeys = [KEY, "1", "12","1234", "ok"]
const randomKeys = Array(7).fill(0).map(() => random(1_000_000_000_000_000, 9_000_000_000_000_000).toString(16))
const allKeys = [...customKeys, ...randomKeys]
log(resutls(encryptedMessage, allKeys))

function resutls(messageEncrypted: string, keys: string[]) {
    let results = {}

    for (const key of allKeys) {
        const messageDecrypted = decrypt(messageEncrypted, key)
        // @ts-ignore
        results[`🗝️${key}`] = messageDecrypted
    }

    return results
}

function encrypt(textMessage: string, secretKey: string) {
    return xor(textMessage, secretKey)
}

function decrypt(encryptedMessage: string, secretKey: string) {
    return xor(encryptedMessage, secretKey)
}

function random(min: number, max: number) {
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function xor(a: string, b: string) {
    let result = '';
    for (let i = 0, l = a.length; i < l; i++) {
        result += String.fromCharCode(
            a.charCodeAt(i) ^ b.charCodeAt(i % b.length)
        );
    }
    return result;
}
 
function log(message: any) {
    console.log(message)
}
