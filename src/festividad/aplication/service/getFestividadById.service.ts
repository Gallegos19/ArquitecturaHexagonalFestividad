import { getFestividadByIdDto } from "../../domain/dtos/getFestividadById.dto";
import { FestividadRepository } from "../../domain/repository/festividadRepository";
import { FestividadResponse } from "../../domain/entities";

export class GetFestividadByIdService {
  constructor(private readonly FestividadRepository: FestividadRepository) {}
  async run(idFestividad: number): Promise<FestividadResponse> {
    try {
      const response = await this.FestividadRepository.getFestividadById(idFestividad);
      if (response) {
        console.log(response)
        const formatedResponse = getFestividadByIdDto(response);
        return formatedResponse;
      }
      return {} as FestividadResponse;
    } catch (err: any) {
      console.log(err);
      throw new Error(err);
    }
  }
}
