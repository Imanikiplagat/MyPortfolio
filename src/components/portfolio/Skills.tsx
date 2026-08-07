import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";

import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiPython,
  SiPostgresql,
  SiMongodb,
  SiGit,
  SiGithub,
  SiFigma,
  SiPostman,
  SiVite,
  SiTailwindcss,
} from "react-icons/si";

import {
  Smartphone,
  Palette,
  Server,
  Database,
  Cloud,
} from "lucide-react";

const skills = [
  // Frontend
  { name: "HTML5", icon: SiHtml5, color: "#e34f26" },
  { name: "CSS3", icon: SiCss, color: "#1572b6" },
  { name: "JavaScript", icon: SiJavascript, color: "#f7df1e" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178c6" },
  { name: "React", icon: SiReact, color: "#61dafb" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06b6d4" },
  { name: "Vite", icon: SiVite, color: "#646cff" },
  { name: "Responsive Design", icon: Smartphone, color: "#22d3ee" },

  // Backend
  { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
  { name: "Express.js", icon: SiExpress, color: "#ffffff" },
  { name: "Python", icon: SiPython, color: "#3776ab" },
  { name: "Django", icon: SiDjango, color: "#092e20" },
  { name: "REST APIs", icon: Server, color: "#a78bfa" },

  // Databases
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169e1" },
  { name: "MongoDB", icon: SiMongodb, color: "#47a248" },
  { name: "Databases", icon: Database, color: "#38bdf8" },

  // Tools
  { name: "Git", icon: SiGit, color: "#f05032" },
  { name: "GitHub", icon: SiGithub, color: "#ffffff" },
  { name: "Postman", icon: SiPostman, color: "#ff6c37" },
  { name: "Figma", icon: SiFigma, color: "#f24e1e" },

  // Design & Deployment
  { name: "UI/UX Design", icon: Palette, color: "#ec4899" },
  { name: "Cloud & Deployment", icon: Cloud, color: "#38bdf8" },
];

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="container mx-auto px-6">
        <SectionHeading
          eyebrow="Skills"
          title="Technologies I work with"
          description="A combination of frontend, backend, database, and development tools I use to build complete digital products."
        />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {skills.map((s, i) => (
          <motion.div
            key={s.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            whileHover={{ y: -4 }}
            className="glass rounded-2xl p-4 sm:p-5 flex items-center gap-3 sm:gap-4 group hover:border-primary/40 transition-colors"
          >
            <div
              className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl grid place-items-center bg-white/5 group-hover:scale-110 transition-transform shrink-0"
              style={{ color: s.color }}
            >
              <s.icon size={24} />
            </div>

            <div className="min-w-0">
              <div className="font-medium break-words">
                {s.name}
              </div>

              <div className="text-xs text-muted-foreground mt-0.5 font-mono">
                proficient
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      </div>
    </section>
  );
}