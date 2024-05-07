import { z } from "zod";

const base = z.object({
  id: z.string().min(3).max(10),
  name: z.string().min(3).max(200),
  description: z.string().min(10).max(200),
  logo: z.string().url(),
  date_release: z.date().min(new Date()),
  date_revision: z.date(),
});

const validator = {
  base,
};

export default validator;
