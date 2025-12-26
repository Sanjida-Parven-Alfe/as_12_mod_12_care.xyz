import AboutSection from "@/components/home/AboutSection";
import Banner from "@/components/home/Banner";
import ServicesSection from "@/components/home/ServicesSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";

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