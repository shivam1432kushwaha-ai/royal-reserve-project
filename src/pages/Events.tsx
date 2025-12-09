import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Users, Building2, Utensils, Calendar } from "lucide-react";
import privateDining from "@/assets/private-dining.jpg";
import heroRestaurant from "@/assets/hero-restaurant.jpg";
import barLounge from "@/assets/bar-lounge.jpg";

const eventTypes = [
  {
    icon: Users,
    title: "Private Dining",
    description:
      "Intimate gatherings in our exclusive private dining rooms, perfect for celebrations of up to 16 guests.",
    capacity: "Up to 16 guests",
    image: privateDining,
  },
  {
    icon: Building2,
    title: "Corporate Events",
    description:
      "Impress clients and colleagues with world-class cuisine in an atmosphere of refined elegance.",
    capacity: "20-50 guests",
    image: heroRestaurant,
  },
  {
    icon: Utensils,
    title: "Bespoke Catering",
    description:
      "Bring the Aurelius experience to your venue with our exclusive off-site catering services.",
    capacity: "Custom",
    image: barLounge,
  },
];

const Events = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src={privateDining}
            alt="Private dining at Aurelius"
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
            Exclusive Experiences
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-5xl md:text-7xl text-primary-foreground mb-6"
          >
            Events & Catering
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-elegant text-lg text-primary-foreground/80 italic max-w-xl mx-auto"
          >
            Create unforgettable moments with bespoke dining experiences
          </motion.p>
        </div>
      </section>

      {/* Event Types Section */}
      <section className="section-luxury bg-background">
        <div className="container mx-auto px-6">
          <SectionHeading
            subtitle="Our Services"
            title="Curated Experiences"
            description="From intimate celebrations to grand corporate affairs"
          />

          <div className="space-y-24">
            {eventTypes.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="img-zoom">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-[400px] object-cover"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="inline-flex items-center justify-center w-16 h-16 border border-accent/30 mb-6">
                    <event.icon className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-display text-3xl text-foreground mb-4">
                    {event.title}
                  </h3>
                  <p className="font-elegant text-lg text-muted-foreground mb-4">
                    {event.description}
                  </p>
                  <p className="font-body text-sm text-accent mb-6">
                    Capacity: {event.capacity}
                  </p>
                  <Link to="/contact" className="btn-luxury">
                    Inquire Now
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Menu Section */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="font-body text-xs tracking-[0.3em] uppercase text-accent block mb-4">
                Personalized
              </span>
              <h2 className="font-display text-4xl md:text-5xl text-primary-foreground mb-6">
                Custom Menu Planning
              </h2>
              <p className="font-elegant text-lg text-primary-foreground/70 mb-6">
                Our culinary team works closely with you to design a bespoke menu that 
                reflects your vision and preferences. Whether you desire a classic French 
                feast, contemporary fusion, or a celebration of seasonal ingredients, 
                we bring your culinary dreams to life.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Personalized menu consultation",
                  "Dietary accommodation",
                  "Wine pairing by our sommelier",
                  "Custom décor and table settings",
                  "Dedicated event coordinator",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-accent" />
                    <span className="font-body text-sm text-primary-foreground/80">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn-luxury text-primary-foreground">
                Plan Your Event
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <Calendar className="w-24 h-24 text-accent mx-auto mb-6" />
              <p className="font-display text-6xl text-primary-foreground mb-2">500+</p>
              <p className="font-body text-sm tracking-widest uppercase text-primary-foreground/60">
                Events Hosted Annually
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-luxury bg-secondary/30">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <SectionHeading
              subtitle="Let's Create Together"
              title="Start Planning Your Event"
              description="Our events team is ready to help you craft an unforgettable experience"
            />
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contact" className="btn-luxury-filled">
                Contact Events Team
              </Link>
              <a href="tel:+1234567890" className="btn-luxury">
                Call +1 (234) 567-890
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Events;
