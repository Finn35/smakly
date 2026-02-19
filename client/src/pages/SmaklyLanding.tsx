import Navbar from "@/components/smakly/Navbar";
import Hero from "@/components/smakly/Hero";
import PainPoints from "@/components/smakly/PainPoints";
import Features from "@/components/smakly/Features";
import HowItWorks from "@/components/smakly/HowItWorks";
import Dashboard from "@/components/smakly/Dashboard";
import Testimonials from "@/components/smakly/Testimonials";
import LeadForm from "@/components/smakly/LeadForm";
import Footer from "@/components/smakly/Footer";

export default function SmaklyLanding() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <PainPoints />
        <div id="features">
          <Features />
        </div>
        <HowItWorks />
        <Dashboard />
        <Testimonials />
        <LeadForm />
      </main>
      <Footer />
    </div>
  );
}
