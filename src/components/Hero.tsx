import { Search } from "lucide-react";

const Hero = () => (
  <section
    id="início"
    className="relative flex flex-col items-center justify-center text-center pt-32 pb-20 md:pt-44 md:pb-32 px-4"
    style={{
      background: 'url("public/hero.jpeg")',
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
    }}
  >
    <div className="absolute inset-0 bg-background/80"></div>
    <div className="absolute inset-0 bg-gradient-to-b from-[transparent] to-[white]"></div>
    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] max-w-3xl opacity-0 animate-fade-up">
      Movendo pessoas,
      <br />
      <span className="text-primary">conectando marcas</span>
    </h1>

    <p
      className="mt-5 text-lg md:text-xl text-muted-foreground max-w-xl opacity-0 animate-fade-up"
      style={{ animationDelay: "0.15s" }}
    >
      Transporte público moderno, pontual e acessível para toda Nova Serrana.
    </p>

    {/* Spotlight search */}
    {/* <div
      className="mt-10 w-full max-w-lg opacity-0 animate-fade-up"
      style={{ animationDelay: "0.3s" }}
    >
      <div className="glass-card flex items-center gap-3 rounded-full px-5 py-3.5 shadow-xl">
        <Search className="text-muted-foreground shrink-0" size={20} />
        <input
          type="text"
          placeholder="Para onde você quer ir?"
          className="flex-1 bg-transparent text-sm md:text-base outline-none placeholder:text-muted-foreground"
        />
      </div>
    </div> */}
  </section>
);

export default Hero;
