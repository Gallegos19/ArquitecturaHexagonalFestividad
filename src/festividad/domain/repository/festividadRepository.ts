import { Festividad } from "../entities";

export interface FestividadRepository {
    getFestividad(): Promise<Festividad>;
    getFestividadById(idFestividad: number): Promise<Festividad>;
    createFestividad(Festividad: Festividad): Promise<Festividad>;
    deleteFestividad(idFestividad: number): Promise<void>;
    updateFestividad(idFestividad: number, Festividad: Festividad): Promise<Festividad>;
}