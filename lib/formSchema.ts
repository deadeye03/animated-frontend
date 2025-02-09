import { z } from "zod";



export const contactSchema = z.object({
  name:z.string().min(1, "Name is required"),
  email: z.string().email("Invalid email address"),
  city: z.string().min(1, "City is required"),
  profession:z.string().min(1, "Profession is required"),
});

