import { User } from "../../../user/domain/entities";
import { UserRepository } from "../../../user/domain/repository/userRepository";
import { validateUser } from "../../../user/domain/validators/user.validator";
import { AuthResponse } from "../../domain/entities";
import { createContrasenaHash, createJwt } from "../utils";

export class RegisterAuthService {
  constructor(private readonly userRepository: UserRepository) {}
  async run(user: User): Promise<AuthResponse> {
    try {
      const resultValidation = validateUser(user);
      if (resultValidation.success) {
        const isUserCreated = await this.existingUser(resultValidation.data.correo);
        if (!isUserCreated) {
          console.log(resultValidation.data.contrasena)
          const password = createContrasenaHash(resultValidation.data.contrasena);
          console.log(password)
          const newUser = {
            ...resultValidation.data,
            password,
          };
          const responseUser : any = await this.userRepository.createUser(newUser);
          const jwt = createJwt(responseUser)
          const responseToke: AuthResponse = {
            token: jwt,
          };
          return responseToke;
        }
      }
      throw "Could not create"
    } catch (err: any) {
      console.log(err);
      throw new Error(err);
    }
  }

  private async existingUser(correo: string): Promise<boolean> {
    const existingUser = await this.userRepository.getUserByCorreo(correo);
    if (existingUser) return true;
    return false;
  }
}
