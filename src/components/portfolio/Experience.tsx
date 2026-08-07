import { motion } from "framer-motion";
import { GraduationCap, Briefcase, Award } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const timeline = [
  {
    icon: Briefcase,
    when: "Jan 2026 — Present",
    title: "Frontend Developer",
    where: "Bunifu",
    desc: "Working on software development projects, contributing to the design, development, and improvement of modern digital solutions.",
  },
  {
    icon: Briefcase,
    when: "May 2026 — Aug 2026",
    title: "Frontend Developer Intern",
    where: "PulseWave Technologies",
    desc: "Developed responsive web interfaces using React, TypeScript, and Tailwind CSS while contributing to the company's digital transformation and e-government solutions.",
  },
  {
    icon: Award,
    when: "Jul 2025 — Dec 2025",
    title: "Software Development Trainee",
    where: "PLP Academy",
    desc: "Completed an intensive software development program focused on modern web development, programming fundamentals, frontend technologies, and building practical software projects.",
  },
  {
    icon: Briefcase,
    when: "2024 — Present",
    title: "Freelance Frontend Developer",
    where: "Remote",
    desc: "Building responsive websites and web applications for clients, focusing on React, TypeScript, Tailwind CSS, UI development, and modern frontend experiences.",
  },
  {
    icon: GraduationCap,
    when: "2023 — 2027",
    title: "BSc Mathematics and Computer Science",
    where: "Jomo Kenyatta University of Agriculture and Technology",
    desc: "Studied software development, web technologies, mathematics, probability, and computer science fundamentals, building a strong foundation in analytical problem-solving and technology.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Journey"
          title="Experience & education"
          description="A timeline of where I've learned and what I've built."
        />

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-5 top-2 bottom-2 w-px bg-gradient-to-b from-primary/50 via-border to-transparent" />

          <div className="space-y-8">
            {timeline.map((t, i) => (
              <motion.div
                key={t.title}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative pl-16"
              >
                <div className="absolute left-0 top-0 w-10 h-10 rounded-full glass-strong grid place-items-center text-primary">
                  <t.icon size={18} />
                </div>
                <div className="glass rounded-2xl p-5">
                  <div className="text-xs font-mono text-primary uppercase tracking-wider">
                    {t.when}
                  </div>
                  <h3 className="font-semibold mt-1">{t.title}</h3>
                  <div className="text-sm text-muted-foreground">{t.where}</div>
                  <p className="text-sm text-muted-foreground mt-3">{t.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
