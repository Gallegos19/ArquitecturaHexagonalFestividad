import { User } from "../entities";

export interface UserRepository {
  getUsers(): Promise<User[]>;
  getUserByCorreo(correo: string): Promise<User>;
  createUser(user: User): Promise<User>;
  deleteUserByCorreo(correo: string): Promise<void>;
  updateUserByCorreo(correoKey: string, user: User): Promise<User>;
}
