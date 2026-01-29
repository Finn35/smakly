import Navbar from "@/components/smakly/Navbar";
import Hero from "@/components/smakly/Hero";
import ProblemSection from "@/components/smakly/ProblemSection";
import SolutionSection from "@/components/smakly/SolutionSection";
import ChatDemo from "@/components/smakly/ChatDemo";
import CTABlock from "@/components/smakly/CTABlock";
import ContactForm from "@/components/smakly/ContactForm";
import Footer from "@/components/smakly/Footer";

export default function SmaklyLanding() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Hero />
        <ProblemSection />
        <SolutionSection />
        <ChatDemo />
        <CTABlock />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}

