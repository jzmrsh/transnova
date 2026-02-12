import { Clock, MapPin } from "lucide-react";
import { BUS_LINES } from "@/config/Lines";
import { calculateDifferenceInMinutes, getCurrentDayOfWeek, getNextBus } from "@/services/TimeUtils";
import { useBusSchedules } from "@/hooks/UseBusSchedules";
import { BusSchedule } from "@/schemas/BusSchema";

const ScheduleDashboard = () => {
  const allSchedules = useBusSchedules();
  // console.log(allSchedules);
  const lines = BUS_LINES.map((line, index) => {
    // console.log(index, line);
    const schedules = allSchedules[index].data || [];

    const nextIda = getNextBus(schedules.filter((s: BusSchedule) => s.day === getCurrentDayOfWeek() && s.type === "IDA"));
    const nextVolta = getNextBus(schedules.filter((s: BusSchedule) => s.day === getCurrentDayOfWeek() && s.type === "VOLTA"));

    const getNextTimeString = (next: BusSchedule) => {
      if (next) {
        const timeInMins = calculateDifferenceInMinutes(next.time) + 1;
        if (timeInMins > 59) {
          const hours = Math.floor(timeInMins / 60);
          const mins = timeInMins % 60;

          return mins > 0 ? `${hours}h ${mins}min` : `${hours}h`;
        } else {
          return `${timeInMins}min`;
        }
      } else {
        return "";
      }
    };
    const result = {
      ...line,
      _ida: {
        ...nextIda,
        hourOrMins: getNextTimeString(nextIda),
      },
      _volta: {
        ...nextVolta,
        hourOrMins: getNextTimeString(nextVolta),
      },
    };
    // console.log(result);
    return result;
  });

  return (
    <section id="linhas" className="py-20 md:py-28 px-1">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 opacity-0 animate-fade-up">Horários em tempo real</h2>
        <p className="text-center text-muted-foreground mb-12 opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Acompanhe a previsão de chegada dos ônibus
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {lines.map((line, i) => (
            <a
              key={line.id}
              href={`./linhas/${line.id}.pdf`}
              target="_blank"
              className="glass-card rounded-xl p-5 hover:scale-[1.02] transition-transform opacity-0 animate-stagger-in"
              style={{ animationDelay: `${0.1 * i}s` }}
            >
              <div className="flex items-center justify-between mb-3">
                <span className="inline-flex items-center gap-2 text-secondary font-bold text-lg">
                  LINHA
                  <span className="bg-secondary/10 rounded-lg px-2.5 py-0.5 text-sm">{line.id}</span>
                </span>
                {/* <span className="flex items-center gap-1 text-sm font-semibold text-primary">
                  <Clock size={14} /> {line.mins} min
                </span> */}
              </div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin size={14} className="shrink-0" />
                  {line.go}
                </div>
                <span className="flex items-center gap-1 text-sm font-semibold text-primary">
                  <Clock size={14} /> {line._ida.hourOrMins}
                </span>
              </div>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin size={14} className="shrink-0" />
                  {line.to}
                </div>
                <span className="flex items-center gap-1 text-sm font-semibold text-primary">
                  <Clock size={14} /> {line._volta.hourOrMins}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ScheduleDashboard;
