import { motion } from "framer-motion";

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="text-center mb-14"
    >
      <div className="text-xs uppercase tracking-[0.2em] text-primary mb-3 font-mono">
        {eyebrow}
      </div>
      <h2 className="text-4xl sm:text-5xl font-bold">{title}</h2>
      {description && (
        <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">{description}</p>
      )}
    </motion.div>
  );
}
