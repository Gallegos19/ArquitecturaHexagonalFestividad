import dotenv from "dotenv"
dotenv.config()

export const SECRET_KEY_JWT = process.env.JWT || '12345'