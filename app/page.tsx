import Hero from "@/components/landing/Hero";
import Features from "@/components/landing/Features";
import ZigZag from "@/components/landing/ZigZag";
import ModulesSection from "@/components/landing/SurveyModules";
import FinalCTA from "@/components/landing/FinalCTA";

export default function Page() {
  return (
    <>
      <Hero />
      <Features />
      <ZigZag />
      <ModulesSection />
      <FinalCTA />
    </>
  );
}
