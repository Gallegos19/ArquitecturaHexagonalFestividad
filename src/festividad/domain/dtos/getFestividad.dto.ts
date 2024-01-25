import { Festividad, FestividadResponse } from "../entities";
import { getFestividadByIdDto } from "./getFestividadById.dto";

export function getFestividadDto(festividades: Festividad[]): FestividadResponse[]{
    const formatoFestividad: FestividadResponse[] = [];

    festividades.forEach((festividad) => {
        formatoFestividad.push(getFestividadByIdDto(festividad));
    });
    return formatoFestividad;
} 