import FadeIn from "./FadeIn";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "The store launch was seamless. Within weeks, we saw a 40% increase in mobile conversions. Truly understands what makes a Shopify store sell.",
    name: "Arjun Mehta",
    role: "Founder, SoleKraft Footwear",
    region: "India & UK",
  },
  {
    quote: "Our B2B catalog was complex, but the final store is clean, fast, and easy for our clients to navigate. Professional from start to finish.",
    name: "Khalid Al-Rashid",
    role: "Director, Gulf Electra Trading",
    region: "Dubai, UAE",
  },
  {
    quote: "They captured our brand essence perfectly. The product pages feel premium, and the mobile experience is flawless. Sales doubled in two months.",
    name: "Priya Sharma",
    role: "Co-founder, Aurelia Hair Co.",
    region: "India",
  },
];

const Testimonials = () => {
  return (
    <section className="py-32 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Client Words
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-semibold text-foreground mb-20">
            What They Say
          </h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <FadeIn key={t.name} delay={i * 0.12}>
              <div className="p-8 rounded-lg border border-border bg-card h-full flex flex-col">
                <Quote className="w-5 h-5 text-muted-foreground mb-6 flex-shrink-0" />
                <p className="text-foreground leading-relaxed mb-8 flex-1">
                  "{t.quote}"
                </p>
                <div>
                  <p className="text-sm font-medium text-foreground">{t.name}</p>
                  <p className="text-sm text-muted-foreground mt-0.5">{t.role}</p>
                  <p className="text-xs text-muted-foreground mt-1 uppercase tracking-wider">
                    {t.region}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
