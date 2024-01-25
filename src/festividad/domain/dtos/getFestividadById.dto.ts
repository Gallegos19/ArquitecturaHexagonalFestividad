import { Festividad, FestividadResponse } from "../entities";

export function getFestividadByIdDto(festividad: Festividad): FestividadResponse {
    return {
        nombreFestividad:festividad.nombreFestividad || '',
        descripcion: festividad.descripcion || '',
    }
}