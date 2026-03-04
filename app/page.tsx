import Hero from "@/components/Hero";
import FeatureCards from "@/components/FeatureCards";
import StatsSection from "@/components/StatsSection";
import StoriesSection from "@/components/StoriesSection";

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureCards />
      <StatsSection />
      <StoriesSection />
    </>
  );
}