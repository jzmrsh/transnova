import { useRef } from "react";
import { ChevronLeft, ChevronRight, Bell } from "lucide-react";

const news = [
  { title: "Novas linhas no feriado", date: "10 Fev 2026", tag: "Novidade" },
  { title: "Horário especial de Carnaval", date: "15 Fev 2026", tag: "Aviso" },
  { title: "Manutenção na Linha 03", date: "08 Fev 2026", tag: "Manutenção" },
  { title: "Passe livre para idosos", date: "01 Fev 2026", tag: "Benefício" },
  { title: "Novos pontos de parada", date: "28 Jan 2026", tag: "Novidade" },
];

const NewsCarousel = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: number) => {
    scrollRef.current?.scrollBy({ left: dir * 300, behavior: "smooth" });
  };

  return (
    <section className="py-20 md:py-28 px-4 bg-muted/40">
      <div className="container mx-auto">
        <div className="flex items-end justify-between mb-8">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-1 opacity-0 animate-fade-up">Avisos</h2>
            <p className="text-muted-foreground opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
              Fique por dentro das novidades
            </p>
          </div>
          <div className="hidden sm:flex gap-2">
            <button
              onClick={() => scroll(-1)}
              className="h-10 w-10 rounded-full border border-border flex items-center justify-center hover:bg-accent transition-colors"
              aria-label="Anterior"
            >
              <ChevronLeft size={18} />
            </button>
            <button
              onClick={() => scroll(1)}
              className="h-10 w-10 rounded-full border border-border flex items-center justify-center hover:bg-accent transition-colors"
              aria-label="Próximo"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto pb-2 snap-x snap-mandatory scrollbar-none"
          style={{ scrollbarWidth: "none" }}
        >
          {news.map((item, i) => (
            <div
              key={i}
              className="snap-start shrink-0 w-72 bg-card rounded-xl p-5 border border-border/50 shadow-sm hover:shadow-md transition-shadow opacity-0 animate-stagger-in"
              style={{ animationDelay: `${0.1 * i}s` }}
            >
              <div className="flex items-center gap-2 mb-3">
                <Bell size={14} className="text-primary" />
                <span className="text-xs font-semibold text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                  {item.tag}
                </span>
              </div>
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-xs text-muted-foreground">{item.date}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewsCarousel;
