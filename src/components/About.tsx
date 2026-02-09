const About = () => {
  return (
    <section id="about" className="py-32 px-6 border-t border-border">
      <div className="max-w-3xl mx-auto">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
          About
        </p>
        <h2 className="text-3xl md:text-5xl font-display font-semibold text-foreground mb-10">
          Ecommerce, Simplified.
        </h2>
        <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
          <p>
            I'm a Shopify ecommerce consultant specializing in building high-converting 
            online stores for brands across India, the UK, and the UAE. With deep expertise 
            in Shopify's ecosystem — from theme development and checkout optimization to 
            multi-region configuration — I help businesses launch, scale, and refine their 
            digital storefronts.
          </p>
          <p>
            Every project is approached with a focus on clean design, conversion performance, 
            and long-term scalability. No templates. No shortcuts. Just stores built to sell.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
