import { motion } from "framer-motion";

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  alignment?: "left" | "center" | "right";
  light?: boolean;
}

export const SectionHeading = ({
  subtitle,
  title,
  description,
  alignment = "center",
  light = false,
}: SectionHeadingProps) => {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
      className={`flex flex-col ${alignmentClasses[alignment]} mb-12 md:mb-16`}
    >
      {subtitle && (
        <span
          className={`font-body text-xs tracking-[0.3em] uppercase mb-4 ${
            light ? "text-accent" : "text-accent"
          }`}
        >
          {subtitle}
        </span>
      )}
      <div className="flex items-center gap-4 mb-4">
        <div className="line-gold" />
        <h2
          className={`heading-luxury ${
            light ? "text-primary-foreground" : "text-foreground"
          }`}
        >
          {title}
        </h2>
        <div className="line-gold" />
      </div>
      {description && (
        <p
          className={`font-elegant text-lg md:text-xl max-w-2xl leading-relaxed ${
            light ? "text-primary-foreground/80" : "text-muted-foreground"
          }`}
        >
          {description}
        </p>
      )}
    </motion.div>
  );
};
