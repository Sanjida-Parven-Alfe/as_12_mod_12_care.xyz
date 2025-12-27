import AboutSection from "@/components/home/AboutSection";
import Banner from "@/components/home/Banner";
import ServicesSection from "@/components/home/ServicesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

export const metadata = {
  title: "Home - Care.xyz | Trusted Caregiving Services",
  description: "Find reliable baby care, elderly care, and sick support services at your doorstep. Verified professionals for your loved ones.",
};

export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Banner />

      <AboutSection />

      <ServicesSection />
      
      <TestimonialsSection />
    </div>
  );
}