import { useState } from "react";
import { motion } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Download } from "lucide-react";
import dishAppetizer from "@/assets/dish-appetizer.jpg";
import dishSignature from "@/assets/dish-signature.jpg";
import dishMain from "@/assets/dish-main.jpg";
import dishDessert from "@/assets/dish-dessert.jpg";
import barLounge from "@/assets/bar-lounge.jpg";

const categories = ["All", "Starters", "Mains", "Desserts", "Beverages"];

const menuItems = [
  // Starters
  {
    name: "Tuna Tartare Royale",
    description: "Premium bluefin tuna, oscietra caviar, citrus gel, microgreens",
    price: "48",
    category: "Starters",
    image: dishAppetizer,
  },
  {
    name: "Foie Gras Torchon",
    description: "Duck liver, Sauternes gelée, brioche, fig compote",
    price: "52",
    category: "Starters",
  },
  {
    name: "Hokkaido Scallops",
    description: "Diver scallops, truffle cauliflower purée, brown butter",
    price: "45",
    category: "Starters",
  },
  {
    name: "Burrata Caprese",
    description: "Creamy burrata, heirloom tomatoes, aged balsamic, basil oil",
    price: "36",
    category: "Starters",
  },
  // Mains
  {
    name: "Wagyu Beef Tenderloin",
    description: "A5 Japanese wagyu, bone marrow jus, seasonal vegetables",
    price: "185",
    category: "Mains",
    image: dishMain,
  },
  {
    name: "Duck à l'Orange Classique",
    description: "Roasted Moulard duck, saffron risotto, orange reduction",
    price: "68",
    category: "Mains",
    image: dishSignature,
  },
  {
    name: "Dover Sole Meunière",
    description: "Whole Dover sole, brown butter, capers, lemon",
    price: "95",
    category: "Mains",
  },
  {
    name: "Lamb Rack Provençal",
    description: "Herb-crusted lamb, ratatouille, olive tapenade",
    price: "72",
    category: "Mains",
  },
  {
    name: "Lobster Thermidor",
    description: "Maine lobster, cognac cream, gruyère gratin",
    price: "125",
    category: "Mains",
  },
  // Desserts
  {
    name: "Chocolate Sphere Élégance",
    description: "Dark Valrhona chocolate, gold leaf, salted caramel center",
    price: "28",
    category: "Desserts",
    image: dishDessert,
  },
  {
    name: "Soufflé Grand Marnier",
    description: "Orange liqueur soufflé, vanilla crème anglaise",
    price: "32",
    category: "Desserts",
  },
  {
    name: "Crème Brûlée Tahitian",
    description: "Tahitian vanilla custard, caramelized sugar",
    price: "22",
    category: "Desserts",
  },
  {
    name: "Cheese Selection",
    description: "Artisanal cheeses, honeycomb, seasonal fruits, crackers",
    price: "38",
    category: "Desserts",
  },
  // Beverages
  {
    name: "The Golden Hour",
    description: "Aged whiskey, honey, citrus, gold flakes",
    price: "28",
    category: "Beverages",
    image: barLounge,
  },
  {
    name: "Champagne Rosé",
    description: "Dom Pérignon Rosé, glass",
    price: "85",
    category: "Beverages",
  },
  {
    name: "Sommelier's Selection",
    description: "Curated wine pairing, per course",
    price: "45",
    category: "Beverages",
  },
  {
    name: "Artisan Coffee",
    description: "Single-origin espresso, petit fours",
    price: "12",
    category: "Beverages",
  },
];

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredItems =
    activeCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === activeCategory);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center bg-primary">
        <div className="text-center">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-body text-xs tracking-[0.4em] uppercase text-accent block mb-4"
          >
            Culinary Excellence
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-5xl md:text-7xl text-primary-foreground mb-6"
          >
            The Menu
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="font-elegant text-lg text-primary-foreground/70 italic"
          >
            A symphony of flavors, crafted with passion
          </motion.p>
        </div>
      </section>

      {/* Menu Section */}
      <section className="section-luxury bg-background">
        <div className="container mx-auto px-6">
          {/* Category Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`font-body text-xs tracking-[0.2em] uppercase px-6 py-3 transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-accent text-primary"
                    : "border border-border text-foreground hover:border-accent hover:text-accent"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Menu Items */}
          <div className="grid lg:grid-cols-2 gap-x-16 gap-y-2">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="menu-item group"
              >
                <div className="flex-1">
                  <div className="flex items-baseline gap-3">
                    <h3 className="font-display text-xl text-foreground group-hover:text-accent transition-colors">
                      {item.name}
                    </h3>
                    <span className="menu-item-dots" />
                    <span className="font-display text-xl text-accent">${item.price}</span>
                  </div>
                  <p className="font-elegant text-sm text-muted-foreground mt-1 italic">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Download Menu */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-16"
          >
            <button className="btn-luxury inline-flex items-center gap-3">
              <Download className="w-4 h-4" />
              Download PDF Menu
            </button>
          </motion.div>
        </div>
      </section>

      {/* Tasting Menu Promo */}
      <section className="py-24 bg-primary">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="font-body text-xs tracking-[0.3em] uppercase text-accent block mb-4">
              Chef's Experience
            </span>
            <h2 className="font-display text-4xl md:text-5xl text-primary-foreground mb-6">
              Tasting Menu
            </h2>
            <p className="font-elegant text-lg text-primary-foreground/70 max-w-2xl mx-auto mb-8 italic">
              Embark on a culinary journey with our signature 12-course tasting menu. 
              Each course is a carefully composed chapter in an unforgettable dining narrative.
            </p>
            <div className="inline-block border border-accent/30 px-12 py-6">
              <span className="font-display text-4xl text-accent">$295</span>
              <span className="font-body text-sm text-primary-foreground/60 block mt-1">
                Per Person | Wine Pairing +$145
              </span>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
};

export default Menu;
