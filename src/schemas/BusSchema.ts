import { z } from "zod";

export const BusScheduleSchema = z.object({
  time: z.string(),
  day: z.enum(["SEMANA", "SABADO", "DOMINGO"]),
  type: z.string(),
  note: z.string().optional(),
});

export type BusSchedule = z.infer<typeof BusScheduleSchema>;
