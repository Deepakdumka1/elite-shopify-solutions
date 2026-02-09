const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} ShopifyExpert. All rights reserved.
        </span>
        <div className="flex items-center gap-6">
          {["LinkedIn", "Twitter", "Email"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
