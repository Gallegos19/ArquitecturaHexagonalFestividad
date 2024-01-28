import { db } from "../../../shared/aplication/mysqlConnection";
import { getFestividadDto } from "../../domain/dtos/getFestividad.dto";
import { Festividad } from "../../domain/entities";
import { FestividadRepository } from "../../domain/repository/festividadRepository";

export class MySQLRepositoryFestividad implements FestividadRepository {
    // getFestividad(): Promise<Festividad>;
  getFestividad(): Promise<Festividad> {
    const query = "SELECT * FROM festividad";
    return db.execute(query).then((res: any) => {
      return res[0] as Festividad;
    });
  }

  getFestividadById(idFestividad: number): Promise<Festividad> {
    const query = "SELECT * FROM festividad where idFestividad = ?";
    return db
      .execute(query, [idFestividad])
      .then((res: any) => {
        console.log(res);
        return res[0][0] as Festividad;
      })
      .catch((err: any) => {
        throw new Error(err);
      });
  }
  createFestividad(Festividad: Festividad): Promise<Festividad> {
    const { nombreFestividad,fechaInicio,descripcion,fechaFin} = Festividad;
    const query = `insert into festividad (nombreFestividad, fechaInicio, descripcion, fechaFin) values (?,?,?,?)`;
    return db
      .execute(query, [nombreFestividad,fechaInicio,descripcion,fechaFin])
      .then(() => {
        return Festividad;
      })
      .catch((err: any) => {
        throw new Error(err);
      });
  }
  deleteFestividad(idFestividad: number): Promise<void> {
    const query = `delete from festividad where idFestividad =?`;
    return db.execute(query, [idFestividad])
    .then((res:any) => res[0] as void);
  }
  updateFestividad(idFestividad: number, Festividad: Festividad): Promise<Festividad> {
    const {nombreFestividad, fechaInicio, descripcion,fechaFin} =Festividad; 
    const query = `update festividad set nombreFestividad = ?, fechaInicio = ?, descripcion = ?, fechaFin = ? where idFestividad = ?`;
    return db.execute(query, [nombreFestividad,fechaInicio, descripcion, fechaFin, idFestividad])
    .then((res: any) => res[0] as Festividad)
}
}


