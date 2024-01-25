import { User, UserResponse } from "../entities";

export function getUserDto(user: User): UserResponse {
    return {
        correo : user.correo,
        contrasena : user.contrasena
    }
}
