import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const FinalCTASection = () => {
  return (
    <section id="contato" className="relative bg-dark py-14 md:py-20 lg:py-28 overflow-hidden px-5 md:px-4">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-primary/15 blur-[150px] pointer-events-none" />

      <div className="container mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display font-semibold text-dark-foreground mb-6"
          style={{ fontSize: "clamp(38px, 7vw, 58px)", lineHeight: "var(--line-height-heading)" }}
        >
          O primeiro passo é simples.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="font-body text-dark-foreground/70 max-w-xl mx-auto mb-6 md:mb-10"
          style={{ fontSize: 19, lineHeight: 1.75 }}
        >
          Sem compromisso. Sem pressão. Apenas a oportunidade de experimentar um treino pensado para o seu corpo.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a href="https://wa.me/5561996940066?text=Olá%2C+gostaria+de+agendar+uma+aula+experimental!" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-heading font-bold uppercase tracking-wider rounded-full hover:brightness-110 transition-all shadow-lg shadow-primary/30 w-full md:w-auto"
            style={{ fontSize: 20, minHeight: 60, padding: "18px 48px" }}>
            Agendar uma Aula Experimental
            <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
