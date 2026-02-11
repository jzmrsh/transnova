import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo-transnova.png";

const navItems = ["Início", "Linhas", "Tarifas", "Publicidade"];

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="container mx-auto flex items-center justify-between h-16 px-4 lg:px-8">
        <img src={logo} alt="Transnova" className="h-8 w-auto" />

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              {item}
            </a>
          ))}
        </nav>

        <a
          href="#contato"
          className="hidden md:inline-flex h-9 px-5 items-center rounded-full bg-primary text-primary-foreground text-sm font-semibold hover:scale-105 transition-transform"
        >
          Fale Conosco
        </a>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="md:hidden glass border-t border-border/50 px-4 pb-4 flex flex-col gap-3">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium py-2 text-foreground/80"
              onClick={() => setOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="#contato"
            className="inline-flex h-10 items-center justify-center rounded-full bg-primary text-primary-foreground text-sm font-semibold"
            onClick={() => setOpen(false)}
          >
            Fale Conosco
          </a>
        </nav>
      )}
    </header>
  );
};

export default Header;
