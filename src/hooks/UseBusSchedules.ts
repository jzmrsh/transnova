import { useQueries, useQuery } from "@tanstack/react-query";
import { fetchBusSchedules } from "@/services/BusService";
import { BUS_LINES } from "@/config/Lines";

export function useBusSchedules(lineId?: string) {
  if (lineId) {
    const line = BUS_LINES.find((l) => l.id === lineId);
    return useQuery({
      queryKey: ["id", lineId],
      queryFn: () => fetchBusSchedules(line?.gid || "0"),
      enabled: !!line,
      staleTime: 1000 * 60 * 5,
      retry: 2,
    });
  } else {
    return useQueries({
      queries: BUS_LINES.map((line) => ({
        queryKey: ["id", line.id],
        queryFn: () => fetchBusSchedules(line?.gid),
      })),
    });
  }
}
