import { BusSchedule } from "@/schemas/BusSchema";

export const getNextBus = (schedules: BusSchedule[]) => {
  if (!schedules) throw new Error("Falha ao procurar horarios futuros");

  const dateNow = new Date();
  const currentTime = dateNow.getHours() * 60 + dateNow.getMinutes();

  return schedules
    .filter((s) => {
      const [hours, minutes] = s.time.split(":").map(Number);
      return hours * 60 + minutes > currentTime;
    })
    .sort((a, b) => {
      const timeA = a.time
        .split(":")
        .map(Number)
        .reduce((h, m) => h * 60 + m);
      const timeB = b.time
        .split(":")
        .map(Number)
        .reduce((h, m) => h * 60 + m);
      return timeA - timeB;
    })[0]; // Retorna o primeiro (mais próximo)
};

export const getCurrentDayOfWeek = (): "SEMANA" | "SABADO" | "DOMINGO" => {
  const data = new Date();
  const dia = data.getDay(); // 0 = Domingo, 1 = Segunda, ..., 6 = Sábado

  if (dia === 0) return "DOMINGO";
  if (dia === 6) return "SABADO";

  // Para feriados, seria necessária uma integração com API de calendários.
  // Por padrão, dias de 1 a 5 retornam SEG_A_SEX.
  return "SEMANA";
};

export const calculateDifferenceInMinutes = (time: string): number | null => {
  const dateNow = new Date();
  const [hours, mins] = time.split(":").map(Number);

  const dateBus = new Date();
  dateBus.setHours(hours, mins, 0, 0);

  // Se o horário já passou hoje (ex: ônibus às 00:30 e agora são 23:00)
  if (dateBus.getTime() < dateNow.getTime()) {
    return null;
  }

  const difMs = dateBus.getTime() - dateNow.getTime();
  const timeInMins = Math.floor(difMs / (1000 * 60)); // Converte ms para minutos
  return timeInMins;
};
