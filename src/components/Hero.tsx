import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center pt-16">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-8"
        >
          Shopify Ecommerce Consultant
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
          className="text-4xl sm:text-5xl md:text-7xl font-display font-semibold leading-[1.1] tracking-tight text-foreground mb-8"
        >
          Building High-Converting Shopify Stores for Global Brands
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.3 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12"
        >
          Helping ecommerce brands scale across India, UK, and UAE.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1], delay: 0.45 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollTo("work")}
            className="px-8 py-3.5 bg-primary text-primary-foreground font-medium rounded-md hover:opacity-90 transition-opacity flex items-center gap-2"
          >
            View Case Studies <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => scrollTo("contact")}
            className="px-8 py-3.5 border border-border text-foreground font-medium rounded-md hover:bg-accent transition-colors"
          >
            Book a Strategy Call
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
