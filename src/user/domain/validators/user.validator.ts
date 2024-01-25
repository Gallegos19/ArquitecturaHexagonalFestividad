import z from "zod";
import { User } from "../entities";

const userSchema = z.object({
  correo: z.string({
    invalid_type_error: "email must be a string",
    required_error: "email is required",
  }),
  contrasena: z.string({
    invalid_type_error: "password must be a string",
    required_error: "password is required",
  }),
});

export const validateUser = (user: User) => {
  return userSchema.safeParse(user);
};

export const validatePartialUser = (user: User) => {
  return userSchema.partial().safeParse(user);
};
