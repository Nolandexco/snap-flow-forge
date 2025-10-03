import { Button } from "@/components/ui/button";

export const Navbar = () => {
  const scrollToPricing = () => {
    const pricingSection = document.getElementById("pricing-section");
    if (pricingSection) pricingSection.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="sticky top-0 z-50 w-full bg-background border-b border-border backdrop-blur-sm bg-background/80">
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between h-16">
        <div className="text-2xl font-bold text-primary">KODEBISNIS</div>
        <Button onClick={scrollToPricing}>
          Daftar Sekarang →
        </Button>
      </div>
    </nav>
  );
};
