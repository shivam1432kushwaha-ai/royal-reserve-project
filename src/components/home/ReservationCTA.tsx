import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export const ReservationCTA = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative bg-primary py-16 md:py-24 px-8 md:px-16 text-center"
        >
          {/* Corner decorations */}
          <div className="absolute top-4 left-4 w-12 h-12 border-t border-l border-accent/40" />
          <div className="absolute top-4 right-4 w-12 h-12 border-t border-r border-accent/40" />
          <div className="absolute bottom-4 left-4 w-12 h-12 border-b border-l border-accent/40" />
          <div className="absolute bottom-4 right-4 w-12 h-12 border-b border-r border-accent/40" />

          <span className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-4 block">
            Reserve Your Experience
          </span>
          
          <h2 className="font-display text-3xl md:text-5xl text-primary-foreground mb-6">
            Begin Your Culinary Journey
          </h2>
          
          <p className="font-elegant text-lg text-primary-foreground/70 max-w-xl mx-auto mb-10 italic">
            Secure your table at Aurelius and prepare for an evening of extraordinary flavors, 
            elegant ambiance, and unparalleled hospitality.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/reservations" className="btn-luxury-filled">
              Make a Reservation
            </Link>
            <a
              href="tel:+1234567890"
              className="btn-luxury text-primary-foreground"
            >
              Call +1 (234) 567-890
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
