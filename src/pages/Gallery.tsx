import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layout } from "@/components/layout/Layout";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { X } from "lucide-react";
import heroRestaurant from "@/assets/hero-restaurant.jpg";
import privateDining from "@/assets/private-dining.jpg";
import dishSignature from "@/assets/dish-signature.jpg";
import dishAppetizer from "@/assets/dish-appetizer.jpg";
import dishMain from "@/assets/dish-main.jpg";
import dishDessert from "@/assets/dish-dessert.jpg";
import barLounge from "@/assets/bar-lounge.jpg";
import chefPortrait from "@/assets/chef-portrait.jpg";

const galleryImages = [
  { src: heroRestaurant, alt: "Main dining room", category: "Interior" },
  { src: privateDining, alt: "Private dining room", category: "Interior" },
  { src: dishSignature, alt: "Signature duck dish", category: "Cuisine" },
  { src: dishAppetizer, alt: "Tuna tartare appetizer", category: "Cuisine" },
  { src: dishMain, alt: "Wagyu beef main course", category: "Cuisine" },
  { src: dishDessert, alt: "Chocolate dessert", category: "Cuisine" },
  { src: barLounge, alt: "Bar and lounge area", category: "Interior" },
  { src: chefPortrait, alt: "Executive Chef", category: "Team" },
];

const categories = ["All", "Interior", "Cuisine", "Team"];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

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
            Visual Journey
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-display text-5xl md:text-7xl text-primary-foreground"
          >
            Gallery
          </motion.h1>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="section-luxury bg-background">
        <div className="container mx-auto px-6">
          <SectionHeading
            subtitle="Explore"
            title="Our World"
            description="A glimpse into the Aurelius experience"
          />

          {/* Category Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
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

          {/* Gallery Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.src}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  layout
                  className="group cursor-pointer"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <div className="img-zoom aspect-[4/3] relative overflow-hidden">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-500 flex items-center justify-center">
                      <span className="font-body text-xs tracking-widest uppercase text-primary-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        View
                      </span>
                    </div>
                  </div>
                  <div className="mt-3 text-center">
                    <span className="font-body text-xs tracking-widest uppercase text-accent">
                      {image.category}
                    </span>
                    <p className="font-elegant text-sm text-muted-foreground mt-1">
                      {image.alt}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-primary/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-primary-foreground hover:text-accent transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Gallery image"
              className="max-w-full max-h-[85vh] object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Gallery;
