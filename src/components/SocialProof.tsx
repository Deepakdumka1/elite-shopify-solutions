import FadeIn from "./FadeIn";

const stats = [
  { value: "4+", label: "Stores Delivered" },
  { value: "3", label: "Countries" },
  { value: "100%", label: "Client Retention" },
];

const SocialProof = () => {
  return (
    <section className="py-32 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto text-center">
        <FadeIn>
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Track Record
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-semibold text-foreground mb-6">
            Trusted Across Borders
          </h2>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-16">
            Delivering premium Shopify stores for brands across India, UK, and UAE.
          </p>
        </FadeIn>
        <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
          {stats.map((stat, i) => (
            <FadeIn key={stat.label} delay={i * 0.12}>
              <div className="text-4xl md:text-5xl font-display font-semibold text-foreground mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider">
                {stat.label}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
