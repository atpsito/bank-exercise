import dayjs from "dayjs";
import { z } from "zod";

const base = z.object({
  id: z
    .string({
      required_error: "Este campo es requerido",
    })
    .min(3, "ID no válido")
    .max(10, "ID no válido"),
  name: z
    .string({ required_error: "Este campo es requerido!" })
    .min(3, "Mínimo 3 caracteres")
    .max(200, "Máximo 200 caracteres"),
  description: z
    .string({ required_error: "Este campo es requerido!" })
    .min(10, "Mínimo 10 caracteres")
    .max(200, "Máximo 200 caracteres"),
  logo: z.string({ required_error: "Este campo es requerido!" }).url("URL no válida"),
  date_release: z.string({ required_error: "Este campo es requerido!" }).refine(
    (val) => {
      const date = dayjs(val, "DD/MM/YYYY");
      return date.isAfter(dayjs(), "day") || date.isSame(dayjs(), "day");
    },
    { message: "La fecha de lanzamiento debe ser hoy o en el futuro" }
  ),
  date_revision: z.string().refine(
    (val) => {
      const date = dayjs(val, "DD/MM/YYYY");
      return date.isValid();
    },
    { message: "Fecha es inválida" }
  ),
});

const validator = {
  base,
};

export default validator;
