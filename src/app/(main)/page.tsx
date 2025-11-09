import HeroSection from "@/components/home/heroSection";
import Container from "@/components/ui/Container";

export default function HomePage() {
  return (
    <main>
      {/* HeroSection full width রাখুন */}
      <HeroSection />

      {/* বাকি sections container-এর ভিতরে */}
      <Container>
        {/* <ArtistIntroSection /> */}
        {/* <ProductShowcaseSection /> */}
        {/* অন্যান্য sections */}
      </Container>
    </main>
  );
}
