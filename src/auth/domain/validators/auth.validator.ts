import z from "zod";
import { AuthRequest } from "../entities";

const authSchema = z.object({
  correo: z.string({
    invalid_type_error: "correo debe ser string",
    required_error: "correo es requerido",
  }),
  contrasena: z.string({
    invalid_type_error: "Contraseña debe ser string",
    required_error: "Contraseña es requerido",
  }),
});

export const validateAuth = (auth: AuthRequest) => {
  return authSchema.safeParse(auth);
};
