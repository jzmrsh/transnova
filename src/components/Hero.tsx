import { Search } from "lucide-react";

const Hero = () => (
  <section
    id="início"
    className="relative flex flex-col items-center justify-center text-center pt-32 pb-20 md:pt-44 md:pb-32 px-4"
  >
    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] max-w-3xl opacity-0 animate-fade-up">
      Movendo Nova Serrana<br />
      <span className="text-primary">com inteligência.</span>
    </h1>

    <p className="mt-5 text-lg md:text-xl text-muted-foreground max-w-xl opacity-0 animate-fade-up" style={{ animationDelay: "0.15s" }}>
      Transporte público moderno, pontual e acessível para toda a cidade.
    </p>

    {/* Spotlight search */}
    <div
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
    </div>
  </section>
);

export default Hero;
