import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const fadeScale = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: (i: number) => ({
    opacity: 1,
    scale: 1,
    transition: { delay: i * 0.12, duration: 0.5 }
  })
};

const methodCards = [
  {
    title: "Manter Autonomia e Independência",
    description: "Fortalecimento muscular para preservar a capacidade de realizar atividades do dia a dia com segurança - como levantar, caminhar, subir escadas e se movimentar com confiança, mantendo independência e qualidade de vida.",
    img: "/photos/method-1.jpg"
  },
  {
    title: "Redução de Dores",
    description: "Dores constantes nas costas, joelhos ou ombros acabam limitando movimentos simples e tirando o prazer de atividades do dia a dia. Com exercícios de adaptados, o corpo volta a se mover com mais equilíbrio e suporte, reduzindo sobrecargas no corpo. O resultado é menos dor e mais conforto.",
    img: "/photos/method-2.jpg"
  },
  {
    title: "Menos Risco de Queda ou Outros Acidentes",
    description: "Cerca de 1 em cada 3 pessoas idosas sofrem pelo menos uma queda por ano. Por isso, o treinamento para essa fase da vida deve incluir fortalecimento voltado para a melhora do equilíbrio e da estabilidade das articulações. O resultado é mais confiança ao caminhar, subir escadas ou se movimentar no dia a dia.",
    img: "/photos/method-3.jpg"
  },
  {
    title: "Treinamento Sem Risco de Lesões",
    description: "O treinamento para a terceira idade deve priorizar progressão controlada, técnica correta e exercícios adaptados à capacidade de cada pessoa. Esse cuidado reduz o risco de sobrecargas e lesões, permitindo que o aluno treine com segurança, consistência e confiança, sem medo de se machucar.",
    img: "/photos/method-4.jpg"
  }
];

const MethodSection = () => {
  return (
    <section id="metodo" className="bg-white-pure py-14 md:py-20 lg:py-28 px-5 md:px-4 overflow-x-hidden">
      <div className="container mx-auto">
        {/* Mobile layout */}
        <div className="md:hidden flex flex-col items-center gap-4" style={{ padding: "0" }}>
          <motion.span
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-heading text-primary uppercase font-semibold"
            style={{ fontSize: 14, letterSpacing: "2px" }}>
            O MÉTODO
          </motion.span>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-display font-bold text-center"
            style={{ fontSize: "clamp(32px, 8vw, 44px)", lineHeight: 1.15, color: "#1C1C1E" }}>
            Existe uma forma diferente de treinar depois dos 50.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-body text-center w-full"
            style={{ fontSize: 17, color: "#6B6B6C", lineHeight: 1.75 }}>
            Depois de certa idade, o objetivo principal do treino muda.
            O foco deixa de ser estética ou performance.
            E passa a ser algo muito mais valioso:
          </motion.p>

          {/* 4 method cards */}
          <div className="flex flex-col w-full gap-4 mt-2">
            {methodCards.map((card, i) => (
              <motion.div key={card.title} variants={fadeScale} initial="hidden" whileInView="visible" viewport={{ once: true }}
                custom={i}
                className="w-full overflow-hidden"
                style={{
                  background: "#FFFFFF",
                  borderRadius: "16px",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.07)"
                }}>
                {card.img ? (
                  <img src={card.img} alt={card.title}
                    className="w-full object-cover object-top rounded-t-2xl"
                    style={{ height: "160px" }} />
                ) : (
                  <div className="w-full flex items-center justify-center"
                    style={{ height: "160px", background: "#E8F4F1" }}>
                    <span className="font-body" style={{ fontSize: 15, color: "#6B6B6C" }}>
                      [Foto {card.title}]
                    </span>
                  </div>
                )}
                <div style={{ padding: "18px 16px" }}>
                  <p className="font-heading font-bold" style={{ fontSize: 19, color: "#1C1C1E" }}>
                    {card.title}
                  </p>
                  <p className="font-body mt-1" style={{ fontSize: 16, color: "#6B6B6C", lineHeight: 1.6 }}>
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-body italic text-center"
            style={{ fontSize: 17, color: "#6B6B6C", padding: "0 8px" }}>
            Foi exatamente a partir disso que nasceu o método aplicado no Studio Everton Santos.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full mt-2 px-2">
            <a href="https://wa.me/5561996940066?text=Olá%2C+gostaria+de+agendar+uma+aula+experimental!" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-heading font-bold uppercase tracking-wider rounded-full hover:brightness-110 transition-all shadow-lg shadow-primary/20 w-full"
              style={{ fontSize: 17, minHeight: 54, padding: "16px 24px" }}>
              Agendar uma Aula Experimental →
            </a>
          </motion.div>
        </div>

        {/* Desktop layout — centered card grid matching mobile */}
        <div className="hidden md:flex flex-col items-center">
          <motion.span
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-heading text-primary uppercase font-semibold block text-center mb-4"
            style={{ fontSize: 14, letterSpacing: "2px" }}>
            O MÉTODO
          </motion.span>

          <motion.h2
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-display font-bold text-center mb-4"
            style={{ fontSize: "var(--font-section-headline)", lineHeight: "var(--line-height-heading)", color: "#1C1C1E", maxWidth: 640, margin: "0 auto" }}>
            Existe uma forma diferente de treinar depois dos 50.
          </motion.h2>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-body text-center mb-8"
            style={{ fontSize: 18, color: "#6B6B6C", lineHeight: 1.75, maxWidth: 640, margin: "0 auto" }}>
            Depois de certa idade, o objetivo principal do treino muda.
            O foco deixa de ser estética ou performance.
            E passa a ser algo muito mais valioso:
          </motion.p>

          {/* 2x2 card grid */}
          <div className="grid grid-cols-2 gap-5 w-full" style={{ maxWidth: 860, margin: "0 auto" }}>
            {methodCards.map((card, i) => (
              <motion.div key={card.title} variants={fadeScale} initial="hidden" whileInView="visible" viewport={{ once: true }}
                custom={i}
                className="w-full overflow-hidden"
                style={{
                  background: "#FFFFFF",
                  borderRadius: "16px",
                  boxShadow: "0 2px 16px rgba(0,0,0,0.07)"
                }}>
                <img src={card.img} alt={card.title}
                  className="w-full object-cover object-center"
                  style={{ height: 200 }} />
                <div style={{ padding: "20px 18px" }}>
                  <p className="font-heading font-bold" style={{ fontSize: 18, color: "#1C1C1E" }}>
                    {card.title}
                  </p>
                  <p className="font-body mt-1" style={{ fontSize: 16, color: "#6B6B6C", lineHeight: 1.6 }}>
                    {card.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="font-body italic text-center mt-8"
            style={{ fontSize: 18, color: "#6B6B6C", maxWidth: 640, margin: "32px auto 0" }}>
            Foi exatamente a partir disso que nasceu o método aplicado no Studio Everton Santos.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-6">
            <a href="https://wa.me/5561996940066?text=Olá%2C+gostaria+de+agendar+uma+aula+experimental!" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-heading font-bold uppercase tracking-wider rounded-full hover:brightness-110 transition-all shadow-lg shadow-primary/20"
              style={{ fontSize: 17, minHeight: 54, padding: "16px 40px" }}>
              Agendar uma Aula Experimental →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MethodSection;
