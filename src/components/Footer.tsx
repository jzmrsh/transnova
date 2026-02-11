import { Phone, Mail, MapPin, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/logo-transnova.png";

const Footer = () => (
  <footer id="contato" className="border-t border-border bg-card py-16 px-4">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
      {/* Brand */}
      <div>
        <img src={logo} alt="Transnova" className="h-7 mb-4" style={{ mixBlendMode: "luminosity" }} />
        <p className="text-sm text-muted-foreground leading-relaxed">
          Transporte público de qualidade para Nova Serrana e região. Pontualidade, conforto e acessibilidade.
        </p>
      </div>

      {/* Links */}
      <div>
        <h4 className="font-semibold mb-4 text-sm">Links Rápidos</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {["Início", "Linhas", "Tarifas", "Publicidade"].map((l) => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="hover:text-foreground transition-colors">
                {l}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact */}
      <div>
        <h4 className="font-semibold mb-4 text-sm">Contato</h4>
        <ul className="space-y-3 text-sm text-muted-foreground">
          <li className="flex items-center gap-2">
            <Phone size={14} />{" "}
            <a href="tel:+553732261919" target="_blank">
              (37) 3226-1919
            </a>
          </li>
          <li className="flex items-center gap-2">
            <Mail size={14} />{" "}
            <a href="mailto:contato@tnstransnova.com.br" target="_blank">
              contato@tnstransnova.com.br
            </a>
          </li>
          <li className="flex items-center gap-2">
            <MapPin size={14} />{" "}
            <a href="https://maps.app.goo.gl/fcEjqbs7ZFU5c9Tm7" target="_blank">
              Nova Serrana, MG
            </a>
          </li>
          <li className="flex items-center gap-2">
            <Instagram size={14} />{" "}
            <a href="https://instagram.com/transnovacoletivo" target="_blank">
              Instagram
            </a>
          </li>
          <li className="flex items-center gap-2">
            <Facebook size={14} />{" "}
            <a href="https://facebook.com/transnovacoletivo" target="_blank">
              Facebook
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div className="container mx-auto mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
      © 2026 Transnova. Todos os direitos reservados.
      <br />
      <span>
        Criado por{" "}
        <b>
          <a href="https://jzmrsh.com/?ref=ESOFT-PEX" target="_blank" rel="noopener noreferrer">
            JOZÜE
          </a>
        </b>
      </span>
    </div>
  </footer>
);

export default Footer;
