import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl mx-auto text-center pt-16">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-8 animate-fade-in">
          Shopify Ecommerce Consultant
        </p>
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-semibold leading-[1.1] tracking-tight text-foreground mb-8 animate-fade-in" style={{ animationDelay: "0.1s" }}>
          Building High-Converting Shopify Stores for Global Brands
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          Helping ecommerce brands scale across India, UK, and UAE.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
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
        </div>
      </div>
    </section>
  );
};

export default Hero;
