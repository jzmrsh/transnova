import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo-transnova.png";

const Footer = () => (
  <footer id="contato" className="border-t border-border bg-card py-16 px-4">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
      {/* Brand */}
      <div>
        <img src={logo} alt="Transnova" className="h-7 mb-4" />
        <p className="text-sm text-muted-foreground leading-relaxed">
          Transporte público de qualidade para Nova Serrana e região. Pontualidade, conforto e acessibilidade.
        </p>
      </div>

      {/* Links */}
      <div>
        <h4 className="font-semibold mb-4 text-sm">Links Rápidos</h4>
        <ul className="space-y-2 text-sm text-muted-foreground">
          {["Início", "Linhas", "Tarifas", "Empresa"].map((l) => (
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
            <Phone size={14} /> (37) 3226-0000
          </li>
          <li className="flex items-center gap-2">
            <Mail size={14} /> contato@transnova.com.br
          </li>
          <li className="flex items-center gap-2">
            <MapPin size={14} /> Nova Serrana, MG
          </li>
        </ul>
      </div>
    </div>

    <div className="container mx-auto mt-10 pt-6 border-t border-border text-center text-xs text-muted-foreground">
      © 2026 Transnova. Todos os direitos reservados.
    </div>
  </footer>
);

export default Footer;
