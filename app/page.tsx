import HeroSection from "./_components/HeroSection";
import Section from "./_components/Section";
import ImageSection from "./_components/ImageSection";
import ScrollSection from "./_components/ScrollSection";
import FinalSection from "./_components/FinalSection";
import Footer from "./_components/footer";

export default function Home() {
  return (
    <main className="relative w-full h-screen">
      <HeroSection />
      <Section />
      <ImageSection />
      <ScrollSection />
      <FinalSection />
      <Footer />
    </main>
  );
}
