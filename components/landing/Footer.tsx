import { Instagram, MessageCircle } from "lucide-react";
import logo from "@/assets/marca-horizontal.png";

const footerLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Método", href: "#metodo" },
  { label: "Profissionais", href: "#equipe" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
];

const Footer = () => {
  return (
    <footer className="bg-white-pure border-t border-border py-8 md:py-10 px-5 md:px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <a href="#inicio" className="md:px-4">
          <img src={logo} alt="Everton Santos Personal Trainer"
            className="h-10 md:h-[54px] w-auto object-contain" />
        </a>

        <div className="grid grid-cols-2 md:flex md:flex-wrap items-center justify-center gap-x-8 gap-y-3 md:gap-5">
          {footerLinks.map((link) => (
            <a key={link.href} href={link.href}
              className="font-body text-muted-foreground hover:text-primary transition-colors text-center min-h-[44px] flex items-center justify-center"
              style={{ fontSize: 16 }}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-6 md:gap-4">
          <a href="https://www.instagram.com/evertonspersonal" target="_blank" rel="noopener noreferrer" aria-label="Siga no Instagram" className="text-primary hover:opacity-70 transition-all min-w-[44px] min-h-[44px] flex items-center justify-center">
            <Instagram size={24} />
          </a>
          <a href="https://wa.me/5561996940066?text=Olá%2C+gostaria+de+agendar+uma+aula+experimental!" target="_blank" rel="noopener noreferrer" className="text-primary hover:brightness-110 transition-all min-w-[44px] min-h-[44px] flex items-center justify-center" aria-label="WhatsApp">
            <MessageCircle size={22} />
          </a>
        </div>
      </div>

      <div className="container mx-auto mt-6 pt-6 border-t border-border">
        <p className="font-body text-muted-foreground text-center" style={{ fontSize: 15 }}>
          © 2025 Studio Everton Santos Personal Trainer
        </p>
      </div>
    </footer>
  );
};

export default Footer;
