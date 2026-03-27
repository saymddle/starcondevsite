import Hero from "@/components/Hero";
import AboutPreview from "@/components/AboutPreview";
import FeaturedWork from "@/components/FeaturedWork";
import CaseStudies from "@/components/CaseStudies";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <FeaturedWork />
      <CaseStudies />
      <CTA />
    </>
  );
}
