import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SectionHeading } from "@/components/ui/SectionHeading";
import dishImage from "@/assets/dish-signature.jpg";

export const IntroSection = () => {
  return (
    <section className="section-luxury bg-background overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 img-zoom">
              <img
                src={dishImage}
                alt="Signature dish at Aurelius"
                className="w-full h-[500px] lg:h-[600px] object-cover"
              />
            </div>
            {/* Decorative frame */}
            <div className="absolute -top-4 -left-4 w-full h-full border border-accent/30 -z-0" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/10" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <SectionHeading
              subtitle="Welcome to Aurelius"
              title="A Legacy of Excellence"
              alignment="left"
            />
            
            <div className="space-y-6 mb-8">
              <p className="font-elegant text-lg text-muted-foreground leading-relaxed">
                Nestled in the heart of Manhattan, Aurelius represents the pinnacle of fine dining. 
                Our culinary philosophy blends time-honored traditions with contemporary innovation, 
                creating an unforgettable gastronomic experience.
              </p>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                Every dish that leaves our kitchen is a masterpiece, crafted with the finest 
                ingredients sourced from around the world. Our team of world-renowned chefs 
                brings decades of expertise to create flavors that transcend the ordinary.
              </p>
            </div>

            <div className="flex flex-wrap gap-8 mb-10">
              <div className="text-center">
                <span className="block font-display text-4xl text-accent">25+</span>
                <span className="font-body text-xs tracking-widest uppercase text-muted-foreground">
                  Years of Excellence
                </span>
              </div>
              <div className="text-center">
                <span className="block font-display text-4xl text-accent">3</span>
                <span className="font-body text-xs tracking-widest uppercase text-muted-foreground">
                  Michelin Stars
                </span>
              </div>
              <div className="text-center">
                <span className="block font-display text-4xl text-accent">50+</span>
                <span className="font-body text-xs tracking-widest uppercase text-muted-foreground">
                  Award Recognitions
                </span>
              </div>
            </div>

            <Link to="/about" className="btn-luxury">
              Our Story
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
