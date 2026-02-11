import { Ticket, GraduationCap, ArrowLeftRight } from "lucide-react";

const fares = [
  {
    icon: Ticket,
    title: "Passagem Comum",
    price: "R$ 4,50",
    desc: "Tarifa válida para qualquer linha do sistema municipal.",
  },
  {
    icon: GraduationCap,
    title: "Estudante",
    price: "R$ 2,25",
    desc: "Meia-tarifa com carteirinha estudantil válida.",
  },
  {
    icon: ArrowLeftRight,
    title: "Vale Transporte",
    price: (
      <a
        href="http://191.242.202.32:8024/wbc-st5/login.faces"
        target="_blank"
        className="md:inline-flex h-9 px-5 items-center rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:scale-105 transition-transform"
      >
        Consultar
      </a>
    ),
    desc: "Deslocamento residência-trabalho, garantindo segurança e agilidade.",
  },
];

const Fares = () => (
  <section id="tarifas" className="py-20 md:py-28 px-4 bg-muted/40">
    <div className="container mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 opacity-0 animate-fade-up">Tarifas</h2>
      <p className="text-center text-muted-foreground mb-12 opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
        Valores atualizados para 2026
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {fares.map((fare, i) => (
          <div
            key={fare.title}
            className="bg-card rounded-xl p-8 shadow-sm border border-border/50 text-center hover:shadow-lg transition-shadow opacity-0 animate-stagger-in"
            style={{ animationDelay: `${0.15 * i}s` }}
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-5">
              <fare.icon size={28} strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-semibold mb-1">{fare.title}</h3>
            <p className="text-3xl font-bold text-primary mb-3">{fare.price}</p>
            <p className="text-sm text-muted-foreground">{fare.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Fares;
