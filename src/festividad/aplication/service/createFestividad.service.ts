import { Festividad, FestividadResponse } from "../../domain/entities";
import { FestividadRepository } from "../../domain/repository/festividadRepository";
import { validateFestividad } from "../../domain/validations/festividad.validations";

export class CreateFestividadService {
  constructor(private readonly FestividadRepository: FestividadRepository) {}
  async run(festividad: Festividad): Promise<FestividadResponse> {
    try {
      const resultValidation = validateFestividad(festividad);
      if (resultValidation.success) {
        const response = await this.FestividadRepository.createFestividad(
          resultValidation.data
        );
        return response;
      }
      //Se añade valor de validacion, por lo que no sera string
      throw new Error(resultValidation.error.message);
    } catch (err: any) {
      console.log(err);
      throw new Error(err);
    }
  }
}
