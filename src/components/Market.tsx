import { Armchair, Bus, BusFront } from "lucide-react";

const market = [
  {
    icon: BusFront,
    title: "Back Bus",
    button: (
      <a
        href="https://api.whatsapp.com/send?phone=553732261919&text=Tenho%20interesse%20na%20Publicidade%20*Back%20Bus*"
        target="_blank"
        className="md:inline-flex h-9 py-2 px-5 items-center rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:scale-105 transition-transform"
      >
        Consultar
      </a>
    ),
    desc: "Alto alcance e exposição diária, Publicidade em movimento, Fortalece a presença da sua marca e Excelente custo-benefício.",
  },
  {
    icon: Bus,
    title: "Back Side",
    button: (
      <a
        href="https://api.whatsapp.com/send?phone=553732261919&text=Tenho%20interesse%20na%20Publicidade%20*Back%20Side/*"
        target="_blank"
        className="md:inline-flex h-9 py-2 px-5 items-center rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:scale-105 transition-transform"
      >
        Consultar
      </a>
    ),
    desc: "Exposição constante e ampla, Público variado e de alta circulação, Excelente custo-benefício e Fortalecimento da imagem da sua marca.",
  },
  {
    icon: Armchair,
    title: "Back Seat",
    button: (
      <a
        href="https://api.whatsapp.com/send?phone=553732261919&text=Tenho%20interesse%20na%20Publicidade%20*Back%20Seat*"
        target="_blank"
        className="md:inline-flex h-9 py-2 px-5 items-center rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:scale-105 transition-transform"
      >
        Consultar
      </a>
    ),
    desc: "Divulgação constante durante as viagens, Público atento e diversificado e Grande visibilidade em todo trajeto.",
  },
];

const Market = () => (
  <section id="publicidade" className="py-20 md:py-28 px-4 bg-muted/40">
    <div className="container mx-auto">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-3 opacity-0 animate-fade-up">Publicidade</h2>
      <p className="text-center text-muted-foreground mb-12 opacity-0 animate-fade-up" style={{ animationDelay: "0.1s" }}>
        Transforme o trânsito em oportunidade!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {market.map((market, i) => (
          <div
            key={market.title}
            className="bg-card rounded-xl p-8 shadow-sm border border-border/50 text-center hover:shadow-lg transition-shadow opacity-0 animate-stagger-in"
            style={{ animationDelay: `${0.15 * i}s` }}
          >
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-5">
              <market.icon size={28} strokeWidth={1.5} />
            </div>
            <h3 className="text-lg font-semibold mb-1">{market.title}</h3>
            <p className="text-3xl font-bold text-primary mb-3">{market.button}</p>
            <p className="text-sm text-muted-foreground">{market.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Market;
