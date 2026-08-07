import { motion } from "framer-motion";
import { Code2, Database,  Rocket } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const cards = [
  {
    icon: Code2,
    title: "Full-Stack Development",
    desc: "I build complete applications across the frontend and backend, from responsive interfaces to APIs, databases, and server-side systems.",
  },
  {
    icon: Database,
    title: "Backend & APIs",
    desc: "I develop reliable REST APIs, work with databases, and build backend services that support scalable and maintainable applications.",
  },
  {
    icon: Rocket,
    title: "Continuous Growth",
    desc: "I'm constantly learning and improving my skills across modern frontend, backend, cloud, and software development technologies.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading eyebrow="About me" title="A developer who designs" />

        <div className="grid lg:grid-cols-5 gap-10 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 space-y-5 text-muted-foreground leading-relaxed"
          >
          <p className="text-foreground text-lg">
            I'm Fay — a full-stack developer based in Kenya, passionate about turning
            ideas into scalable, meaningful digital products.
          </p>

          <p>
            My journey into software development started with curiosity about how the
            web works and evolved into a passion for building complete applications.
            I work across the stack, creating responsive and intuitive interfaces while
            developing the APIs, databases, and backend systems that power them.
          </p>

          <p>
            I'm currently deepening my expertise in React, TypeScript, and modern
            backend technologies, with a focus on building scalable, maintainable, and
            user-centered applications. I enjoy solving real-world problems through
            technology and continuously learning new tools and approaches along the way.
          </p>
          </motion.div>

          <div className="lg:col-span-2 grid gap-3">
            {cards.map((c, i) => (
              <motion.div
                key={c.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="glass rounded-2xl p-5 hover:bg-white/[0.06] transition-colors"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-lg bg-primary/15 text-primary grid place-items-center">
                    <c.icon size={18} />
                  </div>
                  <h3 className="font-semibold">{c.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">{c.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
