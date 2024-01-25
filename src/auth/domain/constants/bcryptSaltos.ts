import dotenv from "dotenv"
dotenv.config()

console.log(process.env.SALTOS)
export const BCRYPT_SALTOS = process.env.SALTO || 5;