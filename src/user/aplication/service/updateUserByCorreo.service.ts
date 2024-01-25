import { User, UserResponse } from "../../domain/entities";
import { UserRepository } from "../../domain/repository/userRepository";
import { validatePartialUser } from "../../domain/validators/user.validator";
import { createContrasenaHash } from "../../../auth/aplication/utils";

export class UpdateUserByCorreoService {
  constructor(private readonly userRepository: UserRepository) {}

  async run(user: User, correo: string): Promise<UserResponse> {
    const resultValidation = validatePartialUser(user);
    if (resultValidation.success) {
      const originalUser = await this.userRepository.getUserByCorreo(correo);
      if (!originalUser) throw new Error("Usuario no encontrado");
      const password = createContrasenaHash(user.contrasena);
      const newUser: User = {
        correo: user.correo,
        contrasena: password,
      };
      return await this.userRepository.updateUserByCorreo(correo, newUser);
    }
    throw new Error(resultValidation.error.message);
  }
}
