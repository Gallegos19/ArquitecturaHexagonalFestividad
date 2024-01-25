import { getFestividadDto } from "../../domain/dtos/getFestividad.dto";
import { FestividadResponse } from "../../domain/entities";
import { FestividadRepository } from "../../domain/repository/festividadRepository";

export class GetFestividadService {
  constructor(private readonly FestividadRepository: FestividadRepository) {}
  async run(): Promise<FestividadResponse[]> {
    try {
      const response = await this.FestividadRepository.getFestividad();
      if (response) {
        // Asegúrate de que response sea un array, si es un solo objeto, envuélvelo en un array.
        const festividadesArray = Array.isArray(response) ? response : [response];
        
        const formatedResponse = getFestividadDto(festividadesArray);
        return formatedResponse;
      }
      return response;
    } catch (err: any) {
      console.log(err);
      throw new Error(err);
    }
  }
}
