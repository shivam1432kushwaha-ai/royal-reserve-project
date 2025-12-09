import { motion } from "framer-motion";
import { Utensils, Wine, Users } from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import privateDining from "@/assets/private-dining.jpg";

const highlights = [
  {
    icon: Utensils,
    title: "Signature Cuisine",
    description:
      "Experience our award-winning tasting menus, featuring seasonal ingredients transformed into edible art by our master chefs.",
  },
  {
    icon: Wine,
    title: "Curated Wines",
    description:
      "Our sommelier-curated wine collection spans legendary vineyards, perfectly paired with every course.",
  },
  {
    icon: Users,
    title: "Impeccable Service",
    description:
      "Every guest receives personalized attention from our dedicated team, ensuring an experience beyond compare.",
  },
];

export const HighlightsSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={privateDining}
          alt="Private dining ambiance"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-primary/90" />
      </div>

      <div className="relative z-10 container mx-auto px-6">
        <SectionHeading
          subtitle="Why Choose Us"
          title="The Aurelius Experience"
          description="Three pillars define our commitment to excellence"
          light
        />

        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {highlights.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full border border-accent/30 mb-6 group-hover:border-accent transition-colors duration-500">
                <item.icon className="w-8 h-8 text-accent" />
              </div>
              <h3 className="font-display text-2xl text-primary-foreground mb-4">
                {item.title}
              </h3>
              <p className="font-body text-sm text-primary-foreground/70 leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
