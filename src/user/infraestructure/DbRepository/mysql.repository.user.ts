import { db } from "../../../shared/aplication/mysqlConnection";
import { User } from "../../domain/entities";
import { UserRepository } from "../../domain/repository/userRepository";

export class MySqlRepositoryUser implements UserRepository {
  getUserByCorreo(correo: string): Promise<User> {
    const query = "select * from usuario where correo = ?";
    return db.execute(query, [correo]).then((res: any) => {
      console.log(res[0])
      return res[0][0] as User;
    });
  }
  getUsers(): Promise<User[]> {
    const query = "select * from usuario";
    return db.execute(query).then((res: any) => res[0] as User[]);
  }
  createUser(user: User): Promise<User> {
    const { correo, contrasena } = user;
    const query =
      "insert into usuario (correo, contrasena) values (?,?)";
    return db
      .execute(query, [correo, contrasena])
      .then((res: any) => res.values as User);
  }
  deleteUserByCorreo(correo: string): Promise<void> {
    const query = "delete from usuario where correo = ?";
    return db.execute(query, [correo]).then((res: any) => res[0] as void);
  }
  updateUserByCorreo(correoKey: string, user: User): Promise<User> {
    const { correo,contrasena } = user;
    const query =
      "update usuario set correo = ?, contrasena = ? = ? where correo = ?";
    return db
      .execute(query, [correo, contrasena, correoKey])
      .then((res: any) => res[0] as User);
  }
}
