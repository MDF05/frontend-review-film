import { z } from "zod";

export const reviewSchema = z.object({
  images: z.optional(z.any()),
  tittle: z.string().min(1, "minimum 1 charackter"),
  release: z.string().min(4, "minimum 4 charackter, cth : 1999,2001").max(4, "maximum 4 charackter,cth : 1999,2001"),
  opinion: z.string().min(10, "minimum 10 charackter"),
});

export type ReviewSchema = z.infer<typeof reviewSchema>;
