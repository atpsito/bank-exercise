import { z } from "zod";

import v from "@/validations/products.validator";

const { base } = v;

export type Product = z.infer<typeof base>;
