import { z } from "zod";

export const loginSchema = z.object({
  emailORName: z.string({ message: "email must be string" }).min(1, "email or username at least caracter 1 or more"),
  password: z.string({ message: "password must be string" }).min(4, "password at least 4 caracter or more"),
});

export type LoginSchema = z.infer<typeof loginSchema>;
