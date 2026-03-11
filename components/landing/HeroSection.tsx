import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, ShieldCheck } from "lucide-react";
import heroWoman from "@/assets/hero-woman.png";

const useCountUp = (end: number, duration: number, trigger: boolean) => {
  const [count, setCount] = useState(1);
  useEffect(() => {
    if (!trigger) return;
    let start = 1;
    const startTime = performance.now();
    const step = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / (duration * 1000), 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(start + (end - start) * eased));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [trigger, end, duration]);
  return count;
};

const statWashStyle: React.CSSProperties = {
  background: "rgba(255, 255, 255, 0.4)",
  borderRadius: "12px",
  padding: "20px 24px"
};

const HeroSection = () => {
  const [hovered, setHovered] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { once: true, amount: 0.3 });

  const count25 = useCountUp(25, 1.8, inView);
  const count21 = useCountUp(21, 1.8, inView);

  return (
    <section id="inicio" className="relative bg-white pt-24 md:pt-32 pb-0 overflow-hidden">
      <div
        className="absolute left-1/2 bottom-0 -translate-x-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, hsla(158,30%,56%,0.25) 0%, transparent 70%)" }} />

      {/* Text content */}
      <div className="relative z-10 flex flex-col items-center text-center px-5 md:px-4">
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="font-display italic text-foreground mb-4"
          style={{ fontSize: 20 }}>
          Treinos especializados para 50+
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="font-display font-bold mb-3 md:mb-6"
          style={{ fontSize: "var(--font-hero-headline)", lineHeight: 1.05, color: "hsl(var(--foreground))" }}>
          Mais Autonomia.
          <br />
          Menos Dor.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="font-body max-w-[480px] mb-4 md:mb-5"
          style={{ fontSize: 20, lineHeight: 1.75, color: "hsl(var(--muted-foreground))" }}>
          Ganhe saúde e qualidade de vida com treinos adaptados e acompanhamento próximo e especializado.
        </motion.p>

        {/* Mobile stats */}
        <div className="md:hidden flex items-center justify-center gap-6 mb-4" ref={sectionRef}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="text-center">
            <p className="font-heading font-bold leading-none text-foreground" style={{ fontSize: 52 }}>
              +{count25}
            </p>
            <div className="mx-auto mt-1 mb-1" style={{ width: 20, height: 2, backgroundColor: "hsl(var(--primary))" }} />
            <p className="font-body text-muted-foreground" style={{ fontSize: 16 }}>Alunos Atendidos</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-center">
            <p className="font-heading font-bold leading-none text-foreground" style={{ fontSize: 52 }}>
              +{count21}
            </p>
            <div className="mx-auto mt-1 mb-1" style={{ width: 20, height: 2, backgroundColor: "hsl(var(--primary))" }} />
            <p className="font-body text-muted-foreground" style={{ fontSize: 16 }}>Anos de Experiência</p>
          </motion.div>
        </div>

        <motion.a
          href="https://wa.me/5561996940066?text=Olá%2C+gostaria+de+agendar+uma+aula+experimental!"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.45 }}
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="inline-flex items-center justify-center gap-2 font-heading font-bold uppercase tracking-wider rounded-full border-2 transition-all duration-300 w-full md:w-auto"
          style={{
            fontSize: 18,
            padding: "16px 40px",
            minHeight: 56,
            borderColor: "hsl(var(--primary))",
            backgroundColor: hovered ? "hsl(var(--primary))" : "transparent",
            color: hovered ? "hsl(var(--primary-foreground))" : "hsl(var(--foreground))"
          }}>
          Agendar uma Aula Experimental
          <ArrowRight size={18} />
        </motion.a>
      </div>

      {/* Desktop 3-column */}
      <div ref={sectionRef} className="relative z-10 mt-3 md:mt-6 max-w-6xl mx-auto px-5 md:px-4">
        <div className="hidden md:grid md:grid-cols-[1fr_auto_1fr] items-center gap-8">
          <div className="flex flex-col items-end justify-center gap-10">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
              className="text-right" style={statWashStyle}>
              <p className="font-heading font-bold leading-none" style={{ fontSize: 52, color: "hsl(var(--foreground))" }}>
                +{count25}
              </p>
              <div className="ml-auto mt-2 mb-2" style={{ width: 40, height: 2, backgroundColor: "hsl(var(--primary))" }} />
              <p className="font-body text-muted-foreground" style={{ fontSize: 16 }}>Alunos Atendidos</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
              className="text-right" style={statWashStyle}>
              <p className="font-heading font-bold leading-none" style={{ fontSize: 52, color: "hsl(var(--foreground))" }}>
                +{count21}
              </p>
              <div className="ml-auto mt-2 mb-2" style={{ width: 40, height: 2, backgroundColor: "hsl(var(--primary))" }} />
              <p className="font-body text-muted-foreground" style={{ fontSize: 16 }}>Anos de Experiência</p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="relative flex justify-center">
            <img src={heroWoman} alt="Mulher praticando exercício com halteres"
              className="object-contain" style={{ mixBlendMode: "multiply", height: 650, width: "auto" }} />
          </motion.div>

          <div className="flex flex-col items-start justify-center">
            {/* Badge hidden on desktop, visible on mobile only */}
          </div>
        </div>

        {/* Mobile layout */}
        <div className="md:hidden flex flex-col items-center">
          <motion.img
            src={heroWoman}
            alt="Mulher praticando exercício com halteres"
            initial={{ opacity: 0, scale: 0.97 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
            className="object-contain w-full max-w-[280px]"
            style={{ mixBlendMode: "multiply" }} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
