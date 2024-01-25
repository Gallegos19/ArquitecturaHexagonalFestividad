import bcrypt from "bcrypt"
import { BCRYPT_SALTOS } from "../../domain/constants/bcryptSaltos";



export const createContrasenaHash = (contrasena : string) => {
    return bcrypt.hashSync(contrasena, 5);
}
