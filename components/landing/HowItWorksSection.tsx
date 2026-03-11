import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const steps = [
  {
    num: "1",
    title: "Aula Experimental",
    desc: "Conhecemos você, seu histórico de saúde e seus objetivos.",
    img: "/photos/1.jpg",
    alt: "Idosa sorrindo sentada no aparelho de musculação",
  },
  {
    num: "2",
    title: "Avaliação Inicial",
    desc: "Avaliação de mobilidade, força e limitações para entender o que precisa de mais atenção.",
    img: "/photos/2.jpg",
    alt: "Professor orientando exercício com resistência",
  },
  {
    num: "3",
    title: "Programa Adaptado",
    desc: "Treinos ajustados considerando necessidades, limitações e objetivos individuais.",
    img: "/photos/3.jpg",
    alt: "Professor medindo pressão da aluna",
  },
  {
    num: "4",
    title: "Acompanhamento Próximo",
    desc: "Monitoramento constante com tecnologia, ajustando exercícios sempre que necessário.",
    img: "/photos/4.jpg",
    alt: "Idosa treinando com elástico vermelho",
  },
];

const HowItWorksSection = () => {
  return (
    <section className="bg-dark py-14 md:py-20 lg:py-28 px-4 md:px-4">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-heading font-bold uppercase tracking-wider text-dark-foreground text-center mb-10 md:mb-14"
          style={{ fontSize: "var(--font-section-headline)" }}
        >
          Como Funciona o Atendimento
        </motion.h2>

        <div className="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative bg-[hsl(0_0%_15%)] rounded-2xl overflow-hidden flex flex-col min-h-[240px] md:min-h-[420px]"
            >
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-heading text-[7rem] md:text-[10rem] font-extrabold leading-none text-dark-foreground/[0.05] select-none pointer-events-none z-0">
                {step.num}
              </span>

              <div className="relative z-10 p-5 md:p-6 pb-2">
                <h3 className="font-heading font-bold text-dark-foreground mb-1.5"
                  style={{ fontSize: 22, fontWeight: 700 }}>
                  {step.title}
                </h3>
                <p className="font-body text-dark-foreground/70"
                  style={{ fontSize: 17, lineHeight: 1.65 }}>
                  {step.desc}
                </p>
              </div>

              <div className="relative z-10 flex-1 flex items-end justify-center">
                <img
                  src={step.img}
                  alt={step.alt}
                  className={`w-full h-[180px] md:h-[200px] lg:h-[220px] object-cover rounded-t-xl block ${i === 0 ? 'object-[center_70%]' : i === 1 ? 'object-center' : i === 3 ? 'object-[center_45%] scale-90' : 'object-top'}`}
                />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-14 px-1">
          <a href="https://wa.me/5561996940066?text=Olá%2C+gostaria+de+agendar+uma+aula+experimental!" target="_blank" rel="noopener noreferrer"
            className="inline-flex md:inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-heading font-bold uppercase tracking-wider rounded-full hover:brightness-110 transition-all w-full md:w-auto"
            style={{ fontSize: 17, minHeight: 54, padding: "16px 32px" }}>
            Agendar uma Aula Experimental
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
