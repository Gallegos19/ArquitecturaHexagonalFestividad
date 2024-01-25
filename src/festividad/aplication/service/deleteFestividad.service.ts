import { FestividadRepository } from "../../domain/repository/festividadRepository";

export class DeleteFestividadService {
  constructor(private festividadRepository: FestividadRepository) {}
  async run(idFestividad: number) : Promise<boolean> {
    try {
      const findfestividad = await this.festividadRepository.getFestividadById(idFestividad);
      if (findfestividad) {
        await this.festividadRepository.deleteFestividad(idFestividad);
        return true;
      }
      return false;
    } catch (err: any) {
      console.log(err);
      throw new Error(err);
    }
  }
}
