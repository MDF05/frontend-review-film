import { z } from "zod";

export const registerSchema = z.object({
  email: z.string({ message: "email must be string" }).min(1, "email or username at least 1 caracter  or more"),
  name: z.string({ message: "name must be string" }).min(1, "name or username at least 1 caracter or more"),
  password: z.string({ message: "password must be string" }).min(4, "password at least 4 caracter or more"),
  gender: z.enum(["man", "woman"], { message: "gender must be Man or Woman" }),
});

export type RegisterSchema = z.infer<typeof registerSchema>;
