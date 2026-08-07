import { motion } from "framer-motion";
import { Code2, Palette, Rocket } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const cards = [
  {
    icon: Code2,
    title: "Clean Code",
    desc: "I write maintainable, well-structured React components with accessibility as a baseline.",
  },
  {
    icon: Palette,
    title: "Design Eye",
    desc: "Years in Adobe Creative Suite and Canva inform every layout, color, and typographic decision.",
  },
  {
    icon: Rocket,
    title: "Growth Driven",
    desc: "Constantly learning — Next.js, TypeScript, and motion design are next on my roadmap.",
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
              I'm Fay — a front-end developer based in Kenya, obsessed with the intersection of
              code and visual design.
            </p>
            <p>
              My journey started with curiosity about how the web works and grew into a deep love
              for crafting interfaces that feel effortless. I believe great products come from
              empathy: understanding users, anticipating needs, and removing friction every step
              of the way.
            </p>
            <p>
              Right now I'm sharpening my React and TypeScript skills, exploring motion design,
              and contributing to open-source projects. My goal? To join a forward-thinking team
              where I can build products that genuinely improve people's everyday lives.
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
