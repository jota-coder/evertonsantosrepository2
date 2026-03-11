import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, X } from "lucide-react";

const faqs = [
  {
    q: "Nunca treinei antes. Posso começar?",
    a: "Claro! Nosso método é totalmente adaptado para iniciantes. Começamos com uma avaliação completa para entender seu corpo e criar um programa seguro e progressivo.",
  },
  {
    q: "Tenho dores nas articulações. Isso é um problema?",
    a: "Não é um impedimento — é justamente o motivo pelo qual você precisa de um acompanhamento especializado. Adaptamos cada exercício para proteger suas articulações e trabalhar no alívio das dores.",
  },
  {
    q: "Tenho mais de 70 anos. Ainda é possível treinar?",
    a: "Com certeza! Temos alunos de diversas idades, incluindo acima de 70 anos. O treino é personalizado e respeita as capacidades de cada pessoa.",
  },
  {
    q: "Tenho limitações físicas. Isso impede o treino?",
    a: "De forma alguma. Nosso diferencial é justamente adaptar os treinos às suas limitações, trabalhando com segurança para melhorar sua condição física gradualmente.",
  },
  {
    q: "Como funciona a aula experimental?",
    a: "Na aula experimental, conhecemos você, entendemos seu histórico de saúde e objetivos. É uma sessão sem compromisso para que você conheça nosso método e ambiente.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="bg-white-pure py-14 md:py-20 lg:py-28 px-4 md:px-4">
      <div className="container mx-auto max-w-3xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="font-display font-semibold text-foreground text-center mb-8 md:mb-14"
          style={{ fontSize: "var(--font-section-headline)", lineHeight: "var(--line-height-heading)" }}
        >
          Perguntas Frequentes
        </motion.h2>

        <div className="space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="border border-border rounded-xl overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
                  style={{ padding: "24px", minHeight: 48 }}
                >
                  <span className="font-body text-foreground pr-3"
                    style={{ fontSize: 20, fontWeight: 600 }}>{faq.q}</span>
                  <div className={`text-primary transition-transform duration-300 flex-shrink-0 min-w-[44px] min-h-[44px] flex items-center justify-center ${isOpen ? "rotate-45" : ""}`}>
                    {isOpen ? <X size={20} /> : <Plus size={20} />}
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div style={{ padding: "0 24px 24px 24px" }}>
                        <p className="font-body text-muted-foreground"
                          style={{ fontSize: 18, lineHeight: 1.75 }}>{faq.a}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
