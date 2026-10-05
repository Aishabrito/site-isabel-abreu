import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../sections/Hero";
import TrustBand from "../sections/TrustBand";
import Positioning from "../sections/Positioning";
import Numbers from "../sections/Numbers";
import Services from "../sections/Services";
import Differentiators from "../sections/Differentiators";
import Manifesto from "../sections/Manifesto";
import BlogPreview from "../sections/BlogPreview";
import CTAFinal from "../sections/CTAFinal";

export default function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <TrustBand />
        <Positioning />
        <Numbers />
        <Services />
        <Differentiators />
        <Manifesto />
        <BlogPreview />
        <CTAFinal />
      </main>

      <Footer />
    </>
  );
}
