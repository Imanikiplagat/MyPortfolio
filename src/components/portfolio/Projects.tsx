import { motion } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import p1 from "../../assets/pulsewave.png";
import p2 from "../../assets/image.png";
import p3 from "../../assets/home.png";
import { FaGithub } from "react-icons/fa";

const projects = [
  {
    title: "Pulsewave Technology - Corprate Website & Digital Transformation",
    description:
      "Designed and developed a modern, responsive corporate website for PulseWave Technologies, an e-government and digital transformation company delivering technology solutions for public sector institutions.",
    image: p1,
    tags: ["React", " TypeScript", "Tailwind", "Framer Motion"],
    github: "https://github.com/Imanikiplagat/pulsewave-v2.git",
    demo: "https://pulsewave-v2-8xkq.vercel.app/",
  },
  {
    title: "AgroVision AI - AI-Powered Agricultural Intelligence Platform",
    description:
      "Developed a modern agricultural intelligence platform that combines machine learning, real-time weather data, and AI-generated insights to help users make more informed farming decisions.",
    image: p2,
    tags: ["React", "TypeScript", "Zustand"],
    github: "https://github.com/Imanikiplagat/Agrovision_ai.git",
    demo: "https://agrovision-2.vercel.app/",
  },
  {
    title: "Imani.s — Community Blog Platform",
    description:
      "Imani.s is a full-stack community blogging platform built with the MERN stack, where users can create, share, and explore blog content. It features a clean, responsive interface with backend support for managing posts, categories, authors, and images.",
    image: p3,
    tags: ["MongoDB", "Express.js", "React", "Node.js", "Tailwind CSS"],
    github: "https://github.com/Imanikiplagat/imani-blog.git",
    demo: "https://imani-blog.vercel.app/",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          eyebrow="Selected work"
          title="Recent projects"
          description="A glimpse of what I've been building. More on the way."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group glass rounded-2xl overflow-hidden flex flex-col hover:border-primary/40 transition-all hover:-translate-y-1"
            >
              <div className="aspect-[16/10] overflow-hidden bg-muted relative">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  width={1024}
                  height={640}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              </div>
              <div className="p-6 flex flex-col flex-1">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="text-sm text-muted-foreground mt-2 flex-1">{p.description}</p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="text-[11px] px-2 py-1 rounded-md bg-primary/10 text-primary font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-5 pt-5 border-t border-border">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition"
                  >
                    <FaGithub size={14} /> Code
                  </a>
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-primary hover:opacity-80 transition ml-auto"
                  >
                    Live demo <ExternalLink size={14} />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}

          {/* Placeholder card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="glass rounded-2xl border-dashed border-2 border-border/60 flex flex-col items-center justify-center text-center p-10 min-h-[360px]"
          >
            <div className="w-12 h-12 rounded-full bg-primary/10 text-primary grid place-items-center mb-3">
              <Sparkles size={20} />
            </div>
            <h3 className="font-semibold">More coming soon</h3>
            <p className="text-sm text-muted-foreground mt-2 max-w-xs">
              I'm constantly shipping. Check back — or follow along on GitHub.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
