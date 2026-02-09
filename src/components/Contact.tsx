import { useState } from "react";
import { ArrowRight } from "lucide-react";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", form);
  };

  return (
    <section id="contact" className="py-32 px-6 border-t border-border">
      <div className="max-w-2xl mx-auto">
        <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
          Get Started
        </p>
        <h2 className="text-3xl md:text-5xl font-display font-semibold text-foreground mb-12">
          Let's Build Your Next Shopify Store.
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm text-muted-foreground mb-2">
              Name
            </label>
            <input
              id="name"
              type="text"
              required
              maxLength={100}
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className="w-full px-4 py-3 rounded-md bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring transition-colors"
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm text-muted-foreground mb-2">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              maxLength={255}
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              className="w-full px-4 py-3 rounded-md bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring transition-colors"
              placeholder="you@company.com"
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm text-muted-foreground mb-2">
              Message
            </label>
            <textarea
              id="message"
              required
              maxLength={1000}
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 rounded-md bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring transition-colors resize-none"
              placeholder="Tell me about your project..."
            />
          </div>
          <button
            type="submit"
            className="w-full px-8 py-3.5 bg-primary text-primary-foreground font-medium rounded-md hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
          >
            Send Message <ArrowRight className="w-4 h-4" />
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
