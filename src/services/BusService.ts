import { BusSchedule, BusScheduleSchema } from "../schemas/BusSchema";

const SHEET_ID = "2PACX-1vSf__974uW96l1_QEDfmIxnduKiWWHKSQXTc5FjPagLv-ko5pEzzOaxMJCbbxCJo0yCbhOSY1T8ty6e";
const SHEET_URL = `https://docs.google.com/spreadsheets/d/e/${SHEET_ID}/pub?output=csv`;

export const fetchBusSchedules = async (gid: string): Promise<BusSchedule[]> => {
  const response = await fetch(`${SHEET_URL}&gid=${gid}`); // Adiciona o GID na URL
  if (!response.ok) throw new Error("Erro ao carregar");

  const csvText = await response.text();
  const lines = csvText.split("\n").slice(1);

  return lines
    .filter((line) => line.trim() !== "")
    .map((line) => {
      const [time, day, type, note] = line.split(",").map((s) => s.trim());

      // Validação com Zod para garantir integridade
      return BusScheduleSchema.parse({
        time,
        day,
        type,
        note,
      });
    });
};
