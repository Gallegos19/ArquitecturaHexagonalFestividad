import z from "zod";
import { Festividad } from "../entities";

const FestividadSchema = z.object({
  nombreFestividad: z.string({
    invalid_type_error: "nombreFestividad must be a string",
    required_error: "nombreFestividad is required",
  }),
  FechaInicio: z.date({
    invalid_type_error: "FechaInicio must be a Date",
    required_error: "FechaInicio is required",
  }),
  descripcion: z.string({
    invalid_type_error: "description must be a string",
    required_error: "description is required",
  }),
  FechaFin: z.date({
    invalid_type_error: "FechaFin must be a Date",
    required_error: "FechaFin is required",
  }),
});

export const validateFestividad = (festividad: Festividad) => {
  return FestividadSchema.safeParse(festividad);
};

export const validatePartialFestividad = (festividad: Festividad) => {
  return FestividadSchema.partial().safeParse(festividad);
};
