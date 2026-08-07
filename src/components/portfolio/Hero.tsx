import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import cv from "../../assets/Jerop.pdf";
import me from "../../assets/me.jpeg";

export function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-24 overflow-hidden">
      <div className="absolute inset-0 -z-10 [background:var(--gradient-hero)]" />
      <div className="absolute inset-0 -z-10 opacity-[0.04] " />

      <div className="mx-auto max-w-6xl px-6 grid lg:grid-cols-[1fr_auto] gap-12 items-center">
        <div>          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-[1.05]"
          >
            Hi, I'm Faith Kiplagat —<br />
            <span className="text-gradient">Full-Stack Developer</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 max-w-xl text-lg text-muted-foreground leading-relaxed"
          >
            I build thoughtful, scalable digital products across the full stack,
            combining{" "}
            <span className="text-foreground">
              MongoDB, Express.js, React, Node.js (MERN)
            </span>{" "}
            and modern web technologies with a strong focus on user experience.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium glow-primary hover:scale-[1.03] transition-transform"
            >
              View Projects
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href={cv}
              download="Jerop.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full glass text-foreground font-medium hover:bg-white/10 transition"
            >
              <Download size={16} />
              Download CV
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-12 flex gap-8 text-sm"
          >
            {[
              { n: "20+", l: "Projects" },
              { n: "3+", l: "Years coding" },
              { n: "100%", l: "Passion" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-2xl font-display font-bold text-gradient">{s.n}</div>
                <div className="text-muted-foreground text-xs uppercase tracking-wider mt-1">
                  {s.l}
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="relative flex justify-center lg:justify-end"
      >
        <div className="absolute -inset-6 rounded-full bg-gradient-to-br from-primary/30 to-secondary/30 blur-2xl" />

        <div className="relative w-64 h-64 sm:w-72 sm:h-72 rounded-3xl overflow-hidden glass-strong p-1.5">
          <img
            src={me}
            alt="Fay Kiplagat portrait"
            width={288}
            height={288}
            className="w-full h-full object-cover rounded-[1.25rem]"
          />
        </div>

        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute -bottom-4 left-1/2 -translate-x-1/2 lg:left-auto lg:-translate-x-0 lg:-left-4 glass-strong rounded-2xl px-4 py-3 text-xs"
        >
          <div className="text-muted-foreground">
            Currently building
          </div>

          <div className="font-mono text-primary mt-0.5">
            ~/Korva Ventures
          </div>
        </motion.div>
      </motion.div>
      </div>
    </section>
  );
}
