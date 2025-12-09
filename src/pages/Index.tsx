import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { IntroSection } from "@/components/home/IntroSection";
import { HighlightsSection } from "@/components/home/HighlightsSection";
import { SignatureDishes } from "@/components/home/SignatureDishes";
import { ReservationCTA } from "@/components/home/ReservationCTA";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <IntroSection />
      <HighlightsSection />
      <SignatureDishes />
      <ReservationCTA />
    </Layout>
  );
};

export default Index;
