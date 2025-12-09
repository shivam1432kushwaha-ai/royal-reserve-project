import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Award, Star, Trophy } from "lucide-react";
import chefImage from "@/assets/chef-portrait.jpg";
import privateDining from "@/assets/private-dining.jpg";
import heroRestaurant from "@/assets/hero-restaurant.jpg";

const awards = [
  { icon: Star, title: "3 Michelin Stars", year: "Since 2018" },
  { icon: Trophy, title: "World's Best Restaurant", year: "2022" },
  { icon: Award, title: "James Beard Award", year: "2020" },
  { icon: Star, title: "AAA Five Diamond", year: "Since 2015" },
];

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={heroRestaurant}
            alt="Aurelius restaurant interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/70" />
        </div>
        <div className="relative z-10 text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-body text-xs tracking-[0.4em] uppercase text-accent block mb-4"
          >
            Our Story
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-5xl md:text-7xl text-primary-foreground"
          >
            About Aurelius
          </motion.h1>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-luxury bg-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <SectionHeading
                subtitle="Our Heritage"
                title="A Tradition of Excellence"
                alignment="left"
              />
              <div className="space-y-6">
                <p className="font-elegant text-lg text-muted-foreground leading-relaxed">
                  Founded in 1998, Aurelius was born from a vision to create not merely a restaurant, 
                  but a sanctuary of culinary excellence. Named after the Roman emperor-philosopher 
                  Marcus Aurelius, our establishment embodies the pursuit of perfection in every aspect.
                </p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  What began as an intimate 30-seat establishment has evolved into one of the world's 
                  most celebrated dining destinations. Yet, despite our growth, we remain true to our 
                  founding principles: exceptional ingredients, masterful technique, and unwavering 
                  attention to every detail.
                </p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  Each evening, our guests embark on a journey through flavors that tell stories of 
                  distant lands, seasonal harvests, and culinary innovation. Our commitment to 
                  sustainability ensures that every ingredient not only delights the palate but 
                  honors the earth from which it came.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <img
                src={privateDining}
                alt="Private dining room"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute -bottom-6 -left-6 bg-accent px-8 py-6">
                <span className="block font-display text-4xl text-primary">25+</span>
                <span className="font-body text-xs tracking-widest uppercase text-primary/80">
                  Years of Excellence
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-body text-xs tracking-[0.3em] uppercase text-accent mb-4 block">
              Our Philosophy
            </span>
            <blockquote className="font-display text-3xl md:text-4xl lg:text-5xl text-primary-foreground max-w-4xl mx-auto leading-relaxed mb-8">
              "We believe that dining is not merely sustenance, but an art form that engages 
              all senses and creates memories that last a lifetime."
            </blockquote>
            <div className="line-gold mx-auto" />
          </motion.div>
        </div>
      </section>

      {/* Chef Section */}
      <section className="section-luxury bg-secondary/30">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <img
                src={chefImage}
                alt="Executive Chef"
                className="w-full max-w-md mx-auto"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <SectionHeading
                subtitle="Meet the Master"
                title="Chef Laurent Dubois"
                alignment="left"
              />
              <div className="space-y-6 mb-8">
                <p className="font-elegant text-lg text-muted-foreground leading-relaxed">
                  With three decades of experience in the world's finest kitchens, Chef Laurent Dubois 
                  brings an unparalleled depth of knowledge and creative vision to Aurelius.
                </p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  Trained under legendary masters in Paris, Tokyo, and New York, Chef Dubois developed 
                  a distinctive culinary philosophy that honors classical techniques while embracing 
                  innovation. His seasonal tasting menus have earned worldwide acclaim, celebrated for 
                  their bold flavors, artistic presentation, and emotional resonance.
                </p>
                <p className="font-body text-sm text-muted-foreground leading-relaxed">
                  "Every dish should tell a story," Chef Dubois often says. "It should transport you 
                  to a time, a place, an emotion. That is the true power of food."
                </p>
              </div>
              <div className="flex flex-wrap gap-6">
                <div>
                  <span className="block font-display text-3xl text-accent">30+</span>
                  <span className="font-body text-xs tracking-widest uppercase text-muted-foreground">
                    Years Experience
                  </span>
                </div>
                <div>
                  <span className="block font-display text-3xl text-accent">15</span>
                  <span className="font-body text-xs tracking-widest uppercase text-muted-foreground">
                    Countries Trained
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="section-luxury bg-background">
        <div className="container mx-auto px-6">
          <SectionHeading
            subtitle="Recognition"
            title="Awards & Accolades"
            description="Our commitment to excellence has been recognized worldwide"
          />
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {awards.map((award, index) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-8 border border-border hover:border-accent/50 transition-colors duration-500"
              >
                <award.icon className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-display text-xl text-foreground mb-2">{award.title}</h3>
                <p className="font-body text-sm text-muted-foreground">{award.year}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
