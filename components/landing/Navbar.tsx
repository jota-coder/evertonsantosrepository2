import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Instagram } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import logo from "@/assets/marca-horizontal.png";

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Método", href: "#metodo" },
  { label: "Profissionais", href: "#equipe" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "FAQ", href: "#faq" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white-pure shadow-sm border-b border-border" : "bg-transparent"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between py-3 px-3 md:py-4 md:px-4 lg:px-8">
          <a href="#inicio" className="px-2 md:px-4">
            <img
              src={logo}
              alt="Everton Santos Personal Trainer"
              className="h-10 md:h-[60px] w-auto object-contain"
            />
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-body text-foreground hover:text-primary transition-colors"
                style={{ fontSize: "var(--font-nav)", fontWeight: 500 }}
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://www.instagram.com/evertonspersonal"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Siga no Instagram"
              className="text-primary hover:opacity-70 transition-all min-w-[44px] min-h-[44px] flex items-center justify-center"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#contato"
              className="border border-primary text-primary font-heading font-bold uppercase tracking-wider px-5 py-2.5 rounded-full hover:bg-primary hover:text-primary-foreground transition-all"
              style={{ fontSize: "var(--font-button)", minHeight: 48 }}
            >
              Agendar Aula Experimental
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden min-w-[44px] min-h-[44px] flex items-center justify-center text-primary"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Menu"
          >
            {mobileOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-white-pure flex flex-col md:hidden"
          >
            <div className="flex items-center justify-between py-3 px-3">
              <a href="#inicio" onClick={() => setMobileOpen(false)} className="px-2">
                <img src={logo} alt="Logo" className="h-10 w-auto object-contain" />
              </a>
              <button
                className="min-w-[44px] min-h-[44px] flex items-center justify-center text-primary"
                onClick={() => setMobileOpen(false)}
                aria-label="Fechar menu"
              >
                <X size={28} />
              </button>
            </div>

            <div className="flex-1 flex flex-col items-center justify-center gap-8">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07, duration: 0.3 }}
                  className="font-body text-foreground hover:text-primary transition-colors"
                  style={{ fontSize: 24 }}
                >
                  {link.label}
                </motion.a>
              ))}
            </div>

            <div className="px-6 pb-8">
              <a
                href="#contato"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 w-full bg-primary text-primary-foreground font-heading font-bold uppercase tracking-wider py-4 rounded-full"
                style={{ fontSize: 17, minHeight: 54 }}
              >
                Agendar Aula Experimental
                <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
