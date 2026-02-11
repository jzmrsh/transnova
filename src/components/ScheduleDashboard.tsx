import { Clock, MapPin } from "lucide-react";

const lines = [
  { id: "01", name: "Planalto", dest: "Terminal Central", mins: 5 },
  { id: "02", name: "São Geraldo", dest: "Rodoviária", mins: 12 },
  { id: "03", name: "Fátima", dest: "Centro", mins: 3 },
  { id: "04", name: "Boa Vista", dest: "Terminal Central", mins: 8 },
  { id: "05", name: "Industrial", dest: "Distrito Industrial", mins: 15 },
  { id: "06", name: "Santa Terezinha", dest: "Centro", mins: 6 },
];

const ScheduleDashboard = () => (
  <section id="linhas" className="py-20 md:py-28 px-4">
    <div className="container mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 opacity-0 animate-fade-up">
        Horários em tempo real
      </h2>
      <p className="text-center text-muted-foreground mb-12 opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
        Acompanhe a previsão de chegada dos ônibus
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {lines.map((line, i) => (
          <div
            key={line.id}
            className="glass-card rounded-xl p-5 hover:scale-[1.02] transition-transform opacity-0 animate-stagger-in"
            style={{ animationDelay: `${0.1 * i}s` }}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="inline-flex items-center gap-2 text-secondary font-bold text-lg">
                <span className="bg-secondary/10 rounded-lg px-2.5 py-0.5 text-sm">{line.id}</span>
                {line.name}
              </span>
              <span className="flex items-center gap-1 text-sm font-semibold text-primary">
                <Clock size={14} /> {line.mins} min
              </span>
            </div>
            <div className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin size={14} className="shrink-0" />
              {line.dest}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default ScheduleDashboard;
