import Hero from "@/components/landing/Hero/Hero";
import Features from "@/components/landing/Features/Features";
import ZigZag from "@/components/landing/ZigZag/ZigZag";
import ModulesSection from "@/components/landing/Modules/SurveyModules";
import FinalCTA from "@/components/landing/FinalCTA/FinalCTA";

export default function Page() {
  return (
    <>
      <Hero />
      <ZigZag />
      <Features />
      <ModulesSection />
      <FinalCTA />
    </>
  );
}
