import { UserRepository } from "../../domain/repository/userRepository";

export class DeleteUserByCorreoService {
  constructor(private readonly userRepository: UserRepository) {}
  async run(correo : string): Promise<boolean> {
    try {
      const user = await this.userRepository.getUserByCorreo(correo);
      if (user) {
        await this.userRepository.deleteUserByCorreo(correo);
        return true;
      }
      return false;
    } catch (err: any) {
      console.log(err);
      throw new Error(err);
    }
  }
}
