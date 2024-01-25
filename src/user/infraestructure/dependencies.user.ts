import { MySqlRepositoryUser } from "./DbRepository/mysql.repository.user";
import {
  DeleteUserByCorreoService,
  GetAllUsersService,
  GetUserByCorreoService,
  UpdateUserByCorreoService,
} from "../aplication/service";
import {
  DeleteUserByCorreoController,
  GetAllUsersController,
  GetUserByCorreoController,
  UpdateUserByCorreoController,
} from "./controllers";

const mysqlRepository = new MySqlRepositoryUser();

const deleteUserByCorreoService = new DeleteUserByCorreoService(mysqlRepository);
const getAllUsersService = new GetAllUsersService(mysqlRepository);
const getUserByCorreoService = new GetUserByCorreoService(mysqlRepository);
const updateUserByCorreoService = new UpdateUserByCorreoService(mysqlRepository);

export const deleteUserByCorreoController = new DeleteUserByCorreoController(
  deleteUserByCorreoService
);
export const getAllUsersController = new GetAllUsersController(
  getAllUsersService
);
export const getUserByCorreoController = new GetUserByCorreoController(
  getUserByCorreoService
);
export const updateUserByCorreoController = new UpdateUserByCorreoController(
  updateUserByCorreoService
);
