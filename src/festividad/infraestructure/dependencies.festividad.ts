
import { MySQLRepositoryFestividad } from "./DbRepository/mysql.repositories";

import {
  GetFestividadService,
  GetFestividadByIdService,
  CreateFestividadService,
  DeleteFestividadService,
  PutFestividadService,
} from "../aplication/service";
import {
  CreateFestividadController,
  DeleteFestividadController,
  GetFestividadByIdController,
  GetFestividadController,
  PutFestividadController,
} from "./controllers";
   
//Se inyecta dependencia (base de datos)
const mysqlRepository = new MySQLRepositoryFestividad();

//se inyecta la base de datos a los servicios
const getFestividadService = new GetFestividadService(mysqlRepository);
const getFestividadByIdService = new GetFestividadByIdService(mysqlRepository);
const createFestividadService = new CreateFestividadService(mysqlRepository);
const deleteteFestividadService = new DeleteFestividadService(mysqlRepository);
const putFestividadService = new PutFestividadService(mysqlRepository);

//controlla a traves del servicio dado
export const getTasksController = new GetFestividadController(getFestividadService);
export const getTaskByIdController = new GetFestividadByIdController(
  getFestividadByIdService
);
export const createTaskController = new CreateFestividadController(createFestividadService);
export const deleteTaskController = new DeleteFestividadController(
  deleteteFestividadService
);
export const putTaskController = new PutFestividadController(putFestividadService)