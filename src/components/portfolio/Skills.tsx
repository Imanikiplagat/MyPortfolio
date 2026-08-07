import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiGit,
  SiGithub,
  SiFigma,
} from "react-icons/si";
import { Smartphone, Palette } from "lucide-react";

const skills = [
  { name: "HTML", icon: SiHtml5, color: "#e34f26" },
  { name: "CSS", icon: SiCss, color: "#1572b6" },
  { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
  { name: "React", icon: SiReact, color: "#61dafb" },
  { name: "Responsive Design", icon: Smartphone, color: "#22d3ee" },
  { name: "Git", icon: SiGit, color: "#f05032" },
  { name: "GitHub", icon: SiGithub, color: "#ffffff" },
  { name: "Canva", icon: SiFigma, color: "#00c4cc" },
  { name: "Adobe Creative Suite", icon: Palette, color: "#ff0080" },
];

export function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Toolkit"
          title="Skills & technologies"
          description="The tools I reach for to take ideas from sketch to shipped."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-4">
          {skills.map((s, i) => (
            <motion.div
              key={s.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ y: -4 }}
              className="glass rounded-2xl p-5 flex items-center gap-4 group hover:border-primary/40 transition-colors"
            >
              <div
                className="w-12 h-12 rounded-xl grid place-items-center bg-white/5 group-hover:scale-110 transition-transform"
                style={{ color: s.color }}
              >
                <s.icon size={24} />
              </div>
              <div>
                <div className="font-medium">{s.name}</div>
                <div className="text-xs text-muted-foreground mt-0.5 font-mono">proficient</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
