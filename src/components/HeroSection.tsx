import { Button } from "@/components/ui/button";
import { PatternBackground } from "./PatternBackground";

export const HeroSection = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing-section");
    if (pricingSection) pricingSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <PatternBackground className="w-full py-20 md:py-32 lg:py-40">
      <div className="container mx-auto px-4 md:px-6 text-center max-w-3xl">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4">
          Streamline Your Workflow, Elevate Your Success
        </h1>
        <p className="text-lg text-muted-foreground mb-6">
          Kelola bisnis Anda lebih mudah dengan otomatisasi pintar dan integrasi modern.
        </p>
        <Button
          size="lg"
          className="rounded-full h-12 px-8 text-base mb-8"
          onClick={scrollToPricing}
        >
          Get Started Now →
        </Button>
        <div className="flex justify-center">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ"
            title="YouTube video player"
            allowFullScreen
            className="rounded-lg shadow-md max-w-full"
          ></iframe>
        </div>
      </div>
    </PatternBackground>
  );
};
