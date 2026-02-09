import { Store, RefreshCw, Globe, Wrench } from "lucide-react";
import FadeIn from "./FadeIn";

const services = [
  {
    icon: Store,
    title: "Shopify Store Setup",
    description: "End-to-end store development tailored to your brand, products, and target market.",
  },
  {
    icon: RefreshCw,
    title: "Store Redesign & Optimization",
    description: "Improve conversions with a refined UX, faster load times, and data-driven design.",
  },
  {
    icon: Globe,
    title: "International Configuration",
    description: "Multi-currency, multi-region, and localized storefronts for global reach.",
  },
  {
    icon: Wrench,
    title: "Ongoing Maintenance",
    description: "Continuous support, updates, and performance monitoring for your store.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-32 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            What I Do
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-semibold text-foreground mb-20">
            Services
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, i) => (
            <FadeIn key={service.title} delay={i * 0.1}>
              <div className="p-8 rounded-lg border border-border bg-card hover:bg-accent transition-colors group h-full">
                <service.icon className="w-6 h-6 text-muted-foreground mb-6 group-hover:text-foreground transition-colors" />
                <h3 className="text-xl font-display font-semibold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
