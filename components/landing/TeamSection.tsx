import { motion } from "framer-motion";
import { ArrowRight, Instagram } from "lucide-react";

const team = [
  {
    name: "Everton Santos",
    role: "PERSONAL TRAINER & FUNDADOR",
    bio: "Formado em Educação Física (2003), especializado em Musculação e pós-graduando em Mecânica do Movimento e Ortopedia. Mais de 21 anos de experiência dedicados a ajudar pessoas acima de 50 anos a manter força, autonomia e qualidade de vida.",
    photo: "/photos/everton.png",
    placeholder: "[Foto Everton]",
    instagram: "evertonspersonal",
  },
  {
    name: "Márcio Madureira",
    role: "PERSONAL TRAINER",
    bio: "Formado em Bacharelado em Educação Física pela Faculdade Alvorada (1998), possui ampla experiência em academias e estúdios. É especializado em treinamento para a terceira idade, com foco em saúde, segurança e qualidade de vida.",
    photo: "/photos/marcio.png",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const TeamSection = () => {
  return (
    <section id="equipe" className="bg-white-pure py-14 md:py-20 lg:py-28 px-5 md:px-4">
      <div className="container mx-auto">
        <motion.h2
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="font-display font-semibold text-foreground text-center mb-8 md:mb-16 max-w-2xl mx-auto"
          style={{ fontSize: "var(--font-section-headline)", lineHeight: "var(--line-height-heading)" }}
        >
          Quem está por trás do Studio Everton Santos?
        </motion.h2>

        <div className="flex flex-col md:grid md:grid-cols-2 gap-8 md:gap-10 max-w-4xl mx-auto mb-8 md:mb-14">
          {team.map((member, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col items-center text-center"
            >
              <div className={`${member.photo ? 'w-28 h-28 md:w-52 md:h-52' : 'w-20 h-20 md:w-40 md:h-40'} rounded-full bg-muted border-[3px] border-primary/30 flex items-center justify-center mb-4 overflow-hidden`}>
                {member.photo ? (
                  <img src={member.photo} alt={member.name} className="w-full h-full object-cover" />
                ) : (
                  <span className="font-body text-muted-foreground" style={{ fontSize: 15 }}>{member.placeholder}</span>
                )}
              </div>
              <h3 className="font-heading font-bold text-foreground" style={{ fontSize: 24 }}>{member.name}</h3>
              {member.instagram && (
                <a
                  href={`https://www.instagram.com/${member.instagram}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Siga no Instagram"
                  className="inline-flex items-center gap-1.5 text-primary hover:opacity-70 transition-all mt-1"
                >
                  <Instagram size={16} />
                  <span className="font-body" style={{ fontSize: 15 }}>@{member.instagram}</span>
                </a>
              )}
              <span className="font-heading font-bold uppercase tracking-widest text-primary mt-1 mb-3"
                style={{ fontSize: 16 }}>
                {member.role}
              </span>
              <p className="font-body text-muted-foreground max-w-sm"
                style={{ fontSize: 17, lineHeight: 1.75 }}>{member.bio}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center px-2">
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

export default TeamSection;
