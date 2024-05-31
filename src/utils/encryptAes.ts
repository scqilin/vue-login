/**
 * 前端密码加密工具
 */
import CryptoJS from 'crypto-js';

const secretKey = '1234567890abcdef'; // 密钥 不应该直接写在代码中
const iv = '1234567890abcdef'; // 初始向量 不应该直接写在代码中

/**
 * AES加密
 * @param {string} data 待加密的数据
 * @returns {string} 加密后的数据
 */
export function encryptAes(data: string): string {
    const encrypted = CryptoJS.AES.encrypt(data,
        CryptoJS.enc.Utf8.parse(secretKey),
        {
            iv: CryptoJS.enc.Utf8.parse(iv),
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
        }
    );
    return encrypted.toString();
}

/**
 * SHA-256加密
 * @param {string} data 待加密的数据
 * @returns {string} 加密后的数据
 */
export function SHA256(data: string): string {
    return CryptoJS.SHA256(data).toString();
}