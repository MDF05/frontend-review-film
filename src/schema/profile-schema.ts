import { z } from "zod";

export const profileSchema = z.object({
  email: z.string({ message: "email must be string" }).min(1, "email or username at least caracter 1 or more"),
  name: z.string({ message: "name must be string" }).min(1, "name or username at least caracter 1 or more"),
  gender: z.string(),
  image: z.optional(z.any()),
});

export type ProfileSchema = z.infer<typeof profileSchema>;
