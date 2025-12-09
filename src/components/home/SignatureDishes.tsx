import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SectionHeading } from "@/components/ui/SectionHeading";
import dishAppetizer from "@/assets/dish-appetizer.jpg";
import dishSignature from "@/assets/dish-signature.jpg";
import dishDessert from "@/assets/dish-dessert.jpg";

const dishes = [
  {
    image: dishAppetizer,
    name: "Tuna Tartare Royale",
    category: "Starter",
    description: "Fresh tuna, caviar, citrus essence",
  },
  {
    image: dishSignature,
    name: "Duck à l'Orange Classique",
    category: "Main Course",
    description: "Roasted duck, saffron risotto, seasonal vegetables",
  },
  {
    image: dishDessert,
    name: "Chocolate Sphere Élégance",
    category: "Dessert",
    description: "Dark chocolate, gold leaf, salted caramel",
  },
];

export const SignatureDishes = () => {
  return (
    <section className="section-luxury bg-secondary/30">
      <div className="container mx-auto px-6">
        <SectionHeading
          subtitle="Culinary Artistry"
          title="Signature Creations"
          description="A selection of our most celebrated dishes"
        />

        <div className="grid md:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
            <motion.div
              key={dish.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="group"
            >
              <div className="card-luxury overflow-hidden">
                <div className="img-zoom aspect-square">
                  <img
                    src={dish.image}
                    alt={dish.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <span className="font-body text-xs tracking-[0.2em] uppercase text-accent">
                    {dish.category}
                  </span>
                  <h3 className="font-display text-xl text-foreground mt-2 mb-2">
                    {dish.name}
                  </h3>
                  <p className="font-elegant text-sm text-muted-foreground italic">
                    {dish.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link to="/menu" className="btn-luxury">
            View Full Menu
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
