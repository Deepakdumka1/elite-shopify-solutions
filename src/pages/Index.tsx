import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import CaseStudies from "@/components/CaseStudies";
import Services from "@/components/Services";
import About from "@/components/About";
import SocialProof from "@/components/SocialProof";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <CaseStudies />
      <Services />
      <About />
      <Testimonials />
      <SocialProof />
      <Contact />
      <Footer />
    </main>
  );
};

export default Index;
