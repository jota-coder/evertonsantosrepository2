import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";

const googleReviews = [
  {
    id: 0,
    name: "Andressa Marques",
    text: "Um profissional atualizado com os últimos avanços em saúde funcional. Conduz os treinos com grande foco, e os resultados são alcançados com maior consistência. Excelente!",
    tags: "Qualidade, Profissionalismo",
  },
  {
    id: 1,
    name: "Daniel Cardoso",
    text: "Everton Santos é um ótimo instrutor. Recomendo seus serviços porque, além de oferecer treinamento físico, ele é comprometido com os resultados de quem quer emagrecer ou ganhar massa muscular.",
    tags: "Qualidade",
  },
  {
    id: 2,
    name: "Eliane Santana",
    text: "Excelente profissional! Seu atendimento é personalizado e abrange a totalidade do ser humano, em todos os seus aspectos biopsicossociais. Ele consegue orientar o aluno a alinhar os pilares da saúde funcional, proporcionando resultados efetivos. Muito satisfeita com o resultado obtido.",
    tags: "Comunicação, Qualidade, Profissionalismo",
  },
  {
    id: 3,
    name: "Maria Sol",
    text: "Excelente profissional!! Recomendo muito pelo seu comprometimento, profissionalismo e dedicação. Everton entende do que fala e faz! Tenho obtido excelentes resultados nos meus treinos, e como sempre digo às minhas amigas, confio nele completamente porque conheço o caráter por trás dele!!!",
    tags: "",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const GoogleIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
  </svg>
);

const TestimonialsSection = () => {
  return (
    <section id="depoimentos" className="bg-secondary py-14 md:py-20 lg:py-28 px-5 md:px-6">
      <div className="container mx-auto">

        {/* Video section */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-8 md:mb-14">
          <motion.span
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="font-heading text-primary uppercase font-semibold mb-4"
            style={{ fontSize: 14, letterSpacing: "2px" }}>
            DEPOIMENTO
          </motion.span>

          <motion.h2
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="font-display font-bold text-foreground mb-3"
            style={{ fontSize: "clamp(32px, 5vw, 46px)", lineHeight: 1.2 }}>
            Veja o que Elizabeth conquistou
          </motion.h2>

          <motion.p
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="font-body text-muted-foreground"
            style={{ fontSize: 18, maxWidth: "480px" }}>
            Mais autonomia, menos dor e qualidade de vida — na prática.
          </motion.p>
        </div>

        {/* Vimeo embed */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="mx-auto mb-6 md:mb-10 max-w-[280px] md:max-w-[320px] lg:max-w-[380px]"
          style={{ width: "100%", borderRadius: "20px", overflow: "hidden", boxShadow: "0 8px 32px rgba(107, 177, 157, 0.2)", aspectRatio: "9/16", position: "relative" }}>
          <iframe
            src="https://player.vimeo.com/video/1171512354?share=copy&fl=sv&fe=ci&badge=0&autopause=0&player_id=0&app_id=58479"
            title="Depoimento Elizabeth"
            allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media"
            allowFullScreen
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none" }}
          />
        </motion.div>

        {/* CTA below video */}
        <div className="text-center mb-0 px-2">
          <a href="https://wa.me/5561996940066?text=Olá%2C+gostaria+de+agendar+uma+aula+experimental!" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-heading font-bold uppercase tracking-wider rounded-full hover:brightness-110 transition-all shadow-lg shadow-primary/20 w-full md:w-auto"
            style={{ fontSize: 17, minHeight: 54, padding: "16px 32px" }}>
            Agendar uma Aula Experimental
            <ArrowRight size={18} />
          </a>
        </div>

        {/* Separator */}
        <motion.div
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.5 }} viewport={{ once: true }}
          className="mx-auto my-12 md:my-16"
          style={{ borderBottom: "1px solid rgba(107, 177, 157, 0.2)", maxWidth: "600px" }}
        />

        {/* Google reviews section */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-8 md:mb-12">
          <motion.span
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="font-heading text-primary uppercase font-semibold mb-4"
            style={{ fontSize: 14, letterSpacing: "2px" }}>
            AVALIAÇÕES
          </motion.span>

          <motion.h2
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="font-display font-bold text-foreground mb-3"
            style={{ fontSize: "clamp(32px, 5vw, 46px)", lineHeight: 1.2 }}>
            Veja também o que algumas avaliações do Google dizem:
          </motion.h2>

          <motion.p
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="font-body text-muted-foreground mb-3"
            style={{ fontSize: 18, maxWidth: "480px" }}>
            Depoimentos de alunos
          </motion.p>

          <motion.div
            variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="flex items-center gap-2 justify-center">
            <GoogleIcon size={20} />
            <span className="font-body text-muted-foreground" style={{ fontSize: 15 }}>
              Avaliações verificadas no Google
            </span>
          </motion.div>
        </div>

        {/* Mobile reviews */}
        <div className="md:hidden flex flex-col gap-3">
          {googleReviews.slice(0, 3).map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="w-full bg-white-pure rounded-2xl p-5 border border-border"
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={14} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="font-body text-muted-foreground mb-2" style={{ fontSize: 16, lineHeight: 1.7 }}>{review.text}</p>
              {review.tags && (
                <p className="font-body text-primary font-medium mb-4" style={{ fontSize: 15 }}>{review.tags}</p>
              )}
              <div className="flex items-center justify-between">
                <span className="font-heading font-bold text-foreground" style={{ fontSize: 17 }}>{review.name}</span>
                <span className="font-body text-muted-foreground" style={{ fontSize: 15 }}>Google</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Desktop reviews */}
        <div
          className="hidden md:flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory justify-center"
          style={{ WebkitOverflowScrolling: "touch", scrollbarWidth: "none", msOverflowStyle: "none" } as React.CSSProperties}
        >
          {googleReviews.map((review, i) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="min-w-[260px] max-w-[300px] bg-white-pure rounded-2xl p-5 border border-border flex-shrink-0 snap-start"
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} size={14} className="text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="font-body text-muted-foreground mb-2" style={{ fontSize: 16, lineHeight: 1.7 }}>{review.text}</p>
              {review.tags && (
                <p className="font-body text-primary font-medium mb-4" style={{ fontSize: 15 }}>{review.tags}</p>
              )}
              <div className="flex items-center justify-between">
                <span className="font-heading font-bold text-foreground" style={{ fontSize: 17 }}>{review.name}</span>
                <span className="font-body text-muted-foreground" style={{ fontSize: 15 }}>Google</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA below reviews */}
        <div className="text-center mt-8 md:mt-10 px-2">
          <a href="https://wa.me/5561996940066?text=Olá%2C+gostaria+de+agendar+uma+aula+experimental!" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground font-heading font-bold uppercase tracking-wider rounded-full hover:brightness-110 transition-all shadow-lg shadow-primary/20 w-full md:w-auto"
            style={{ fontSize: 17, minHeight: 54, padding: "16px 32px" }}>
            Agendar uma Aula Experimental
            <ArrowRight size={18} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
