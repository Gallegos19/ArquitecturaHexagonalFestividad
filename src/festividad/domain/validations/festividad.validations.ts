import z from "zod";
import { Festividad } from "../entities";

const FestividadSchema = z.object({
  nombreFestividad: z.string({
    invalid_type_error: "nombreFestividad must be a string",
    required_error: "nombreFestividad is required",
  }),
  fechaInicio: z.coerce.date().nullable().default(null),
  descripcion: z.string({
    invalid_type_error: "description must be a string",
    required_error: "description is required",
  }),
  fechaFin: z.coerce.date().nullable().default(null),
});

export const validateFestividad = (festividad: Festividad) => {
  if (festividad.fechaInicio) {
    festividad.fechaInicio = new Date(festividad.fechaInicio);
  }
  if (festividad.fechaFin) {
    festividad.fechaFin = new Date(festividad.fechaFin);
  }

  return FestividadSchema.safeParse(festividad);
};

export const validatePartialFestividad = (festividad: Festividad) => {
  return FestividadSchema.partial().safeParse(festividad);
};
