import { Button } from "@/components/ui/button";

export const CTASection = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing-section");
    if (pricingSection) pricingSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="w-full py-20 md:py-32 bg-primary text-primary-foreground text-center">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Siap Memulai Perjalanan Bisnis Anda?
        </h2>
        <p className="mb-8 text-lg opacity-90">
          Bergabung sekarang dan rasakan kemudahan mengelola bisnis dengan teknologi modern.
        </p>
        <Button 
          size="lg"
          variant="secondary"
          className="px-8 py-6 rounded-xl font-semibold"
          onClick={scrollToPricing}
        >
          Daftar Sekarang →
        </Button>
      </div>
    </section>
  );
};
