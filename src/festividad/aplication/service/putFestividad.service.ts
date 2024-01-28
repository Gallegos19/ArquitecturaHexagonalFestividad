import { Festividad, FestividadResponse } from "../../domain/entities";
import { FestividadRepository } from "../../domain/repository/festividadRepository";
import { validatePartialFestividad } from "../../domain/validations/festividad.validations";

export class PutFestividadService {
  constructor(private readonly FestividadRepository: FestividadRepository) {}
  async run(Festividad: Festividad, idFestividad: number): Promise<FestividadResponse> {
    try {
      const resultValidation = validatePartialFestividad(Festividad);
      if (!resultValidation.success)
        throw new Error(resultValidation.error.message);
      const originalFestividad = await this.FestividadRepository.getFestividadById(idFestividad);
      if (!(Festividad.descripcion && Festividad.nombreFestividad && originalFestividad))
        throw new Error("Festividad no encontrada");
      return await this.FestividadRepository.updateFestividad(idFestividad, Festividad);
    } catch (err: any) {
      console.log(err);
      throw new Error(err);
    }
  }
}
