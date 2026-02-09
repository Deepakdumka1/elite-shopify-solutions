import { ArrowRight } from "lucide-react";

const Navbar = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <span className="text-lg font-semibold tracking-tight text-foreground">
          Shopify<span className="text-muted-foreground">Expert</span>
        </span>
        <div className="hidden md:flex items-center gap-8">
          {["Work", "Services", "About", "Contact"].map((item) => (
            <button
              key={item}
              onClick={() => scrollTo(item.toLowerCase())}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item}
            </button>
          ))}
        </div>
        <button
          onClick={() => scrollTo("contact")}
          className="text-sm font-medium text-primary-foreground bg-primary px-4 py-2 rounded-md hover:opacity-90 transition-opacity flex items-center gap-2"
        >
          Get in Touch <ArrowRight className="w-3.5 h-3.5" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
