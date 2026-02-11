import { MapPin } from "lucide-react";

const points = [
  { name: "Terminal Central", x: "45%", y: "40%" },
  { name: "Rodoviária", x: "65%", y: "30%" },
  { name: "Distrito Industrial", x: "25%", y: "60%" },
  { name: "Centro", x: "50%", y: "50%" },
  { name: "Planalto", x: "70%", y: "65%" },
  { name: "Boa Vista", x: "35%", y: "25%" },
];

const RouteMap = () => (
  <section className="py-20 md:py-28 px-4">
    <div className="container mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 opacity-0 animate-fade-up">
        Mapa de Rotas
      </h2>
      <p className="text-center text-muted-foreground mb-12 opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
        Principais pontos atendidos em Nova Serrana
      </p>

      <div className="relative w-full aspect-[16/9] max-w-4xl mx-auto rounded-xl bg-muted/60 border border-border/50 shadow-xl overflow-hidden opacity-0 animate-fade-up" style={{ animationDelay: "0.2s" }}>
        {/* Grid lines */}
        <div className="absolute inset-0 opacity-[0.08]" style={{
          backgroundImage: "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }} />

        {/* Dot markers */}
        {points.map((p) => (
          <div
            key={p.name}
            className="absolute group"
            style={{ left: p.x, top: p.y, transform: "translate(-50%, -50%)" }}
          >
            <div className="relative flex flex-col items-center">
              <MapPin size={24} className="text-secondary drop-shadow-md" />
              <span className="mt-1 text-[10px] sm:text-xs font-medium bg-background/80 backdrop-blur px-1.5 py-0.5 rounded-md whitespace-nowrap shadow-sm">
                {p.name}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default RouteMap;
