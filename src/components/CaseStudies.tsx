import caseShoesImg from "@/assets/case-shoes.jpg";
import caseElectricalImg from "@/assets/case-electrical.jpg";
import caseHairoilImg from "@/assets/case-hairoil.jpg";
import FadeIn from "./FadeIn";

const caseStudies = [
  {
    title: "Shoes Store",
    region: "India & UK",
    image: caseShoesImg,
    points: [
      "Multi-region setup",
      "Currency configuration",
      "Conversion-focused layout",
      "Mobile-first design",
    ],
  },
  {
    title: "Electrical Equipment Store",
    region: "Dubai",
    image: caseElectricalImg,
    points: [
      "Large product catalog",
      "Structured navigation",
      "B2B layout",
      "Category-driven UX",
    ],
  },
  {
    title: "Hair Oil Brand",
    region: "Premium Beauty",
    image: caseHairoilImg,
    points: [
      "Brand storytelling",
      "Premium product pages",
      "Clean mobile design",
      "Visual-first experience",
    ],
  },
];

const CaseStudies = () => {
  return (
    <section id="work" className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
            Selected Work
          </p>
          <h2 className="text-3xl md:text-5xl font-display font-semibold text-foreground mb-20">
            Case Studies
          </h2>
        </FadeIn>

        <div className="space-y-32">
          {caseStudies.map((study, i) => (
            <div
              key={study.title}
              className={`flex flex-col ${i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-12 lg:gap-16 items-center`}
            >
              <FadeIn className="lg:w-3/5" delay={0.1}>
                <div className="rounded-lg overflow-hidden bg-secondary aspect-[4/3]">
                  <img
                    src={study.image}
                    alt={study.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </FadeIn>
              <FadeIn className="lg:w-2/5" delay={0.25}>
                <span className="text-sm uppercase tracking-[0.2em] text-muted-foreground">
                  {study.region}
                </span>
                <h3 className="text-2xl md:text-3xl font-display font-semibold text-foreground mt-3 mb-6">
                  {study.title}
                </h3>
                <ul className="space-y-3">
                  {study.points.map((point) => (
                    <li
                      key={point}
                      className="flex items-center gap-3 text-muted-foreground"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-foreground flex-shrink-0" />
                      {point}
                    </li>
                  ))}
                </ul>
              </FadeIn>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;
